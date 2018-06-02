import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { View, Text } from "react-native";
import styled from "styled-components";
import UCTextInput from "./form/UCTextInput";
import UCButton from "./form/UCButton";
import { addDeck } from "../actions";
import { lightBlue, lightYellow } from "../utils/colors";

const StyledView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${lightBlue};
`;

class NewDeck extends Component {
  static propTypes = {
    addDeck: PropTypes.func.isRequired
  };

  state = {
    title: ""
  };

  handleNewDeckSubmit = data => {
    const { addDeck, navigation } = this.props;
    addDeck(data);
    navigation.navigate("DeckHome", {
      name: data.title,
      questions: []
    });
  };

  render() {
    return (
      <StyledView>
        <UCTextInput
          label="What is the title of your new deck?"
          placeholder="Deck Title"
          onChangeText={title => this.setState({ title })}
        />
        <UCButton
          text="Submit"
          buttonType="primary"
          onPress={() => this.handleNewDeckSubmit(this.state)}
        />
      </StyledView>
    );
  }
}

export default connect(null, { addDeck })(NewDeck);
