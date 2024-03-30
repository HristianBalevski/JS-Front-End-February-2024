function solve() {
  const addButtons = Array.from(
    document.querySelectorAll("button.add-product")
  );
  const textarea = document.querySelector("textarea");
  const checkoutButton = document.querySelector("button.checkout");
  let boughtProducts = new Set();
  let totalPrice = 0;

  addButtons.forEach((element) => {
    element.addEventListener("click", addElementInTheCard);
  });

  function addElementInTheCard(event) {
    const currentProduct = event.currentTarget.parentNode.parentNode;
    const productTitle =
      currentProduct.getElementsByClassName("product-title")[0].textContent;
    const price =
      currentProduct.getElementsByClassName("product-line-price")[0]
        .textContent;

    boughtProducts.add(productTitle);
    totalPrice += Number(price);

    textarea.textContent += `Added ${productTitle} for ${price} to the cart.\n`;
  }
  checkoutButton.addEventListener("click", checkout);

  function checkout(event) {
    const allProducts = Array.from(boughtProducts).join(", ");
    textarea.value += `You bought ${allProducts} for ${totalPrice.toFixed(2)}.`;
    event.target.setAttribute("disabled", true);
    for (btn of addButtons) {
      btn.setAttribute("disabled", true);
    }
  }
}
