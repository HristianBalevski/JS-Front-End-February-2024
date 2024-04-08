function attachEvents() {
  const url = "http://localhost:3030/jsonstore/messenger";
  const sendBtn = document.getElementById("submit");

  sendBtn.addEventListener("click", sendPostRequest);

  function sendPostRequest() {
    const authorNameInput = document.querySelector('input[name="author"]');
    const messageInput = document.querySelector('input[name="content"]');

    const author = authorNameInput.value;
    const content = messageInput.value;

    let message = {
      author,
      content,
    };

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(message),
    });

    authorNameInput.value = "";
    messageInput.value = "";
  }

  const refreshBtn = document.getElementById("refresh");
  const textarea = document.getElementById("messages");

  refreshBtn.addEventListener("click", getAllMessages);

  function getAllMessages() {
    textarea.textContent = "";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        let messagesStr = Object.values(data)
          .map((message) => `${message.author}: ${message.content}`)
          .join("\n");

        textarea.textContent += messagesStr;
      });
  }
}

attachEvents();
