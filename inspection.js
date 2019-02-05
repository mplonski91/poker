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
    const valuesCards = Object.values(verificationOfQuantities).sort();

    return valuesCards;
  }

  checkingPoker() {
    const cards = this.array;
    const royalFlush = ["10", "J", "Q", "K", "A"].toString();
    const result = [];

    cards.forEach(element => {
      result.push(element.value);
    });

    const finalResult = result.toString();
    if (royalFlush == finalResult) {
      return "Royal Flush";
    }
  }

  modifyValue() {
    const cards = this.array;
    cards.forEach(element => {
      switch (element.value) {
        case "J":
          element.value = "11";
          break;
        case "Q":
          element.value = "12";
          break;
        case "K":
          element.value = "13";
          break;
        case "A":
          element.value = "14";
          break;
      }
    });

    return cards;
  }

  checkingStraight() {
    const cards = this.modifyValue();
    const straight =
      cards[1].value - cards[0].value == 1 &&
      cards[3].value - cards[2].value == 1 &&
      cards[2].value - cards[1].value == 1 &&
      cards[4].value - cards[3].value == 1
        ? true
        : false;
    return straight;
  }

  checkingColor() {
    return this.array.every(item => item.color === this.array[0].color);
  }

  highCard() {
    const cards = this.array;
    const highSingleCard = cards.slice(-1);
    const [{ value, color }] = highSingleCard;
    const result = `Highest card is: ${value} ${color}`;

    return result;
  }

  inspectionCards() {
    const values = this.checkingValues();
    const highCard = this.highCard();
    const flush = this.checkingColor();
    const poker = this.checkingPoker();
    const straight = this.checkingStraight();

    if (poker && flush) {
      return poker;
    } else if (straight == true && flush == true) {
      return "Straight flush";
    } else if (values.indexOf(4) > -1) {
      return "Four of a kind (Quads)";
    } else if (values.indexOf(2) > -1 && values.indexOf(3) > -1) {
      return "Full house";
    } else if (flush === true) {
      return "Flush";
    } else if (straight == true) {
      return "Straight";
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
}

module.exports = {
  Inspect
};
