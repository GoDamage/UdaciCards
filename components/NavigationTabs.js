// import React, { Component } from "react";
import { Platform } from "react-native";
import {
  createBottomTabNavigator,
  createMaterialTopTabNavigator
} from "react-navigation";
import DeckList from "./DeckList";
import NewDeck from "./NewDeck";

const routes = { Decks: DeckList, "New Deck": NewDeck };

const NavigationTabs =
  Platform.OS === "ios"
    ? createBottomTabNavigator(routes)
    : createMaterialTopTabNavigator(routes);

export default NavigationTabs;
