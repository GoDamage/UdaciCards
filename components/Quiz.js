import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { View, Text } from "react-native";
import UCButton from "./form/UCButton";
import { nextQuestion, correctAnswer } from "../actions/quizActions";
import QuizFinished from "./QuizFinished";

class Quiz extends Component {
  state = {
    showAnswer: false
  };

  toggleAnswer = () => {
    this.setState({ showAnswer: !this.state.showAnswer });
  };

  onAnswer = isCorrect => {
    const { currentIndex, correct, correctAnswer, nextQuestion } = this.props;
    if (isCorrect) {
      correctAnswer(correct + 1);
    }
    nextQuestion(currentIndex + 1);
  };

  render() {
    const { name, questions, currentIndex, correct } = this.props;
    const { showAnswer } = this.state;

    if (currentIndex === questions.length) {
      return <QuizFinished />;
    } else {
      return (
        <View>
          <Text>
            Question {currentIndex + 1} of {questions.length}
          </Text>
          {showAnswer === false ? (
            <Text>Question: {questions[currentIndex].question}</Text>
          ) : (
            <Text>Answer: {questions[currentIndex].answer}</Text>
          )}
          <UCButton
            text={showAnswer === true ? "Show Question" : "Show Answer"}
            buttonType="primary"
            onPress={() => this.toggleAnswer()}
          />
          <UCButton
            text="Correct"
            buttonType="correct"
            onPress={() => this.onAnswer(true)}
          />
          <UCButton
            text="Incorrect"
            buttonType="incorrect"
            onPress={() => this.onAnswer(false)}
          />
        </View>
      );
    }
  }
}

Quiz.propTypes = {
  name: PropTypes.string.isRequired,
  questions: PropTypes.array.isRequired,
  currentIndex: PropTypes.number.isRequired,
  correct: PropTypes.number.isRequired,
  nextQuestion: PropTypes.func.isRequired,
  correctAnswer: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  const { name, questions, currentIndex, correct } = state.quiz;
  return { name, questions, currentIndex, correct };
}

export default connect(mapStateToProps, { nextQuestion, correctAnswer })(Quiz);
