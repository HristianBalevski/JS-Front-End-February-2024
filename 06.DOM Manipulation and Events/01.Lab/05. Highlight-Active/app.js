function focused() {
  const squareElements = Array.from(document.getElementsByTagName("input"));

  for (const square of squareElements) {
    square.addEventListener("focus", onFocus);
    square.addEventListener("blur", onBlur);

    function onFocus(event) {
      const parentDiv = event.currentTarget.parentNode;
      parentDiv.classList.add("focused");
    }

    function onBlur(event) {
      const parentDiv = event.currentTarget.parentNode;
      parentDiv.classList.remove("focused");
    }
  }
}
