import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { View, Text } from "react-native";
import styled from "styled-components";
import UCTextInput from "./form/UCTextInput";
import UCButton from "./form/UCButton";
import { addCard } from "../actions/deckActions";
import { lightBlue, lightYellow } from "../utils/colors";

const StyledView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${lightBlue};
`;

class NewCard extends Component {
  static propTypes = {
    addCard: PropTypes.func.isRequired
  };

  state = {
    question: "",
    answer: ""
  };

  handleNewCardSubmit = data => {
    const { addCard, navigation } = this.props;
    const { name } = this.props.navigation.state.params;

    addCard({ title: name, ...data });
    navigation.navigate("DeckHome", {
      name: name
    });
  };

  render() {
    const { name } = this.props.navigation.state.params;

    return (
      <StyledView>
        <UCTextInput
          label="Question"
          onChangeText={question => this.setState({ question })}
        />
        <UCTextInput
          label="Answer"
          onChangeText={answer => this.setState({ answer })}
        />
        <UCButton
          text="Submit"
          buttonType="primary"
          onPress={() => this.handleNewCardSubmit(this.state)}
        />
      </StyledView>
    );
  }
}

export default connect(null, { addCard })(NewCard);
