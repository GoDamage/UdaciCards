import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text } from "react-native";
import PropTypes from "prop-types";

class DeckHome extends Component {
  render() {
    return (
      <View>
        <Text>Deck Home</Text>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return { ...state };
}

export default connect(mapStateToProps)(DeckHome);
