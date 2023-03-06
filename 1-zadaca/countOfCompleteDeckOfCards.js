//Miran Dorčec
//verzija 2 - dodan random generator za random input karata
//1. Zadaća
//pretpostavka - karte su nazvane po brojevima (2♥ = 1, 3♥ = 2,...)
//pretpostavka - primamo samo karte iz 'deckSize' špila ([1, deckSize]).

function countOfCompleteDecks(cardsArr, numberOfUniqueCards) {
  let countOfEachCard = {};

  for (let i = 0; i < cardsArr.length; i++) {
    !countOfEachCard[cardsArr[i]]
      ? (countOfEachCard[cardsArr[i]] = 1)
      : countOfEachCard[cardsArr[i]]++;
  }

  console.log(countOfEachCard);

  return Object.keys(countOfEachCard).length !== numberOfUniqueCards
    ? 0
    : Math.min(...Object.values(countOfEachCard));
}

//vrsta špila
const deckSize = 52;
//random input karata
const inputCards = Array.from({ length: 500 }, () =>
  Math.floor(Math.random() * deckSize + 1)
);

console.log(inputCards);

console.log(
  countOfCompleteDecks(inputCards, deckSize) === 0
    ? "We can't make any decks"
    : "We can make " +
        countOfCompleteDecks(inputCards, deckSize) +
        " complete decks"
);
