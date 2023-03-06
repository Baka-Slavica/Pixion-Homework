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

  return Object.keys(countOfEachCard).length !== numberOfUniqueCards
    ? 0
    : Math.min(...Object.values(countOfEachCard));
}

//vrsta špila
const deckSize = 52;
const numberOfRandomCards = 500;
//random input karata
const inputCards = Array.from({ length: numberOfRandomCards }, () =>
  Math.floor(Math.random() * deckSize + 1)
);

const result = countOfCompleteDecks(inputCards, deckSize);

console.log(
  result === 0
    ? "We can't make any decks"
    : "We can make " + result + " complete decks"
);
