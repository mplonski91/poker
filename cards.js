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
  "J",
  "Q",
  "K",
  "A"
];
const cardColor = ["tree", "diamond", "heart", "spades"];

// Function to generate deck
const generateDeck = () => {
  const deck = [];

  cardColor.forEach(color => {
    cardValue.forEach(value => {
      deck.push({ value, color });
    });
  });

  return deck;
};

// Function to get five cards
function randomFiveCard() {
  const fiveCards = [];
  let generatedDeck = generateDeck();

  for (let index = 0; index < 5; index++) {
    //get random index card on array deck
    const indexCard = Math.floor(Math.random() * generatedDeck.length);
    const card = generatedDeck[indexCard];
    fiveCards.push(card);
    generatedDeck.splice(indexCard, 1);
  }
  // console.log(generatedDeck);

  return fiveCards;
}

// Export module
module.exports = {
  randomFiveCard
};
