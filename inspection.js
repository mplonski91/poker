class Inspect {
  constructor(array) {
    this.array = array;
  }

  highCard() {
    const cards = this.array;
    const highSingleCard = cards.slice(-1);
    const [{ value, color }] = highSingleCard;
    const result = `Highest card is: ${value} ${color}`;

    return result;
  }
}

module.exports = {
  Inspect
};
