import { START_QUIZ, NEXT_QUESTION, CORRECT_ANSWER } from "./types";

export const startQuiz = data => ({
  type: START_QUIZ,
  data
});

export const nextQuestion = nextIndex => ({
  type: NEXT_QUESTION,
  nextIndex
});

export const correctAnswer = tally => ({
  type: CORRECT_ANSWER,
  tally
});
