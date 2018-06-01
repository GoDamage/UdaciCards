import { combineReducers } from "redux";
import { ADD_DECK, ADD_CARD } from "../actions";

// ToDo: move out.
const initialDecks = {
  React: {
    title: "React",
    questions: [
      {
        question: "What is React?",
        answer: "A library for managing user interfaces"
      },
      {
        question: "Where do you make Ajax requests in React?",
        answer: "The componentDidMount lifecycle event"
      }
    ]
  },
  JavaScript: {
    title: "JavaScript",
    questions: [
      {
        question: "What is a closure?",
        answer:
          "The combination of a function and the lexical environment within which that function was declared."
      }
    ]
  }
};

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

const quiz = (state = [], action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  deckList,
  quiz
});

export default rootReducer;
