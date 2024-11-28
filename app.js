
// ========
let players = JSON.parse(localStorage.getItem("players")) || [];
afficherCards();
// display and hide form
let form = document.getElementById("player-form");
let formModal = document.querySelector(".form-box");
let openModal = document.getElementById("open-form");
let closeModal = document.getElementById("close-form");
const buttonForm = document.getElementById("submit-btn");
openModal.addEventListener("click", function(){
    formModal.style.display = "flex";
})
closeModal.addEventListener("click", function(){
    formModal.style.display = "none";
})
window.addEventListener("click", function(e){
    if(e.target == formModal){
        formModal.style.display = "none";
    }
})

// the position select
document.getElementById("player-position").addEventListener("change", function(){
    Array.from(document.getElementsByClassName("added-by-js")).forEach(element => element.remove());
    const position = document.getElementById("player-position");
    let a = "";
    let b = "";
    let c = "";
    let d = "";
    let e = "";
    let f = "";
    if (position.value === "GK"){
        a = `
            <div class="field">
                <label for="handling">Handeling :</label>
                <input type="number" id="handling" min="1" max="99" placeholder=" 99 "/>
            </div>
              
        `
        b = `
            <div class="field">
                <label for="kicking">Kicking :</label>
                <input type="number" id="kicking" min="1" max="99" placeholder=" 99 "/>
            </div>     
        `
        c = `
            <div class="field">
                <label for="reflexes">Reflex :</label>
                <input type="number" id="reflexes" min="1" max="99" placeholder=" 99 "/>
            </div>
              
        `
        d = `
            <div class="field">
                <label for="speed">Speed :</label>
                <input type="number" id="speed" min="1" max="99" placeholder=" 99 "/>
            </div>     
        `
        e = `
            <div class="field">
                <label for="positioning">Positioning :</label>
                <input type="number" id="positioning" min="1" max="99" placeholder=" 99 "/>
            </div>
              
        `
        f = `
            <div class="field">
                <label for="diving">Diving :</label>
                <input type="number" id="diving" min="1" max="99" placeholder=" 99 "/>
            </div>     
        `
    }else{
        a = `
        <div class="field">
            <label for="physical">Physical :</label>
            <input type="number" id="physical" min="1" max="99" placeholder=" 99 "/>
        </div>
          
    `
    b = `
        <div class="field">
            <label for="pace">Pace :</label>
            <input type="number" id="pace" min="1" max="99" placeholder=" 99 "/>
        </div>     
    `
    c = `
        <div class="field">
            <label for="shooting">Shooting :</label>
            <input type="number" id="shooting" min="1" max="99" placeholder=" 99 "/>
        </div>
          
    `
    d = `
        <div class="field">
            <label for="passing">Passing :</label>
            <input type="number" id="passing" min="1" max="99" placeholder=" 99 "/>
        </div>     
    `
    e = `
        <div class="field">
            <label for="dribbling">Dribbling :</label>
            <input type="number" id="dribbling" min="1" max="99" placeholder=" 99 "/>
        </div>
          
    `
    f = `
        <div class="field">
            <label for="defending">Defending :</label>
            <input type="number" id="defending" min="1" max="99" placeholder=" 99 "/>
        </div>     
    `
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
    form.insertBefore(divA, buttonForm);
    form.insertBefore(divB, buttonForm);
    form.insertBefore(divC, buttonForm);
    form.insertBefore(divD, buttonForm);
    form.insertBefore(divE, buttonForm);
    form.insertBefore(divF, buttonForm);
})
// validation de form
form.addEventListener("submit", function(e){
    e.preventDefault();
    let isValid = true;
    const messages = document.querySelectorAll(".error-style");
  messages.forEach(message => message.remove());
  // form inputs
  const textInputs = document.querySelectorAll('input[type="text"]');
  const numberInputs = document.querySelectorAll('input[type="number"]');
  const urlInputs = document.querySelectorAll('input[type="url"]');

  // error container
  function createError(input, message){
     const error = document.createElement("p");
     error.className = "error-style";
     error.textContent = message;
     input.parentNode.appendChild(error);
     isValid = false;
  }


  // check the text inputs
  function checkTexts(input){
    if (input.value.trim()===""){
      createError(input, "Ce champs ne doit pas etre vide");
    }
  }

  // check numbers
  function checkNumbers(input){
    const numberValue = Number(input.value);
    if (isNaN(numberValue)){
        createError(input, "Please Entrer un nombre!");
    }else if (numberValue < 1 || numberValue > 99){
        createError(input, "Entrer un nombre Entre 1 et 99");
    } 
  }
// validation des URL
  textInputs.forEach(input => checkTexts(input));
  numberInputs.forEach(input => checkNumbers(input));

    if(isValid){
        createCard(); 
    }else{
        e.preventDefault();
    }
})
// Created card function 
function createCard(){

    let playerInformation;
    const positioStats = document.getElementById("player-position").value;
    let theName = document.getElementById("player-name").value.trim().split(" ");
    const communPart = {
        name: theName[0],
        photo: document.getElementById("player-image").value.trim(),
        position: positioStats,
        nationality: document.getElementById("player-nationality").value.trim(),
        flag: document.getElementById("player-flag").value.trim(),
        club: document.getElementById("player-club-name").value.trim(),
        logo: document.getElementById("player-club").value,
    rating: parseInt(document.getElementById("player-rating").value)
    };

    if (positioStats === "GK"){
        playerInformation = {
            ...communPart,
        diving: parseInt(document.getElementById("diving").value),
        handling: parseInt(document.getElementById("handling").value),
        kicking:parseInt( document.getElementById("kicking").value),
        reflexe : parseInt(document.getElementById("reflexes").value),
        speed:parseInt( document.getElementById("speed").value),
        positioning: parseInt(document.getElementById("positioning").value)
        }
    }else{
        playerInformation = {
            ...communPart,
        pace: parseInt(document.getElementById("pace").value),
        shooting:parseInt( document.getElementById("shooting").value),
        passing: parseInt(document.getElementById("passing").value),
        dribbling: parseInt(document.getElementById("dribbling").value),
        defending:parseInt( document.getElementById("defending").value),
        physical:parseInt( document.getElementById("physical").value)
        }
    }
    players.unshift(playerInformation);
    localStorage.setItem("players", JSON.stringify(players));
    afficherCards();
}
function afficherCards(){
    let cardsContainer = document.getElementById("cards");
    cardsContainer.innerHTML = '';
    players.forEach(player =>{
        const playerContainer = document.createElement("div");
        playerContainer.className = "card-container";
        const playerName = player.name.trim().split(" ");

        let partieNonCommun;
        if (player.position === "GK"){
            partieNonCommun = `
                 <div class="horizental-stats">
                  <p>DIV</p>
                  <p style="font-weight: 700;">${player.diving}</p>
                  <p>HAN</p>
                  <p style="font-weight: 700;">${player.handling}</p>
                  <p>CIK</p>
                  <p style="font-weight: 700;">${player.kicking}</p>
                </div>
                <table>
                    <tr>
                      <td>REF</td>
                      <td>SPE</td>
                      <td>POS</td>
                    </tr>
                    <tr>
                      <td style="font-weight: 700;">${player.reflexes}</td>
                      <td style="font-weight: 700;">${player.speed}</td>
                      <td style="font-weight: 700;">${player.positioning}</td>
                    </tr>
                  </table>
            `
        }else{
            partieNonCommun = 
                `
                <div class="horizental-stats">
                  <p>PAC</p>
                  <p style="font-weight: 700;">${player.pace}</p>
                  <p>SHO</p>
                  <p style="font-weight: 700;">${player.shooting}</p>
                  <p>PAS</p>
                  <p>${player.passing}</p>
                </div>
                <table>
                    <tr>
                      <td>DEF</td>
                      <td>DRI</td>
                      <td>PHY</td>
                    </tr>
                    <tr>
                      <td style="font-weight: 700;">${player.defending}</td>
                      <td style="font-weight: 700;">${player.dribbling}</td>
                      <td style="font-weight: 700;">${player.physical}</td>
                    </tr>
                  </table>
      `
        }
        playerContainer.innerHTML = `
            <span class="icons add"><i class="fa-solid fa-user-plus"></i></span>
            <span class="icons edit"><i class="fa-solid fa-user-pen"></i></span>
            <img src="img/bg/card.webp" alt="card background" width="100%"/>
                <div class="position-rate">
                  <p>${player.rating}</p>
                  <p>${player.position}</p>
                </div>
                <img src="${player.photo}" alt="${playerName[0]}" class="player-profile">
                <h3 class="player-name">${playerName[0]}</h3>
                <div class="footer-card">
                  <img src="${player.flag}" alt="country flag" class="country-flag" width="15px">
                  <img src="${player.logo}" alt="club flag" class="club-flag" width="15px">
                </div>
                ${partieNonCommun}
    
        `;
        cardsContainer.appendChild(playerContainer);
    })
}

