const cards = require("./cards");
const { Inspect } = require("./inspection");

const userCards = cards.randomFiveCard();
console.log(userCards);

const inspectCards = new Inspect(userCards);
console.log(inspectCards.highCard());
