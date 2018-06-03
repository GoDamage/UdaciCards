import { combineReducers } from "redux";
import {
  ADD_DECK,
  ADD_CARD,
  START_QUIZ,
  NEXT_QUESTION,
  CORRECT_ANSWER
} from "../actions/types";
import { initialDecks } from "../utils/data";

const deckList = (state = initialDecks, action) => {
  switch (action.type) {
    case ADD_DECK:
      return {
        ...state,
        [action.data.title]: { ...action.data, questions: [] }
      };
    case ADD_CARD:
      return {
        ...state,
        [action.data.title]: {
          title: state[action.data.title].title,
          questions: [
            ...state[action.data.title].questions,
            { question: action.data.question, answer: action.data.answer }
          ]
        }
      };
    default:
      return state;
  }
};

const quiz = (state = {}, action) => {
  switch (action.type) {
    case START_QUIZ:
      return {
        name: action.data.name,
        questions: action.data.questions,
        currentIndex: 0,
        correct: 0
      };
    case NEXT_QUESTION:
      return Object.assign({}, state, { currentIndex: action.nextIndex });
    case CORRECT_ANSWER:
      return Object.assign({}, state, { correct: action.tally });
      return { ...state, [correct]: action.tally };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  deckList,
  quiz
});

export default rootReducer;
