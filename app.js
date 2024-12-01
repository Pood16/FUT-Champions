// ----------------------- initialisation
let players = JSON.parse(localStorage.getItem("players")) || [];
createCard();
// --------------  DOM
let form = document.getElementById("player-form"); //player form
let formModal = document.querySelector(".form-box"); //model container
let openModal = document.getElementById("open-form"); //add player btn
let closeModal = document.getElementById("close-form");
const saveForm = document.getElementById("submit-btn"); //crrate button
const saveUpdateBtn = document.getElementById("save-change-btn");

// -------------------  actions on add player Form
openModal.addEventListener("click", openModalForm);
closeModal.addEventListener("click", closeModalForm);
function openModalForm() {
  formModal.style.display = "flex";
  saveUpdateBtn.style.display = "none";
  saveForm.style.display = "block";
  form.reset();
}
function closeModalForm() {
  formModal.style.display = "none";
  form.reset();
}
window.addEventListener("click", function (e) {
  if (e.target == formModal) {
    formModal.style.display = "none";
    // clearErrorMessages()
    form.reset();
  }
});
function clearErrorMessages() {
  const messages = document.querySelectorAll(".error-style");
  messages.forEach((message) => message.remove());
}

// --------------------- action on position selector
document
  .getElementById("player-position")
  .addEventListener("change", function () {
    Array.from(document.getElementsByClassName("added-by-js")).forEach(
      (element) => element.remove()
    );
    const position = document.getElementById("player-position");
    let a = "";
    let b = "";
    let c = "";
    let d = "";
    let e = "";
    let f = "";
    if (position.value === "GK") {
      a = `
            <div class="field">
                <label for="handling">Handeling :</label>
                <input type="number" id="handling" name="playerHandling" min="1" max="99" placeholder=" 99"/>
            </div>
              
        `;
      b = `
            <div class="field">
                <label for="kicking">Kicking :</label>
                <input type="number" id="kicking" name="playerKicking" min="1" max="99" placeholder=" 99 "/>
            </div>     
        `;
      c = `
            <div class="field">
                <label for="reflexes">Reflex :</label>
                <input type="number" id="reflexes" name="playerReflexes" min="1" max="99" placeholder=" 99 "/>
            </div>
              
        `;
      d = `
            <div class="field">
                <label for="speed">Speed :</label>
                <input type="number" id="speed" name="playerSpeed" min="1" max="99" placeholder=" 99 "/>
            </div>     
        `;
      e = `
            <div class="field">
                <label for="positioning">Positioning :</label>
                <input type="number" id="positioning" name="playerPositioning" min="1" max="99" placeholder=" 99 "/>
            </div>
              
        `;
      f = `
            <div class="field">
                <label for="diving">Diving :</label>
                <input type="number" id="diving" name="playerDiving" min="1" max="99" placeholder=" 99 "/>
            </div>     
        `;
    } else if (position.value === "") {
      Array.from(document.getElementsByClassName("added-by-js")).forEach(
        (element) => element.remove()
      );
    } else {
      a = `
        <div class="field">
            <label for="physical">Physical :</label>
            <input type="number" name="playerPhysical" id="physical" min="1" max="99" placeholder=" 99 "/>
        </div>
          
    `;
      b = `
        <div class="field">
            <label for="pace">Pace :</label>
            <input type="number" id="pace" name="playerPace" min="1" max="99" placeholder=" 99 "/>
        </div>     
    `;
      c = `
        <div class="field">
            <label for="shooting">Shooting :</label>
            <input type="number" id="shooting" name="playerShooting" min="1" max="99" placeholder=" 99 "/>
        </div>
          
    `;
      d = `
        <div class="field">
            <label for="passing">Passing :</label>
            <input type="number" id="passing" name="playerPassing" min="1" max="99" placeholder=" 99 "/>
        </div>     
    `;
      e = `
        <div class="field">
            <label for="dribbling">Dribbling :</label>
            <input type="number" id="dribbling" name="playerDribbling" min="1" max="99" placeholder=" 99 "/>
        </div>
          
    `;
      f = `
        <div class="field">
            <label for="defending">Defending :</label>
            <input type="number" id="defending" name="playerDefending" min="1" max="99" placeholder=" 99 "/>
        </div>     
    `;
    }
    let divA = document.createElement("div");
    let divB = document.createElement("div");
    let divC = document.createElement("div");
    let divD = document.createElement("div");
    let divE = document.createElement("div");
    let divF = document.createElement("div");
    divA.className = "added-by-js";
    divB.className = "added-by-js";
    divC.className = "added-by-js";
    divD.className = "added-by-js";
    divE.className = "added-by-js";
    divF.className = "added-by-js";
    divA.innerHTML = a;
    divB.innerHTML = b;
    divC.innerHTML = c;
    divD.innerHTML = d;
    divE.innerHTML = e;
    divF.innerHTML = f;
    form.insertBefore(divA, saveForm);
    form.insertBefore(divB, saveForm);
    form.insertBefore(divC, saveForm);
    form.insertBefore(divD, saveForm);
    form.insertBefore(divE, saveForm);
    form.insertBefore(divF, saveForm);
  });
//----------------------  validation de form
form.addEventListener("submit", validateForm);
function validateForm(e) {
  e.preventDefault();
  let isValid = true;
  const messages = document.querySelectorAll(".error-style");
  messages.forEach((message) => message.remove());
  // form inputs
  const textInputs = document.querySelectorAll('input[type="text"]');
  const numberInputs = document.querySelectorAll('input[type="number"]');
  const urlInputs = document.querySelectorAll('input[type="url"]');

  // display error message
  function createError(input, message) {
    const error = document.createElement("p");
    error.className = "error-style";
    error.textContent = message;
    input.parentNode.appendChild(error);
    isValid = false;
  }

  // check the text inputs
  function checkTexts(input) {
    if (input.value.trim() === "") {
      createError(input, "Ce champs ne doit pas etre vide");
    }
  }

  // check numbers
  function checkNumbers(input) {
    const numberValue = Number(input.value);
    if (isNaN(numberValue)) {
      createError(input, "Please Entrer un nombre!");
    } else if (numberValue < 1 || numberValue > 99) {
      createError(input, "Entrer un nombre Entre 1 et 99");
    }
  }
  // validation des URL
  function checkUrls(input) {
    if (input.value.trim() === "") {
      createError(input, "Ce champs ne doit pas etre vide");
    }
  }

  textInputs.forEach((input) => checkTexts(input));
  numberInputs.forEach((input) => checkNumbers(input));
  urlInputs.forEach((input) => checkUrls(input));

  if (isValid) {
    createPlayer();
    form.submit();
  }
}
// ------------------ Create player function
function createPlayer() {
  let playerInformation;
  const positioStats = document.getElementById("player-position").value;
  const communPart = {
    name: document.getElementById("player-name").value.trim(),
    photo: document.getElementById("player-image").value.trim(),
    position: positioStats,
    nationality: document.getElementById("player-nationality").value.trim(),
    flag: document.getElementById("player-flag").value.trim(),
    club: document.getElementById("player-club-name").value.trim(),
    logo: document.getElementById("player-club").value,
    rating: parseInt(document.getElementById("player-rating").value),
  };

  if (positioStats === "GK") {
    playerInformation = {
      ...communPart,
      diving: parseInt(document.getElementById("diving").value),
      handling: parseInt(document.getElementById("handling").value),
      kicking: parseInt(document.getElementById("kicking").value),
      reflexe: parseInt(document.getElementById("reflexes").value),
      speed: parseInt(document.getElementById("speed").value),
      positioning: parseInt(document.getElementById("positioning").value),
    };
  } else {
    playerInformation = {
      ...communPart,
      pace: parseInt(document.getElementById("pace").value),
      shooting: parseInt(document.getElementById("shooting").value),
      passing: parseInt(document.getElementById("passing").value),
      dribbling: parseInt(document.getElementById("dribbling").value),
      defending: parseInt(document.getElementById("defending").value),
      physical: parseInt(document.getElementById("physical").value),
    };
  }
  players.unshift(playerInformation);
  localStorage.setItem("players", JSON.stringify(players));
}

// --------------- createCard Function
function createCard() {
  let updatedPlayers = JSON.parse(localStorage.getItem("players")) || [];
  let cardsContainer = document.getElementById("cards");
  cardsContainer.innerHTML = "";
  updatedPlayers.forEach((player) => {
    const playerContainer = document.createElement("div");
    playerContainer.className = "card-container";
    const firstName = player.name.trim().split(" ");

    let partieNonCommun;
    if (player.position === "GK") {
      partieNonCommun = `
                 <div class="statistics">
                    <div class="field-group">
                        <span class="property-title">DIV</span>
                        <span class="property-value">${player.diving}</span>
                    </div>
                    <div class="field-group">
                        <span class="property-title">HAN</span>
                        <span class="property-value">${player.handling}</span>
                    </div>
                    <div class="field-group">
                        <span class="property-title">KIC</span>
                        <span class="property-value">${player.kicking}</span>
                    </div>
                    <div class="field-group">
                        <span class="property-title">REF</span>
                        <span class="property-value">${player.reflexe}</span>
                    </div>
                    <div class="field-group">
                        <span class="property-title">SPE</span>
                        <span class="property-value">${player.speed}</span>
                    </div>
                    <div class="field-group">
                        <span class="property-title">POS</span>
                        <span class="property-value">${player.positioning}</span>
                    </div>
                </div>
                    <div class="card-footer">
                    <img src="${player.flag}" alt="${player.nationality} flag" class="country-flag">
                    <img src="${player.logo}" alt="${player.club}" class="club-logo">
                    </div>
            `;
    } else {
      partieNonCommun = `
                <div class="statistics">
                    <div class="field-group">
                        <span class="property-title">PAC</span>
                        <span class="property-value">${player.pace}</span>
                    </div>
                    <div class="field-group">
                        <span class="property-title">SHO</span>
                        <span class="property-value">${player.shooting}</span>
                    </div>
                    <div class="field-group">
                        <span class="property-title">PAS</span>
                        <span class="property-value">${player.passing}</span>
                    </div>
                    <div class="field-group">
                        <span class="property-title">DRI</span>
                        <span class="property-value">${player.dribbling}</span>
                    </div>
                    <div class="field-group">
                        <span class="property-title">DEF</span>
                        <span class="property-value">${player.defending}</span>
                    </div>
                    <div class="field-group">
                        <span class="property-title">PHY</span>
                        <span class="property-value">${player.physical}</span>
                    </div>
                </div>
                    <div class="card-footer">
                        <img src="${player.flag}" alt="${player.nationality} flag" class="country-flag">
                        <img src="${player.logo}" alt="${player.club}" class="club-logo">
                    </div>
      `;
    }
    playerContainer.innerHTML = `
            <img src="img/bg/card.webp" alt="card background" width="100%"/>
            <div class="group header-left">
                <p>${player.rating}</p>
                <p class="header-position">${player.position}</p>
            </div>
            <img src="${player.photo}" alt="${player.name} profile" class="player-profile">
            <div class="player-name">${player.name}</div>
            ${partieNonCommun}
            <div class="icons-container">
                <span class="icons edit"><i class="fa-solid fa-user-pen"></i></span>
                <span class="icons delete"><i class="fa-solid fa-user-xmark"></i></span>
            </div>
    
        `;
    cardsContainer.appendChild(playerContainer);
  });
  editPlayer();
  removePlayer();
}

//========================= formula function
const formations = [
  {
    formation: "4-4-2",
    forward: 2,
    midfield: 4,
    defense: 4,
    goalkeeper: 1,
    prototype: {
      forward: [
        { pos: "st", x: 35, y: 30, position: "ST" },
        { pos: "st", x: 65, y: 30, position: "ST" },
      ],
      midfield: [
        { pos: "cm", x: 15, y: 45, position: "LW" },
        { pos: "cm", x: 35, y: 50, position: "CM" },
        { pos: "cm", x: 65, y: 50, position: "CM" },
        { pos: "cm", x: 85, y: 45, position: "RW" },
      ],
      defense: [
        { pos: "cb", x: 20, y: 70, position: "LB" },
        { pos: "cb", x: 40, y: 75, position: "CB" },
        { pos: "cb", x: 60, y: 75, position: "CB" },
        { pos: "cb", x: 80, y: 70, position: "RB" },
      ],
      goalkeeper: [{ pos: "gk", x: 50, y: 95, position: "GK" }],
    },
  },
  {
    formation: "4-3-3",
    forward: 3,
    midfield: 3,
    defense: 4,
    goalkeeper: 1,
    prototype: {
      forward: [
        { pos: "st", x: 20, y: 30, position: "LW" },
        { pos: "st", x: 50, y: 25, position: "ST" },
        { pos: "st", x: 80, y: 30, position: "RW" },
      ],
      midfield: [
        { pos: "cm", x: 30, y: 55, position: "CM" },
        { pos: "cm", x: 50, y: 50, position: "CM" },
        { pos: "cm", x: 70, y: 55, position: "CM" },
      ],
      defense: [
        { pos: "cb", x: 20, y: 70, position: "LB" },
        { pos: "cb", x: 40, y: 75, position: "CB" },
        { pos: "cb", x: 60, y: 75, position: "CB" },
        { pos: "cb", x: 80, y: 70, position: "RB" },
      ],
      goalkeeper: [{ pos: "gk", x: 50, y: 95, position: "GK" }],
    },
  },
];

function repositionCards(x) {
  const formation = formations.find(
    (element) => element.formation.trim() === x
  );
  const cards = document.querySelectorAll(".single-card");
  let cardIndex = 0;
  for (let i = 0; i < formation.forward; i++) {
    const card = cards[cardIndex];
    card.style.left = formation.prototype.forward[i].x + "%";
    card.style.top = formation.prototype.forward[i].y + "%";
    card.setAttribute("position", formation.prototype.forward[i].position);
    cardIndex++;
  }
  for (let i = 0; i < formation.midfield; i++) {
    const card = cards[cardIndex++];
    card.style.left = formation.prototype.midfield[i].x + "%";
    card.style.top = formation.prototype.midfield[i].y + "%";
    card.setAttribute("position", formation.prototype.midfield[i].position);
  }
  for (let i = 0; i < formation.defense; i++) {
    const card = cards[cardIndex++];
    card.style.left = formation.prototype.defense[i].x + "%";
    card.style.top = formation.prototype.defense[i].y + "%";
    card.setAttribute("position", formation.prototype.defense[i].position);
  }

  const card = cards[cardIndex++];
  card.style.left = formation.prototype.goalkeeper[0].x + "%";
  card.style.top = formation.prototype.goalkeeper[0].y + "%";
  card.setAttribute("position", "GK");
}

//   valeur de input select
let formulaType = document.getElementById("formulation-select");
formulaType.addEventListener("change", function () {
  const formulaValue = formulaType.value.trim();
  repositionCards(formulaValue);
});

//   ================================= Remove player Function
function removePlayer() {
  const deleteIcons = document.querySelectorAll(".delete");
  deleteIcons.forEach((element) =>
    element.addEventListener("click", function (e) {
      const parentCard = e.currentTarget.closest(".card-container");
      const targetName = parentCard.children[3].textContent.trim();
      players = players.filter((player) => player.name.trim() !== targetName);
      localStorage.setItem("players", JSON.stringify(players));
      createCard();
    })
  );
}
// var playerIndex;
// ================================== Edit player
let playerIndex;
function editPlayer() {
  const editIcons = document.querySelectorAll(".edit");

  editIcons.forEach((element) =>
    element.addEventListener("click", function (e) {
      const parentCard = e.currentTarget.closest(".card-container");
      const targetName = parentCard.children[3].textContent.trim();
      playerIndex = players.findIndex((player) => player.name === targetName);
      openModal.click();
      saveUpdateBtn.style.display = "block";
      saveForm.style.display = "none";
      form.playerName.value = players[playerIndex].name;
      form.playeRating.value = players[playerIndex].rating;
      form.playerNationality.value = players[playerIndex].nationality;
      form.playerImage.value = players[playerIndex].photo;
      form.playerFlag.value = players[playerIndex].flag;
      form.playerClubName.value = players[playerIndex].club;
      form.playerPosition.value = players[playerIndex].position;
      form.playerClublogo.value = players[playerIndex].logo;
      const event = new Event("change");
      form.playerPosition.dispatchEvent(event);      
      if (players[playerIndex].position === "GK") {
        form.playerHandling.value = players[playerIndex].handling;
        form.playerKicking.value = players[playerIndex].kicking;
        form.playerReflexes.value = players[playerIndex].reflexe;
        form.playerSpeed.value = players[playerIndex].speed;
        form.playerPositioning.value = players[playerIndex].position;
        form.playerDiving.value = players[playerIndex].diving;
      } else {
        form.playerPhysical.value = players[playerIndex].physical;
        form.playerPace.value = players[playerIndex].pace;
        form.playerShooting.value = players[playerIndex].shooting;
        form.playerPassing.value = players[playerIndex].passing;
        form.playerDribbling.value = players[playerIndex].dribbling;
        form.playerDefending.value = players[playerIndex].defending;
      }
      saveUpdateBtn.onclick = function (e) {
        e.preventDefault();
        updatePlayerInLocal(playerIndex);
        form.submit();
        createCard();
      };
    })
  );
}

function updatePlayerInLocal(index) {
  players[playerIndex].name = document
    .getElementById("player-name")
    .value.trim();
  players[playerIndex].photo = document
    .getElementById("player-image")
    .value.trim();
  players[playerIndex].position = form.playerPosition.value;
  players[playerIndex].nationality = document
    .getElementById("player-nationality")
    .value.trim();
  players[playerIndex].flag = document
    .getElementById("player-flag")
    .value.trim();
  players[playerIndex].club = document
    .getElementById("player-club-name")
    .value.trim();
  players[playerIndex].logo = document.getElementById("player-club").value;
  players[playerIndex].rating = parseInt(
    document.getElementById("player-rating").value
  );

  if (form.playerPosition.value === "GK") {
    players[playerIndex].diving = parseInt(
      document.getElementById("diving").value
    );
    players[playerIndex].handling = parseInt(
      document.getElementById("handling").value
    );
    players[playerIndex].kicking = parseInt(
      document.getElementById("kicking").value
    );
    players[playerIndex].reflexe = parseInt(
      document.getElementById("reflexes").value
    );
    players[playerIndex].speed = parseInt(
      document.getElementById("speed").value
    );
    players[playerIndex].positioning = parseInt(
      document.getElementById("positioning").value
    );
  } else {
    players[playerIndex].pace = parseInt(document.getElementById("pace").value);
    players[playerIndex].shooting = parseInt(
      document.getElementById("shooting").value
    );
    players[playerIndex].passing = parseInt(
      document.getElementById("passing").value
    );
    players[playerIndex].dribbling = parseInt(
      document.getElementById("dribbling").value
    );
    players[playerIndex].defending = parseInt(
      document.getElementById("defending").value
    );
    players[playerIndex].physical = parseInt(
      document.getElementById("physical").value
    );
  }
  localStorage.setItem("players", JSON.stringify(players));
}

// add players to the pitch
const cardsCollection = document.querySelectorAll(".single-card");
const pitch = document.querySelector(".pitch");

const sideModal = document.createElement("div");
sideModal.classList.add("pitch-model");

// Close button
const closeBtn = document.createElement("span");
closeBtn.classList.add("close-pitch-modal");
closeBtn.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
closeBtn.addEventListener("click", function () {
  sideModal.style.transform = "translateX(100%)";
});
sideModal.appendChild(closeBtn);
document.body.appendChild(sideModal);

cardsCollection.forEach((card) =>
  card.addEventListener("click", function (e) {
    // Clear old cards
    const existingCards = sideModal.querySelectorAll(".similar-card");
    existingCards.forEach((card) => card.remove());

    const clickedCardInPitch = e.currentTarget;

    const positionInDiv = e.currentTarget.getAttribute("position");
    const matchedPositions = players.filter(
      (player) => player.position === positionInDiv
    );

    matchedPositions.forEach(function (player) {
      // Create player card
      const cardContainer = document.createElement("div");
      cardContainer.classList.add("similar-card");
      cardContainer.innerHTML = `
            <img src="${player.photo}" alt="${player.name}">
            <h3>${player.name}</h3>
            <p>Position: ${player.position}</p>
            <p>Rating: ${player.rating}</p>
        `;

      cardContainer.addEventListener("click", function () {
        clickedCardInPitch.innerHTML = `
                
                <div class="player-overlay">
                    <span class="x">X</span>
                    <img src="${player.photo}" alt="${player.name}" class="player-image">
                    <div class="player-info">
                        <p class="player-name">${player.name}</p>
                        <div class="sub-info">
                            <p class="player-position">${player.position}</p>
                            <p class="player-rating">${player.rating}</p>
                        </div>
                    </div>
                </div>
            `;
        sideModal.style.transform = "translateX(100%)";
      });
      sideModal.appendChild(cardContainer);
      document.addEventListener("click", function (e) {
        if (e.target.classList.contains("x")) {
          e.stopPropagation();
          const card = e.target.closest(".single-card");
          if (card) {
            card.innerHTML = "";
          }
        }
      });
    });
    sideModal.style.transform = "translateX(0)";
  })
);
