function attachEvents() {
  let url = "http://localhost:3030/jsonstore/phonebook";
  let ul = document.getElementById("phonebook");
  const btnLoad = document.getElementById("btnLoad");
  const personInput = document.getElementById("person");
  const phoneInput = document.getElementById("phone");

  function createElements(entry) {
    entry.forEach((element) => {
      const id = element[1]._id;
      const person = element[1].person;
      const phone = element[1].phone;

      let li = document.createElement("li");
      li.textContent = `${person}: ${phone}`;

      let deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";

      li.appendChild(deleteButton);
      ul.appendChild(li);

      deleteButton.addEventListener("click", () => {
        fetch(`${url}/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => response.json())
          .then(() => {
            li.remove();
          });
      });
    });
  }

  btnLoad.addEventListener("click", createGetRequest);

  function createGetRequest() {
    ul.textContent = "";
    fetch(url)
      .then((response) => response.json())
      .then((data) => createElements(Object.entries(data)));
  }

  const btnCreate = document.getElementById("btnCreate");
  btnCreate.addEventListener("click", createPostRequest);

  function createPostRequest() {
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        person: personInput.value,
        phone: phoneInput.value,
      }),
    })
      .then((res) => res.json())
      .then(() => createGetRequest());

    personInput.value = "";
    phoneInput.value = "";
  }
}

attachEvents();
