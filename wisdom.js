let firstCard = 10;
let secondCard = 11;
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";

const messageEl = document.getElementById("message-1");
const sum1 = document.getElementById("sum");
const cardEl = document.getElementById("cards");

const startGame = () => {
  heyGame();
};

const heyGame = () => {
  cardEl.textContent = "Cards: " + cards[0] + " " + cards[1];
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
  const newCard = 6;
  sum += newCard;
  cards.push(newCard);
  heyGame();
};
console.log(cards);
