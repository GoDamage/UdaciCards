import { Platform } from "react-native";
import {
  createBottomTabNavigator,
  createMaterialTopTabNavigator
} from "react-navigation";
import { Constants } from "expo";
import DeckList from "./DeckList";
import NewDeck from "./NewDeck";
import { orange, lightGreen } from "../utils/colors";

const routes = { Decks: DeckList, "New Deck": NewDeck };
const materialTabBarOptions = {
  style: { backgroundColor: orange, paddingTop: Constants.statusBarHeight },
  indicatorStyle: { backgroundColor: lightGreen }
};

const NavigationTabs =
  Platform.OS === "ios"
    ? createBottomTabNavigator(routes)
    : createMaterialTopTabNavigator(routes, {
        tabBarOptions: materialTabBarOptions
      });

export default NavigationTabs;
