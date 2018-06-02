import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text } from "react-native";
import PropTypes from "prop-types";
import styled from "styled-components";
import UCButton from "./form/UCButton";
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
    const { title, questions, navigation } = this.props;

    return (
      <StyledView>
        <StyledTitle>{title}</StyledTitle>
        <StyledSubText>{questions.length} cards</StyledSubText>
        <UCButton
          text="Add Card"
          buttonType="primary"
          onPress={() => navigation.navigate("NewCard", { name: title })}
        />
        <UCButton
          text="Start Quiz"
          buttonType="secondary"
          onPress={() => navigation.navigate("Quiz")}
        />
      </StyledView>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const { name } = ownProps.navigation.state.params;
  const { title, questions } = state.deckList[name];
  return { title, questions };
}

export default connect(mapStateToProps)(DeckHome);
