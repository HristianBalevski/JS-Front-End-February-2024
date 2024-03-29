function validate() {
  const input = document
    .getElementById("email")
    .addEventListener("change", onChange);

  function onChange(event) {
    const pattern = /^[a-z]+@[a-z]+\.[a-z]{2,}$/g;
    const element = event.currentTarget;

    if (pattern.test(element.value)) {
      element.classList.remove("error");
    } else {
      element.classList.add("error");
    }
  }
}
