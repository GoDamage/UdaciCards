import React, { Component } from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { StyleSheet, Text, View } from "react-native";
import rootReducer from "./reducers";
import CardsStatusBar from "./components/CardsStatusBar";
import NavigationTabs from "./components/NavigationTabs";
import { darkGreen } from "./utils/colors";

const store = createStore(rootReducer);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <CardsStatusBar
            backgroundColor={darkGreen}
            barStyle="light-content"
          />
          <NavigationTabs />
        </View>
      </Provider>
    );
  }
}
