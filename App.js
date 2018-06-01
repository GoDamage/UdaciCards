import React, { Component } from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { StyleSheet, Text, View } from "react-native";
import rootReducer from "./reducers";
import NavigationStack from "./components/NavigationStack";
import { darkGreen } from "./utils/colors";

const store = createStore(rootReducer);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationStack />
      </Provider>
    );
  }
}
