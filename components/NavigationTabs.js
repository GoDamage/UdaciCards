// import React, { Component } from "react";
import { Platform } from "react-native";
import {
  createBottomTabNavigator,
  createMaterialTopTabNavigator
} from "react-navigation";
import DeckList from "./DeckList";
import NewDeck from "./NewDeck";
import { orange, lightGreen } from "../utils/colors";

const routes = { Decks: DeckList, "New Deck": NewDeck };
const materialTabBarOptions = {
  style: { backgroundColor: orange },
  indicatorStyle: { backgroundColor: lightGreen }
};

const NavigationTabs =
  Platform.OS === "ios"
    ? createBottomTabNavigator(routes)
    : createMaterialTopTabNavigator(routes, {
        tabBarOptions: materialTabBarOptions
      });

export default NavigationTabs;
