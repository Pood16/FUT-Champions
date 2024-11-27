




// Partie de formule 
document.getElementById("player-position").addEventListener("change", function(){
    const positionValue = document.getElementById("player-position").value;
    let  notKeeper = document.getElementsByClassName("not-keeper");
    let goalKeeper = document.getElementsByClassName("goal-keeper");
    if (positionValue === "GK"){
        Array.from(notKeeper).forEach(element =>{
            element.classList.add("display-statu");
        })
        Array.from(goalKeeper).forEach(element =>{
            element.classList.remove("display-statu");
        })
    }else{
         Array.from(notKeeper).forEach(element =>{
            element.classList.remove("display-statu");
        })
        Array.from(goalKeeper).forEach(element =>{
            element.classList.add("display-statu");
        })
    }
})

// get list of players 
let players = JSON.parse(localStorage.getItem("players")) || [];

document.getElementById("create-card-button").addEventListener("click", createCard);

function createCard(e){

    e.preventDefault();
    let playerInformation;
    const positioStats = document.getElementById("player-position").value;
    const communPart = {
        "name": document.getElementById("player-name").value.trim(),
        "photo": document.getElementById("player-image").value,
        "position": positioStats,
        "flag": document.getElementById("player-flag").value,
        "club": document.getElementById("player-club").value,
        "logo": document.getElementById("player-club").value,
        "rating": parseInt(document.getElementById("player-rating").value)
    };

    if (positioStats === "GK"){
        playerInformation = {
            ...communPart,
            "diving": parseInt(document.getElementById("diving").value),
            "handling": parseInt(document.getElementById("handling").value),
            "kicking":parseInt( document.getElementById("kicking").value),
            "reflexes": parseInt(document.getElementById("reflexes").value),
            "speed":parseInt( document.getElementById("speed").value),
            "positioning": parseInt(document.getElementById("positioning").value)
        }
    }else{
        playerInformation = {
            ...communPart,
            "pace": parseInt(document.getElementById("pace").value),
            "shooting":parseInt( document.getElementById("shooting").value),
            "passing": parseInt(document.getElementById("passing").value),
            "dribbling": parseInt(document.getElementById("dribbling").value),
            "defending":parseInt( document.getElementById("defending").value),
            "physical":parseInt( document.getElementById("physical").value)
        }
    }
    players.push(playerInformation);
    localStorage.setItem("players", JSON.stringify(players));
    afficherCards();
    e.target.reset();
}
function afficherCards(){
    let cardsContainer = document.getElementById("cards");
    cardsContainer.innerHTML = '';
    players.forEach(player =>{
        const playerContainer = document.createElement("div");
        playerContainer.className = "card-container";
        let partieNonCommun;
        if (player.position === "GK"){
            partieNonCommun = `
                <div class="horizental-stats">
                  <p>DIV</p>
                  <p>${player.diving}</p>
                  <p>HAN</p>
                  <p>${player.handling}</p>
                  <p>CIK</p>
                  <p>${player.kicking}</p>
                </div>
                <div class="bottom-stats">
                  <div class="vertical-stats">
                    <p>REF</p>
                    <p>SPE</p>
                    <p>POS</p>
                  </div>
                  <div class="vertical-stats">  
                    <p>${player.reflexes}</p>
                    <p>${player.speed}</p>
                    <p>${player.positioning}</p>
                  </div>
                </div>  `
        }else{
            partieNonCommun = 
                `
                <div class="horizental-stats">
                  <p>PAC</p>
                  <p>${player.pace}</p>
                  <p>SHO</p>
                  <p>${player.shooting}</p>
                  <p>PAS</p>
                  <p>${player.passing}</p>
                </div>
                <div class="bottom-stats">
                  <div class="vertical-stats">
                    <p>DRI</p>
                    <p>DEF</p>
                    <p>PHY</p>
                  </div>
                  <div class="vertical-stats">  
                    <p>${player.dribbling}</p>
                    <p>${player.defending}</p>
                    <p>${player.physical}</p>
                  </div>
                </div>
      `
        }
        playerContainer.innerHTML = `
            <img src="img/bg/card.webp" alt="card background" width="100%"/>
                <div class="position-rate">
                  <p>${player.rating}</p>
                  <p>${player.position}</p>
                </div>
                <img src="${player.photo}" alt="${player.name}" class="player-profile">
                <h3 class="player-name">${player.name}</h3>
                <div class="footer-card">
                  <img src="${player.flag}" alt="country flag" class="country-flag" width="20px">
                  <img src="${player.club}" alt="club flag" class="club-flag" width="20px">
                </div>
                ${partieNonCommun}
    
        `;
        cardsContainer.appendChild(playerContainer);
    })
}


