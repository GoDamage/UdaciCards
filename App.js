import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CardsStatusBar from "./components/CardsStatusBar";
import NavigationTabs from "./components/NavigationTabs";
import { darkGreen } from "./utils/colors";

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <CardsStatusBar backgroundColor={darkGreen} barStyle="light-content" />
        <NavigationTabs />
      </View>
    );
  }
}
