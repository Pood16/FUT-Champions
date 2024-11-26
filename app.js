




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
}
function afficherCards(){
    let cardsContainer = document.getElementById("cards");
    cardsContainer.innerHTML = '';
    players.forEach((player, index)=>{
        
    })
}


