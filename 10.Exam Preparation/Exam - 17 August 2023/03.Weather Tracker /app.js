const baseUrl = "http://localhost:3030/jsonstore/tasks";
const historyBtn = document.getElementById("load-history");
const divList = document.getElementById("list");
const addWeatherBtn = document.getElementById("add-weather");
const locationInput = document.getElementById("location");
const temperatureInput = document.getElementById("temperature");
const dateInput = document.getElementById("date");
const editWeatherBtn = document.getElementById("edit-weather");

let currentId = null;

historyBtn.addEventListener("click", loadHistory);
addWeatherBtn.addEventListener("click", addWeather);
editWeatherBtn.addEventListener("click", editWeather);

async function loadHistory() {
  try {
    const response = await fetch(baseUrl);
    if (!response.ok) {
      throw new Error("Failed to load weather history");
    }
    const data = await response.json();
    renderHistory(data);
  } catch (error) {
    console.error(error);
  }
}

function renderHistory(data) {
  divList.innerHTML = "";
  for (const city of Object.values(data)) {
    const container = createWeatherEntry(city);
    divList.appendChild(container);
  }
}

function createWeatherEntry(city) {
  const container = document.createElement("div");
  container.classList.add("container");

  const cityName = document.createElement("h2");
  cityName.textContent = city.location;

  const date = document.createElement("h3");
  date.textContent = city.date;

  const celsius = document.createElement("h3");
  celsius.textContent = city.temperature;

  const changeBtn = document.createElement("button");
  changeBtn.classList.add("change-btn");
  changeBtn.textContent = "Change";
  changeBtn.addEventListener("click", () => editCity(city));

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete-btn");
  deleteBtn.textContent = "Delete";
  deleteBtn.addEventListener("click", () => deleteCity(city._id));

  container.appendChild(cityName);
  container.appendChild(date);
  container.appendChild(celsius);
  container.appendChild(changeBtn);
  container.appendChild(deleteBtn);

  return container;
}

async function addWeather() {
  try {
    const newCity = getInputData();
    const response = await fetch(baseUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newCity),
    });
    if (!response.ok) {
      throw new Error("Failed to add new weather entry");
    }
    clearInputData();
    await loadHistory();
  } catch (error) {
    console.error(error);
  }
}

async function editWeather() {
  try {
    const { location, temperature, date } = getInputData();
    const response = await fetch(`${baseUrl}/${currentId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ location, temperature, date }),
    });
    if (!response.ok) {
      throw new Error("Failed to edit weather entry");
    }
    clearInputData();
    editWeatherBtn.disabled = true;
    addWeatherBtn.disabled = false;
    await loadHistory();
  } catch (error) {
    console.error(error);
  }
}

function editCity(city) {
  locationInput.value = city.location;
  temperatureInput.value = city.temperature;
  dateInput.value = city.date;
  currentId = city._id;
  editWeatherBtn.disabled = false;
  addWeatherBtn.disabled = true;
}

async function deleteCity(cityId) {
  try {
    const response = await fetch(`${baseUrl}/${cityId}`, { method: "DELETE" });
    if (!response.ok) {
      throw new Error("Failed to delete city");
    }
    await loadHistory();
  } catch (error) {
    console.error(error);
  }
}

function getInputData() {
  return {
    location: locationInput.value,
    temperature: temperatureInput.value,
    date: dateInput.value,
  };
}

function clearInputData() {
  locationInput.value = "";
  temperatureInput.value = "";
  dateInput.value = "";
}
