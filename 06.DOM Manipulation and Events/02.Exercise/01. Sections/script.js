function create(words) {
  let content = document.getElementById("content");

  for (const word of words) {
    let divElement = document.createElement("div");
    let paragraphElement = document.createElement("p");

    paragraphElement.textContent = word;
    paragraphElement.style.display = "none";

    divElement.appendChild(paragraphElement);
    content.appendChild(divElement);

    divElement.addEventListener("click", (event) => {
      paragraphElement.style.display = "block";
    });
  }
}
