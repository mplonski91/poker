class Inspect {
  constructor(array) {
    this.array = array;
  }

  checkingValues() {
    const cards = this.array;
    const verificationOfQuantities = cards.reduce((result, item) => {
      return {
        ...result,
        [item.value]: (result[item.value] || 0) + 1
      };
    }, {});
    // console.log(verificationOfQuantities);
    const valuesCards = Object.values(verificationOfQuantities).sort();

    return valuesCards;
  }

  checkingPoker() {
    const cards = this.array;
    const colorCards = this.checkingColor();
    const royalFlush = ["10", "J", "Q", "K", "A"].toString();
    const straightFlush = ["7", "8", "9", "10", "J"].toString();
    const result = [];
    cards.forEach(element => {
      result.push(element.value);
    });
    const finalResult = result.toString();
    if (royalFlush == finalResult) {
      return "Royal Flush";
    } else if (straightFlush == finalResult) {
      return "Straight Flush";
    }
  }

  checkingColor() {
    const cards = this.array;
    const colors = cards.reduce((result, item) => {
      return {
        ...result,
        [item.color]: (result[item.color] || 0) + 1
      };
    }, {});

    const colorsCards = Object.values(colors);
    if (colorsCards == 5) {
      return true;
    } else {
      return false;
    }
  }

  checkingPairs(values) {
    const highCard = this.highCard();
    const flush = this.checkingColor();
    const poker = this.checkingPoker();

    if (poker && flush) {
      return poker;
    } else if (values.indexOf(4) > -1) {
      return "Four of a kind (Quads)";
    } else if (values.indexOf(2) > -1 && values.indexOf(3) > -1) {
      return "Full house";
    } else if (flush === true) {
      return "Flush";
    } else if (values.indexOf(3) > -1) {
      return "Three of a kind";
    } else if (values.indexOf(2) > -1) {
      const pair = [];
      values.forEach(element => {
        if (element === 2) {
          pair.push(element);
        }
      });
      const checkPair = pair.length;
      const relsultPair = checkPair > 1 ? "Two pair" : "Pair";

      return relsultPair;
    } else {
      return highCard;
    }
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
