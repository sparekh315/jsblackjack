//Blackjack App
//by Sania Parekh

let suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades'];

let values = ['Ace', 'King', 'Queen', 'Jack', 'Ten', 'Nine', 'Eight', 'Seven', 'Six', 'Five', 'Four', 'Three', 'Two'];

function createDeck() {
  let deck = [];
  for (let suitIdx = 0; suitIdx < suits.length; suitIdx++) {
    for (let valueIdx = 0; valueIdx < values.length; valueIdx++) {
        let card = {
            suit: suits[suitIdx], 
            value: values[valuesIdx]
        };
      deck.push(card);
    }
  }
  return deck;
}

function getNextCard() {
  return deck.shift();
}

let deck = createDeck();

function getCardString(card) {
    return card.value + 'of' + card.suit;
}

let playerCards = [getNextCard(), getNextCard()];

console.log("Welcome to Blackjack!");
console.log("You are Dealt: ")
console.log(" "+getCardString(playerCards[0]));
console.log(" "+getCardString(playerCards[1]));