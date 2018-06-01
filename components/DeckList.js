import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import styled from "styled-components";
import { lightBlue, lightYellow } from "../utils/colors";

const StyledView = styled.View`
  flex: 1;
  background-color: ${lightBlue};
`;
const StyledDeck = styled.TouchableOpacity`
  margin: 15px 15px 0;
  padding: 15px;
  align-items: center;
  background-color: ${lightYellow};
  border-radius: 5px;
`;
const StyledDeckTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

class DeckList extends Component {
  static propTypes = {
    decks: PropTypes.array.isRequired
  };

  render() {
    const { decks, navigation } = this.props;
    return (
      <StyledView>
        {decks.map(deck => (
          <StyledDeck
            key={deck.title}
            onPress={() =>
              navigation.navigate("DeckHome", { name: deck.title })
            }
          >
            <StyledDeckTitle>{deck.title}</StyledDeckTitle>
            <Text>{deck.questions.length} cards</Text>
          </StyledDeck>
        ))}
      </StyledView>
    );
  }
}

function mapStateToProps(state) {
  const { deckList } = state;
  const decks = Object.values(deckList);

  return { decks };
}

export default connect(mapStateToProps)(DeckList);
