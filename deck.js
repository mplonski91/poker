let cardValue = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A"
];
let cardColor = ["tree", "diamond", "heart", "spades"];

const generateDeck = (function() {
  let deck = [];
  cardColor.forEach(color => {
    cardValue.forEach(value => {
      deck.push({ color, value });
    });
  });

  return deck;
})();

module.exports = {
  generateDeck
};
