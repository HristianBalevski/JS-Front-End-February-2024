function attachGradientEvents() {
  let gradient = document.getElementById("gradient");
  gradient.addEventListener("mousemove", gradientMove);
  gradient.addEventListener("mouseout", gradientOut);

  let result = document.getElementById("result");

  function gradientMove(event) {
    const gradientWidth = gradient.clientWidth;
    const distance = event.offsetX;
    const percentage = Math.trunc((distance / gradientWidth) * 100);

    result.textContent = percentage + "%";
  }

  function gradientOut(event) {
    result.textContent = "";
  }
}
