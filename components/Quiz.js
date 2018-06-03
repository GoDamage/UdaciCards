import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styled from "styled-components";
import { View, Text } from "react-native";
import UCButton from "./form/UCButton";
import { nextQuestion, correctAnswer } from "../actions/quizActions";
import QuizFinished from "./QuizFinished";
import { lightYellow } from "../utils/colors";

const StyledView = styled.View`
  flex: 1;
  width: 100%;
  background-color: ${lightYellow};
  padding: 30px;
  align-items: center;
  justify-content: center;
`;
const StyledProgressText = styled.Text`
  margin-bottom: 40px;
`;
const StyledCardText = styled.Text`
  background-color: white;
  width: 100%
  padding: 40px 20px;
  margin-bottom: 10px;
  border-radius: 8px;
  text-align: center;
`;
const StyledButtons = styled.View`
  margin-top: 40px;
`;

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
    const { name, questions, currentIndex, correct, navigation } = this.props;
    const { showAnswer } = this.state;

    if (currentIndex === questions.length) {
      return <QuizFinished navigation={navigation} />;
    } else {
      return (
        <StyledView>
          <StyledProgressText>
            Question {currentIndex + 1} of {questions.length}
          </StyledProgressText>
          {showAnswer === false ? (
            <StyledCardText>{questions[currentIndex].question}</StyledCardText>
          ) : (
            <StyledCardText>{questions[currentIndex].answer}</StyledCardText>
          )}
          <UCButton
            text={showAnswer === true ? "Show Question" : "Show Answer"}
            buttonType="primary"
            onPress={() => this.toggleAnswer()}
          />
          <StyledButtons>
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
          </StyledButtons>
        </StyledView>
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
