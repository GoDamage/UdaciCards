import { createStackNavigator } from "react-navigation";
import NavigationTabs from "./NavigationTabs";
import DeckHome from "./DeckHome";
import NewCard from "./NewCard";
import Quiz from "./Quiz";

const NavigationStack = createStackNavigator(
  {
    Home: {
      screen: NavigationTabs,
      navigationOptions: { header: null }
    },
    DeckHome: { screen: DeckHome },
    NewCard: {
      screen: NewCard,
      navigationOptions: { headerTitle: "Add Card" }
    },
    Quiz: {
      screen: Quiz,
      navigationOptions: { headerTitle: "Quiz" }
    }
  },
  { headerMode: "screen" }
);

export default NavigationStack;
