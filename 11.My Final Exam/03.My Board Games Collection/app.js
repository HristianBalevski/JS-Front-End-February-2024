const baseUrl = "http://localhost:3030/jsonstore/games";
const loadGamesBtn = document.getElementById("load-games");
const gamesList = document.getElementById("games-list");

const addGameBtn = document.getElementById("add-game");
const gameNameInput = document.getElementById("g-name");
const typeInput = document.getElementById("type");
const playersInput = document.getElementById("players");

const editGameBtn = document.getElementById("edit-game");
let currentId = null;

const loadGames = async () => {
  try {
    const response = await fetch(baseUrl);
    const data = await response.json();

    gamesList.innerHTML = "";

    for (const game of Object.values(data)) {
      currentId = game._id;
      const gameElement = document.createElement("div");
      gameElement.classList.add("board-game");

      const content = document.createElement("div");
      content.classList.add("content");
      const gameName = document.createElement("p");
      gameName.textContent = game.name;
      const typeOfGame = document.createElement("p");
      typeOfGame.textContent = game.type;
      const numberOfPlayers = document.createElement("p");
      numberOfPlayers.textContent = game.players;

      content.appendChild(gameName);
      content.appendChild(typeOfGame);
      content.appendChild(numberOfPlayers);

      const buttonsContainer = document.createElement("div");
      const changeBtn = document.createElement("button");
      changeBtn.classList.add("change-btn");
      changeBtn.textContent = "Change";

      const deleteButton = document.createElement("div");
      deleteButton.classList.add("delete-btn");
      deleteButton.textContent = "Delete";

      buttonsContainer.appendChild(changeBtn);
      buttonsContainer.appendChild(deleteButton);

      gameElement.appendChild(content);
      gameElement.appendChild(buttonsContainer);

      gamesList.appendChild(gameElement);

      changeBtn.addEventListener("click", () => {
        gameNameInput.value = game.name;
        typeInput.value = game.type;
        playersInput.value = game.players;

        editGameBtn.disabled = false;
        addGameBtn.disabled = true;

        gameElement.remove();

        editGameBtn.addEventListener("click", async () => {
          const editedGame = getInputData();
          await fetch(`${baseUrl}/${game._id}`, {
            method: "PUT",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(editedGame),
          });

          editGameBtn.disabled = true;
          addGameBtn.disabled = false;

          clearInputData();
          await loadGames();
        });
      });

      deleteButton.addEventListener("click", async () => {
        await fetch(`${baseUrl}/${currentId}`, {
          method: "DELETE",
        });

        gameElement.remove();
      });
    }
  } catch (error) {
    console.error("Error loading games:", error);
  }
};

loadGamesBtn.addEventListener("click", loadGames);

addGameBtn.addEventListener("click", async () => {
  try {
    const newGame = getInputData();

    const response = await fetch(baseUrl, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newGame),
    });

    if (response.ok) {
      clearInputData();
      await loadGames();
    }
  } catch (error) {
    console.error("Error adding game:", error);
  }
});

function getInputData() {
  const name = gameNameInput.value;
  const type = typeInput.value;
  const players = playersInput.value;

  return { name, type, players };
}

function clearInputData() {
  gameNameInput.value = "";
  typeInput.value = "";
  playersInput.value = "";
}
