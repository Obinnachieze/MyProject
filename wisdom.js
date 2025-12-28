let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";

const messageEl = document.getElementById("message-1");
const sum1 = document.getElementById("sum");
const cardEl = document.getElementById("cards");
const player = {
  name: "Player",
  chips: 145,
};
const playerEl = document.getElementById("per");
playerEl.textContent = player.name + ": $" + player.chips;

function Random() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber === 1) {
    return 11;
  } else if (randomNumber > 10) {
    return 10;
  } else {
    return randomNumber;
  }
}

function getRandomCard() {
  return Random();
}

const startGame = () => {
  isAlive = true;
  const firstCard = getRandomCard();
  const secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  heyGame();
};

const heyGame = () => {
  cardEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardEl.textContent += cards[i] + " ";
  }
  sum1.textContent = "Sum: " + sum;
  if (sum < 21) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = " You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }

  messageEl.textContent = message;
};

const drawNewCard = () => {
  if (isAlive === true && hasBlackJack === false) {
    const newCard = getRandomCard();
    sum += newCard;
    cards.push(newCard);
    heyGame();
  }
};
console.log(cards);
