const cardValue = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14"
];
const cardColor = ["♥", "♦", "♠", "♣"];

// Function to generate deck
function generateDeck() {
  const deck = [];

  cardColor.forEach(color => {
    cardValue.forEach(value => {
      deck.push({ value, color });
    });
  });

  return deck;
}

// Function to change the value of the card
function chnagesValues(cards) {
  cards.forEach(element => {
    switch (element.value) {
      case "11":
        element.value = "J";
        break;
      case "12":
        element.value = "Q";
        break;
      case "13":
        element.value = "K";
        break;
      case "14":
        element.value = "A";
        break;
    }
  });

  return cards;
}

// Card sorting function
function sortNumber(a, b) {
  return a.value - b.value;
}

// Function to get five cards
function randomFiveCard() {
  let generatedDeck = generateDeck();
  const fiveCards = [];

  for (let index = 0; index < 5; index++) {
    //get random index card on array deck
    const indexCard = Math.floor(Math.random() * generatedDeck.length);
    const card = generatedDeck[indexCard];
    fiveCards.push(card);
    generatedDeck.splice(indexCard, 1);
  }
  const sortedCards = fiveCards.sort(sortNumber);
  const result = chnagesValues(sortedCards);
  return result;
}

// Export module
module.exports = {
  randomFiveCard,
  cardValue
};
