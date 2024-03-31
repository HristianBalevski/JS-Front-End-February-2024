function attachEventsListeners() {
  const days = document.getElementById("days");
  const daysBtn = document.getElementById("daysBtn");

  const hours = document.getElementById("hours");
  const hoursBtn = document.getElementById("hoursBtn");

  const minutes = document.getElementById("minutes");
  const minutesBtn = document.getElementById("minutesBtn");

  const seconds = document.getElementById("seconds");
  const secondsBtn = document.getElementById("secondsBtn");

  daysBtn.addEventListener("click", (event) => {
    hours.value = days.value * 24;
    minutes.value = hours.value * 60;
    seconds.value = minutes.value * 60;
  });

  hoursBtn.addEventListener("click", (event) => {
    days.value = hours.value / 24;
    minutes.value = hours.value * 60;
    seconds.value = minutes.value * 60;
  });

  minutesBtn.addEventListener("click", (event) => {
    hours.value = minutes.value / 60;
    days.value = hours.value / 24;
    seconds.value = minutes.value * 60;
  });

  secondsBtn.addEventListener("click", (event) => {
    minutes.value = seconds.value / 60;
    hours.value = minutes.value / 60;
    days.value = hours.value / 24;
  });
}
