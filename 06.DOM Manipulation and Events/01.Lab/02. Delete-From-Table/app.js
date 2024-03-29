function deleteByEmail() {
  const email = document.querySelector('input[name="email"]').value;
  const tableRows = Array.from(document.querySelectorAll("tbody tr td"));
  let result = document.getElementById("result");
  let match = false;

  for (td of tableRows) {
    if (td.textContent === email) {
      let row = td.parentNode;

      row.parentNode.removeChild(row);
      result.textContent = "Deleted";
      match = true;
      break;
    }
  }
  if (!match) {
    result.textContent = "Not found.";
  }
}
