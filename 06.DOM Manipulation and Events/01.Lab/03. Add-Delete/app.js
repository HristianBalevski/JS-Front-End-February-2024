function addItem() {
  let listWithItems = document.getElementById("items");
  const input = document.getElementById("newItemText").value;
  const li = document.createElement("li");
  li.textContent = input;

  let removeLink = document.createElement("a");
  const anchorText = document.createTextNode("[Delete]");

  removeLink.appendChild(anchorText);
  removeLink.href = "#";
  removeLink.addEventListener("click", deleteItem);

  li.appendChild(removeLink);
  listWithItems.appendChild(li);

  function deleteItem() {
    li.remove();
  }
}
