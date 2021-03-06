enum Color {
  heart = "♥",
  spade = "♠",
  club = "♣",
  diamond = "♦",
}

enum Mark {
  A = "A",
  two = "2",
  three = "3",
  four = "4",
  five = "5",
  six = "6",
  seven = "7",
  eight = "8",
  nine = "9",
  ten = "10",
  jack = "J",
  queen = "Q",
  king = "K",
}

type NormalCard = {
  // 一张牌
  color: Color;
  mark: Mark;
};

type Deck = NormalCard[]; // 一副牌

function createDeck(): Deck {
  const deck: Deck = [];
  const marks = Object.keys(Mark);
  const colors = Object.keys(Color);
  for (const m of marks) {
    for (const c of colors) {
      deck.push({
        mark: Mark[m],
        color: Color[c],
      });
    }
  }
  return deck;
}

function printDeck(deck: Deck) {
  let result = "";
  deck.sort(() => Math.random() - 0.5); // 乱序
  deck.forEach((pocker, i) => {
    result += pocker.color + pocker.mark + " ";
    if ((i + 1) % 17 === 0) {
      result += "\n";
    }
  });
  console.log(result);
}

const deck = createDeck();
printDeck(deck);