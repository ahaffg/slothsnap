/**
 * Finish loading the DOM before game can start adopted from "Love Maths" 
 * https://github.com/Code-Institute-Solutions/love-maths-2.0-sourcecode
 */
 document.addEventListener("DOMContentLoaded", () => {
  
    //Start button on start screen
    var startButton = document.getElementById("start-button");
    startButton.addEventListener("click", collectPlayerName);
    startButton.addEventListener("click", hideStartScreen);
    startButton.addEventListener("click", showGameScreen);
    startButton.addEventListener("click", mainGame);

    function collectPlayerName() {
        let playerName = document.getElementById("name-box").value;
    
          if (playerName === ("")) {
            document.getElementById("player-name").innerHTML = "Speedy Sloth!";
          } else {
            document.getElementById("player-name").innerHTML = (playerName);
          }
      }
    });

const cards = document.querySelectorAll(".card");
let matched = 0;
let cardOne, cardTwo;
let disableDeck = false;
function flipCard({ target: clickedCard }) {
    if (cardOne !== clickedCard && !disableDeck) {
        clickedCard.classList.add("flip");
        if (!cardOne) {
            return cardOne = clickedCard;
        }
        cardTwo = clickedCard;
        disableDeck = true;
        let cardOneImg = cardOne.querySelector(".back-view img").src,
            cardTwoImg = cardTwo.querySelector(".back-view img").src;
        matchCards(cardOneImg, cardTwoImg);
    }
}
function matchCards(img1, img2) {
    if (img1 === img2) {
        matched++;
        if (matched == 6) {
            setTimeout(() => {
                return shuffleCard();
            }, 1000);
        }
        cardOne.removeEventListener("click", flipCard);
        cardTwo.removeEventListener("click", flipCard);
        cardOne = cardTwo = "";
        return disableDeck = false;
    }
    setTimeout(() => {
        cardOne.classList.add("shake");
        cardTwo.classList.add("shake");
    }, 400);
    setTimeout(() => {
        cardOne.classList.remove("shake", "flip");
        cardTwo.classList.remove("shake", "flip");
        cardOne = cardTwo = "";
        disableDeck = false;
    }, 1200);
}
function shuffleCard() {
    matched = 0;
    disableDeck = false;
    cardOne = cardTwo = "";
    let arr = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6];
    arr.sort(() => Math.random() > 0.5 ? 1 : -1);
    cards.forEach((card, i) => {
        card.classList.remove("flip");
        let imgTag = card.querySelector(".back-view img");
        imgTag.src = `images/img-${arr[i]}.png`;
        card.addEventListener("click", flipCard);
    });
}
shuffleCard();

cards.forEach(card => {
    card.addEventListener("click", flipCard);
});

/**
* Function that hides the start screen
*/
function hideStartScreen() {
    let toggleStartScreen = document.getElementById("start-wrapper");
    if (toggleStartScreen.style.display === "none") {
      toggleStartScreen.style.display = "block";
    } else {
        toggleStartScreen.style.display = "none";
      }
  }
  
  /**
  * Function that shows the start screen
  */
  function showStartScreen() {
    let toggleStartScreen = document.getElementById("start-wrapper");
    if (toggleStartScreen.style.display === "block") {
      toggleStartScreen.style.display = "none";
    } else {
        toggleStartScreen.style.display = "block";
    }
  }
  
  /**
  * Function that shows the main game screen
  */
  function showGameScreen() {
    let toggleGameScreen = document.getElementById("main-wrapper");
    if (toggleGameScreen.style.display === "block") {
      toggleGameScreen.style.display = "none";
    } else {
        toggleGameScreen.style.display = "block";
      }
  }
  
  /**
  * Function that hides the main game screen
  */
  function hideGameScreen() {
    let toggleGameScreen = document.getElementById("main-wrapper");
    if (toggleGameScreen.style.display === "none") {
      toggleGameScreen.style.display = "block";
    } else {
      toggleGameScreen.style.display = "none";
    }
  }
  
  /**
  * Function that shows the end screen
  */
  function showEndScreen() {
    let toggleEndScreen = document.getElementById("end-wrapper");
    if (toggleEndScreen.style.display === "block") {
      toggleEndScreen.style.display = "none";
    } else {
        toggleEndScreen.style.display = "block";
      }
  }
  
  /**
  * Function that hides the end screen
  */
  function hideEndScreen() {
    let toggleEndScreen = document.getElementById("end-wrapper");
    if (toggleEndScreen.style.display === "none") {
      toggleEndScreen.style.display = "block";
    } else {
      toggleEndScreen.style.display = "none";
      }
  }
  
  /**
  * Clears the game board of cards upon restart (Play again)
  */
  function clearGameCards () {
    let oldGameBoard = document.getElementById("main-screen");
    oldGameBoard.innerHTML = "";
  }
  
  