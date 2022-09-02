/**
 * Event Listeners
*/

document.addEventListener("DOMContentLoaded", function () {
  shuffledCards();
  imageGenerator();
});

/* Select Game Type - Card Grid Generator chooses the cards used
  * and CSS changes the layout of the grid.
*/

var easy = true;
var medium = false;
var hard = false;
var easyScore = 100;
var mediumScore = 100;
var hardScore = 100;

let hiddenScore = 0;

/* Code for Easy, Medium and Hard buttons. */
let easyButton = document.getElementsByClassName("easy");
easyButton[0].addEventListener("click", () => {
  easy = true;
  medium = false;
  hard = false;
  gameType = document.getElementsByClassName("game");
  gameType[0].classList.add("easy-game");
  gameType[0].classList.remove("medium-game");
  gameType[0].classList.remove("hard-game");
  levelSelect();
  hiddenScore = 0;
  document.getElementById("difficulty-text").innerText = "Easy";
});
let mediumButton = document.getElementsByClassName("medium");
mediumButton[0].addEventListener("click", () => {
  medium = true;
  easy = false;
  hard = false;
  gameType = document.getElementsByClassName("game");
  gameType[0].classList.remove("easy-game");
  gameType[0].classList.add("medium-game");
  gameType[0].classList.remove("hard-game");
  levelSelect();
  hiddenScore = 0;
  document.getElementById("difficulty-text").innerText = "Medium";
});
let hardButton = document.getElementsByClassName("hard");
hardButton[0].addEventListener("click", () => {
  hard = true;
  easy = false;
  medium = false;
  gameType = document.getElementsByClassName("game");
  gameType[0].classList.remove("easy-game");
  gameType[0].classList.remove("medium-game");
  gameType[0].classList.add("hard-game");
  levelSelect();
  hiddenScore = 0;
  document.getElementById("difficulty-text").innerText = "Hard";
});

/**
* Image List - An array of all the images, used by the Shuffle Cards section
* before going into the game. Images 1-6 are used for the easy game, 7 and 8
* are added for the medium game and 9, 10, 11 and 12 are added for the hard game. 
*/

let getImages = [{
  imgSrc: "./assets/images/sloth_1.png",
  name: "sloth_1"
}, {
  imgSrc: "./assets/images/sloth_1.png",
  name: "sloth_1"
}, {
  imgSrc: "./assets/images/sloth_2.png",
  name: "sloth_2"
}, {
  imgSrc: "./assets/images/sloth_2.png",
  name: "sloth_2"
}, {
  imgSrc: "./assets/images/sloth_3.png",
  name: "sloth_3"
}, {
  imgSrc: "./assets/images/sloth_3.png",
  name: "sloth_3"
}, {
  imgSrc: "./assets/images/sloth_4.png",
  name: "sloth_4"
}, {
  imgSrc: "./assets/images/sloth_4.png",
  name: "sloth_4"
}, {
  imgSrc: "./assets/images/sloth_5.png",
  name: "sloth_5"
}, {
  imgSrc: "./assets/images/sloth_5.png",
  name: "sloth_5"
}, {
  imgSrc: "./assets/images/sloth_6.png",
  name: "sloth_6"
}, {
  imgSrc: "./assets/images/sloth_6.png",
  name: "sloth_6"
}, {
  imgSrc: "./assets/images/sloth_7.png",
  name: "sloth_7"
}, {
  imgSrc: "./assets/images/sloth_7.png",
  name: "sloth_7"
}, {
  imgSrc: "./assets/images/sloth_8.png",
  name: "sloth_8"
}, {
  imgSrc: "./assets/images/sloth_8.png",
  name: "sloth_8"
}, {
  imgSrc: "./assets/images/sloth_9.png",
  name: "sloth_9"
}, {
  imgSrc: "./assets/images/sloth_9.png",
  name: "sloth_9"
}, {
  imgSrc: "./assets/images/sloth_10.png",
  name: "sloth_10"
}, {
  imgSrc: "./assets/images/sloth_10.png",
  name: "sloth_10"
}, {
  imgSrc: "./assets/images/sloth_11.png",
  name: "sloth_11"
}, {
  imgSrc: "./assets/images/sloth_11.png",
  name: "sloth_1"
}, {
  imgSrc: "./assets/images/sloth_12.png",
  name: "sloth_12"
}, {
  imgSrc: "./assets/images/sloth_12.png",
  name: "sloth_12"
},
]

/**
* Shuffle Cards - Takes the getImages array, slices it down to size depending 
* on the difficulty and shuffles the cards into the new arrayOrder which is
* sent to the card grid generator.
*/

let shuffledCards = () => {
  if (easy === true) {
      let arrayOrder = getImages.slice(0, 12);
      arrayOrder.sort(() => Math.random() - 0.5);
      return arrayOrder;
  } else if (medium === true) {
      let arrayOrder = getImages.slice(0, 18);
      arrayOrder.sort(() => Math.random() - 0.5);
      return arrayOrder;
  } else if (hard === true) {
      let arrayOrder = getImages.slice(0, 24);
      arrayOrder.sort(() => Math.random() - 0.5);
      return arrayOrder;
  }
};

/**
* Generate Card Grid - Creates the cards by placing div elements into
* a grid, then placing the front of the card as an image using the
* shuffled array and creates the back of the card using a single image in CSS.
* Each card has the name of the image attached to it for checking. 
* The card divs can be clicked on which pushes the clicked card into the
* numberOfCards array for checking and triggers the checkForMatch function.
* The front and the back of the cards rotate 180degrees when the card is clicked on.
*/

let imageGenerator = () => {
  let arrayOrder = shuffledCards();

  arrayOrder.forEach((element) => {
      let card = document.createElement("div");
      let picture = document.createElement("img");
      let back = document.createElement("div");

      card.classList.add("card");
      card.id = "card";
      picture.classList.add("picture");
      back.classList.add("back");

      picture.src = element.imgSrc;
      card.setAttribute("name", element.name);

      game = document.getElementsByClassName("game");
      game[0].appendChild(card);
      card.appendChild(picture);
      card.appendChild(back);

      picture.src = element.imgSrc;

      card.addEventListener("click", (names) => {
          numberOfCards.push(element);
          console.log(numberOfCards[0]);
          console.log(numberOfCards[1]);
          card.classList.add("correct");
          card.classList.toggle("flipCard");
          checkForMatch(names);

      });
  });
};

/**
* Compare Cards - After a card is clicked on the checkForMatch function checks if there are 2
* cards in the numberOfCards array. If so, it then compares the names of the cards. 
* If correct, the turn counter is increased, a 'counter' is added to an array that
* checks for the end of the game, the array that compares the cards is cleared and
* two classes are changed so that the cards stay flipped over and becomes unclickable.
* If incorrect, the turn counter is increased and the cards flip back over after a short delay.
*/

let numberOfCards = [];
let flipCounter = [];
const checkForMatch = (names) => {

  let targetCard = names.target;
  let flipCard = document.querySelectorAll(".flipCard");

  if (numberOfCards.length === 2) {

      if (numberOfCards[0].name === numberOfCards[1].name) {
          console.log("match");
          incrementScore();
          flipCounter.push(1);
          flipCard.forEach((card) => {
              numberOfCards = [];
              targetCard.classList.add("counter");
              card.classList.remove("flipCard");
          });
          console.log(flipCounter)
      } else {
          console.log("wrong");
          incrementScore();
          flipCard.forEach((card) => {
              setTimeout(() => card.classList.remove("flipCard"), 1000);
              setTimeout(() => card.classList.remove("correct"), 1000);
              numberOfCards = [];


          });
      }
  }
/* Checks to see if game has completed */
  if (easy === true && flipCounter.length === 6) {
      gameWin();
  }
  if (medium === true && flipCounter.length === 9) {
      gameWin();
  }
  if (hard === true && flipCounter.length === 12) {
      gameWin();
  }
};
/**
* Moves Counter - Increases the number of moves and shows this to the player.
*/

function incrementScore() {
  let totalScore = parseInt(document.getElementById("score").innerText);
  document.getElementById("score").innerText = ++totalScore;
  let incrementScore = parseInt(document.getElementById("total-score").innerText);
  document.getElementById("total-score").innerText = ++incrementScore;
  ++hiddenScore;
}
/**
* Game Win - When the if statements in the card checker trigger the gameWin, the div containing 
* the congratulations message becomes visable and interactable.
*/

let gameWin = () => {
  win = document.getElementsByClassName("congratulations");
  win[0].classList.toggle("congratulationsHidden");

  /* If statements update the users best score depending on the difficulty */

  if (easy === true && hiddenScore < easyScore) {
      document.getElementById("previous-score").innerText = hiddenScore;
      easyScore = hiddenScore;
  }

  if (medium === true && hiddenScore < mediumScore) {
      document.getElementById("previous-score").innerText = hiddenScore;
      mediumScore = hiddenScore;
  }

  if (hard === true && hiddenScore < hardScore) {
      document.getElementById("previous-score").innerText = hiddenScore;
      hardScore = hiddenScore;
  }
  console.log("Win!");
};

/**
* Restart Buttons - The "Play Again?" button and difficulty buttons are both used to start the game over.
* The difficulty buttons are kept seperate so as not to trigger the classlist.toggle which would
* otherwise make the Congratulations message appear on the screen.
*/

let button = document.getElementsByClassName("restart");
button[0].addEventListener("click", function () {
  restart();
});

let restart = () => {
  win[0].classList.toggle("congratulationsHidden");
  const elements = document.getElementsByClassName("card");
  while (elements.length > 0) {
      elements[0].parentNode.removeChild(elements[0]);
  }
  shuffledCards();
  imageGenerator();
  flipCounter = [];
  hiddenScore = 0;
  document.getElementById("total-score").innerText = 0;
  document.getElementById("score").innerText = 0;
};

let levelSelect = () => {
  const elements = document.getElementsByClassName("card");
  while (elements.length > 0) {
      elements[0].parentNode.removeChild(elements[0]);
  }
  shuffledCards();
  imageGenerator();
  flipCounter = [];
  document.getElementById("total-score").innerText = 0;
  document.getElementById("score").innerText = 0;
};