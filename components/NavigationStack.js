import { createStackNavigator } from "react-navigation";
import NavigationTabs from "./NavigationTabs";
import DeckHome from "./DeckHome";

const NavigationStack = createStackNavigator(
  {
    Home: {
      screen: NavigationTabs,
      navigationOptions: { header: null }
    },
    DeckHome: { screen: DeckHome }
  },
  { headerMode: "screen" }
);

export default NavigationStack;
