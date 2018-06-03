import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text } from "react-native";
import PropTypes from "prop-types";
import styled from "styled-components";
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
    const { correct, questions, navigation } = this.props;
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
          text="Finished"
          buttonType="primary"
          onPress={() => navigation.navigate("Home")}
        />
      </StyledView>
    );
  }
}

QuizFinished.propTypes = {
  correct: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  const { correct, questions } = state.quiz;
  return { correct, questions };
}

export default connect(mapStateToProps)(QuizFinished);
