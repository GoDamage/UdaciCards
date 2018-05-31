export const ADD_DECK = "ADD_DECK";
export const ADD_CARD = "ADD_CARD";

export const addDeck = data => ({
  type: ADD_DECK,
  data
});

export const addCard = data => ({
  type: ADD_CARD,
  data
});
