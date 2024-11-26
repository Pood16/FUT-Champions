




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

// store craeted cards
let allCards = JSON.parse(localStorage.getItem("players")) || [] ;


document.getElementById("create-card-button").addEventListener("click", createCard);



function createCard(e){
    const playerName =  document.getElementById("player-name").value.trim();
    const playerPosition = document.getElementById("player-position").value;
    const playerrate = document.getElementById("player-rating").value;
    const playerImage = document.getElementById("player-image").value.trim();
    const playerClub = document.getElementById("player-club").value.trim();
    const playerFlag = document.getElementById("player-flag").value.trim();
    const pace = Math.floor(Math.random() * 100) + 1;
    const shoot = Math.floor(Math.random() * 100) + 1;
    const passing = Math.floor(Math.random() * 100) + 1;
    const dribbling = Math.floor(Math.random() * 100) + 1;
    const defending = Math.floor(Math.random() * 100) + 1;
    const physicall = Math.floor(Math.random() * 100) + 1;
    // const diving = Math.floor(Math.random() * 100) + 1;
    // const handel = Math.floor(Math.random() * 100) + 1;
    // const kick = Math.floor(Math.random() * 100) + 1;
    // const reflex = Math.floor(Math.random() * 100) + 1;
    // const speed = Math.floor(Math.random() * 100) + 1;
    // const positioning = Math.floor(Math.random() * 100) + 1;
    const cardContainer = document.getElementById("cards");
    
        cardContainer.innerHTML += `
                    <div class="card-container">
                                <div class="card-background">
                                    <img src="img/bg/card.webp" alt="card background">
                                </div>
                                <div class="card-info">
                                    <div class="upper">
                                        <table>
                                            <tr class="player-header-stat">
                                                <td>${playerrate}</td>
                                            </tr>
                                            <tr>
                                                <td>${playerPosition}</td>
                                            </tr>
                                        </table>
                                    </div>
                                    <div class="player-profile">
                                        <img src="${playerImage}" alt="" width="150px">
                                    </div>
                                    <span class="player-name">${playerName}</span>
                                    <div>
                                        <table>
                                            <tr>
                                                <td>PAC</td>
                                                <td>SHO</td>
                                                <td>PAS</td>
                                                <td>DRI</td>
                                                <td>DEF</td>
                                                <td>PHY</td>
                                              </tr>
                                              <tr class="player-stats-number">
                                                <td>${pace}</td>
                                                <td>${shoot}</td>
                                                <td>${passing}</td>
                                                <td>${dribbling}</td>
                                                <td>${defending}</td>
                                                <td>${physicall}</td>
                                              </tr>
                                        </table>
                                    </div>
                                    <div class="footer-images">
                                        <img src="${playerFlag}" alt="" width="30px">
                                        <img src="${playerClub}" alt="" width="25px">
                                    </div>
                                </div>
                    </div>
               `
    

    
    e.preventDefault();
}


