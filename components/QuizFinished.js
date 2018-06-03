import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text } from "react-native";
import PropTypes from "prop-types";
import styled from "styled-components";
import { startQuiz } from "../actions/quizActions";
import UCButton from "./form/UCButton";
import { lightYellow } from "../utils/colors";
import { clearLocalNotification, setLocalNotification } from "../utils/helpers";

const StyledView = styled.View`
  flex: 1;
  background-color: ${lightYellow};
  align-items: center;
  justify-content: center;
`;
const StyledCongratsText = styled.Text`
  font-size: 30px;
  margin-bottom: 30px;
`;
const StyledScoreText = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;
const StyledText = styled.Text`
  margin-bottom: 30px;
`;

class QuizFinished extends Component {
  componentDidMount() {
    clearLocalNotification().then(setLocalNotification);
  }

  render() {
    const { name, correct, questions, navigation, startQuiz } = this.props;

    handleQuizRestart = () => {
      startQuiz({ name: name, questions: questions });
      navigation.navigate("Quiz");
    };

    return (
      <StyledView>
        <StyledCongratsText>Quiz Finished!</StyledCongratsText>
        <StyledScoreText>
          Your score: {Math.round(correct / questions.length * 100)}%
        </StyledScoreText>
        <StyledText>
          You got {correct} out of {questions.length} questions correct.
        </StyledText>
        <UCButton
          text="Restart Quiz"
          buttonType="primary"
          onPress={() => handleQuizRestart()}
        />
        <UCButton
          text="Back to Deck"
          buttonType="secondary"
          onPress={() =>
            navigation.navigate("DeckHome", {
              name: name
            })
          }
        />
      </StyledView>
    );
  }
}

QuizFinished.propTypes = {
  name: PropTypes.string.isRequired,
  correct: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  const { name, correct, questions } = state.quiz;
  return { name, correct, questions };
}

export default connect(mapStateToProps, { startQuiz })(QuizFinished);
