window.addEventListener("load", solve);

function solve() {
  const addBtn = document.getElementById("add-btn");
  const ulSureList = document.getElementById("sure-list");
  const playerInput = document.getElementById("player");
  const scoreInput = document.getElementById("score");
  const roundInput = document.getElementById("round");
  const scoreBoardList = document.getElementById("scoreboard-list");
  const clearButton = document.querySelector(".btn.clear");

  addBtn.addEventListener("click", gettingInformation);

  function gettingInformation() {
    const liDartItem = document.createElement("li");
    liDartItem.classList.add("dart-item");

    const article = document.createElement("article");

    const parForPlayer = document.createElement("p");
    parForPlayer.textContent = playerInput.value;

    const parForScore = document.createElement("p");
    const ScoreText = scoreInput.value;
    parForScore.textContent = `Score: ${ScoreText}`;

    const parForRound = document.createElement("p");
    const roundText = roundInput.value;
    parForRound.textContent = `Round: ${roundText}`;

    const editBtn = document.createElement("button");
    editBtn.classList.add("btn", "edit");
    editBtn.textContent = "edit";

    editBtn.addEventListener("click", () => {
      playerInput.value = parForPlayer.textContent;
      scoreInput.value = ScoreText;
      roundInput.value = roundText;

      ulSureList.innerHTML = "";
      addBtn.disabled = false;
    });

    const okBtn = document.createElement("button");
    okBtn.classList.add("btn", "ok");
    okBtn.textContent = "ok";

    okBtn.addEventListener("click", () => {
      ulSureList.innerHTML = "";
      liDartItem.removeChild(editBtn);
      liDartItem.removeChild(okBtn);
      scoreBoardList.appendChild(liDartItem);

      addBtn.disabled = false;
    });

    article.appendChild(parForPlayer);
    article.appendChild(parForScore);
    article.appendChild(parForRound);

    liDartItem.appendChild(article);
    liDartItem.appendChild(editBtn);
    liDartItem.appendChild(okBtn);

    ulSureList.appendChild(liDartItem);

    addBtn.disabled = true;
    clearInputs();
  }

  clearButton.addEventListener("click", () => {
    location.reload();
  });

  function clearInputs() {
    playerInput.value = "";
    scoreInput.value = "";
    roundInput.value = "";
  }
}
