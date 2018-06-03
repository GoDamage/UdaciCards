import { ADD_DECK, ADD_CARD } from "./types";

export const addDeck = data => ({
  type: ADD_DECK,
  data
});

export const addCard = data => ({
  type: ADD_CARD,
  data
});
