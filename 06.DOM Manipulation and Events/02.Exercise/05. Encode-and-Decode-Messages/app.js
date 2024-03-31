function encodeAndDecodeMessages() {
  const encodeArea = document.getElementsByTagName("textarea")[0];
  const encodeButton = document.getElementsByTagName("button")[0];

  const decodeArea = document.getElementsByTagName("textarea")[1];
  const decodeButton = document.getElementsByTagName("button")[1];

  encodeButton.addEventListener("click", encodeMessage);
  decodeButton.addEventListener("click", decodeMessage);

  function encodeMessage() {
    let message = encodeArea.value;
    let newMessage = "";

    for (let i = 0; i < message.length; i++) {
      let newText = String.fromCodePoint(message[i].charCodeAt(0) + 1);

      newMessage += newText;
    }
    decodeArea.value = newMessage;
    encodeArea.value = "";
  }

  function decodeMessage() {
    let message = decodeArea.value;
    let newMessage = "";

    for (let i = 0; i < message.length; i++) {
      let newText = String.fromCodePoint(message[i].charCodeAt(0) - 1);

      newMessage += newText;
    }
    decodeArea.value = newMessage;
  }
}
