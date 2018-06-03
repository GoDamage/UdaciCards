import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text } from "react-native";
import PropTypes from "prop-types";
import styled from "styled-components";
import UCButton from "./form/UCButton";
import { startQuiz } from "../actions/quizActions";
import { lightBlue } from "../utils/colors";

const StyledView = styled.View`
  flex: 1;
  background-color: ${lightBlue};
  padding: 30px;
  align-items: center;
  justify-content: center;
`;
const StyledTitle = styled.Text`
  margin-bottom: 10px;
  font-size: 30px;
  font-weight: bold;
`;
const StyledSubText = styled.Text`
  margin-bottom: 40px;
  font-size: 18px;
`;

class DeckHome extends Component {
  render() {
    const { title, questions, navigation, startQuiz } = this.props;

    handleQuizStart = () => {
      startQuiz({ name: title, questions: questions });
      navigation.navigate("Quiz");
    };

    return (
      <StyledView>
        <StyledTitle>{title}</StyledTitle>
        <StyledSubText>{questions.length} cards</StyledSubText>
        <UCButton
          text="Add Card"
          buttonType="primary"
          onPress={() => navigation.navigate("NewCard", { name: title })}
        />
        {questions.length > 0 && (
          <UCButton
            text="Start Quiz"
            buttonType="secondary"
            onPress={() => handleQuizStart()}
          />
        )}
      </StyledView>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const { name } = ownProps.navigation.state.params;
  const { title, questions } = state.deckList[name];
  return { title, questions };
}

export default connect(mapStateToProps, { startQuiz })(DeckHome);
