const cards = require("./cards");
const { Inspect } = require("./inspection");

// const userCards = cards.randomFiveCard();
const userCards = [
  { value: "10", color: "♥" },
  { value: "J", color: "♥" },
  { value: "Q", color: "♥" },
  { value: "K", color: "♥" },
  { value: "A", color: "♥" }
];
console.log(userCards);

const inspectCards = new Inspect(userCards);
const valueCards = inspectCards.checkingValues();
const inspectionCards = inspectCards.inspectionCards(valueCards);
console.log(inspectionCards);
