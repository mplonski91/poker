const cards = require("./cards");
const { Inspect } = require("./inspection");

const userCards = cards.randomFiveCard();
// const userCards = [
//   { value: "7", color: "♦" },
//   { value: "8", color: "♦" },
//   { value: "9", color: "♦" },
//   { value: "10", color: "♦" },
//   { value: "J", color: "♦" }
// ];
console.log(userCards);

const inspectCards = new Inspect(userCards);
const valueCards = inspectCards.checkingValues();
const checkingPairs = inspectCards.checkingPairs(valueCards);
console.log(checkingPairs);
