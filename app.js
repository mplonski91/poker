const cards = require("./cards");
const { Inspect } = require("./inspection");

const userCards = cards.randomFiveCard();
// const userCards = [
//   { value: "6", color: "♥" },
//   { value: "7", color: "♥" },
//   { value: "8", color: "♥" },
//   { value: "9", color: "♥" },
//   { value: "10", color: "♥" }
// ];
console.log(userCards);

const inspectCards = new Inspect(userCards);
console.log(inspectCards.inspectionCards());
