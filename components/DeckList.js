import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text, TouchableOpacity } from "react-native";

class DeckList extends Component {
  render() {
    const { decks } = this.props;
    return (
      <View>
        {decks.map(deck => (
          <TouchableOpacity key={deck.title}>
            <Text>{deck.title}</Text>
            <Text>{deck.questions.length} cards</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}

function mapStateToProps(state) {
  const { deckList } = state;
  const decks = Object.values(deckList);

  return { decks };
}

export default connect(mapStateToProps)(DeckList);
