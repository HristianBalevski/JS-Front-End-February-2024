window.addEventListener("load", solve);

function solve() {
  const addBtn = document.getElementById("add-btn");
  const container = document.getElementById("check-list");
  const contactList = document.getElementById("contact-list");

  addBtn.addEventListener("click", gettingInformation);

  function gettingInformation() {
    const { name, phoneNumber, category } = getInputs();

    if (name && phoneNumber && category) {
      const liElement = document.createElement("li");
      const article = document.createElement("article");

      const nameParagraph = document.createElement("p");
      nameParagraph.textContent = `name:${name}`;

      const phoneParagraph = document.createElement("p");
      phoneParagraph.textContent = `phone:${phoneNumber}`;

      const categoryParagraph = document.createElement("p");
      categoryParagraph.textContent = `category:${category}`;

      article.appendChild(nameParagraph);
      article.appendChild(phoneParagraph);
      article.appendChild(categoryParagraph);

      liElement.appendChild(article);

      const divElement = document.createElement("div");
      divElement.classList.add("buttons");

      const editButton = document.createElement("button");
      editButton.classList.add("edit-btn");
      editButton.addEventListener("click", function () {
        editInformation(name, phoneNumber, category, liElement);
      });

      const saveButton = document.createElement("button");
      saveButton.classList.add("save-btn");
      saveButton.addEventListener("click", function () {
        saveContact(liElement, divElement);
      });

      divElement.appendChild(editButton);
      divElement.appendChild(saveButton);

      liElement.appendChild(divElement);
      container.appendChild(liElement);

      cleanValues();
    }
  }

  function saveContact(liEl, divEl) {
    divEl.remove();
    container.removeChild(liEl);

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("del-btn");
    liEl.appendChild(deleteBtn);
    contactList.appendChild(liEl);

    deleteBtn.addEventListener("click", () => {
      contactList.removeChild(liEl);
    });
  }

  function editInformation(name, phone, category, liEl) {
    document.getElementById("name").value = name;
    document.getElementById("phone").value = phone;
    document.getElementById("category").value = category;

    container.removeChild(liEl);
  }

  function getInputs() {
    const name = document.getElementById("name").value;
    const phoneNumber = document.getElementById("phone").value;
    const category = document.getElementById("category").value;

    return { name, phoneNumber, category };
  }

  function cleanValues() {
    document.getElementById("name").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("category").value = "";
  }
}
