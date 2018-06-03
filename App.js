import React, { Component } from "react";
import { KeyboardAvoidingView } from "react-native";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import NavigationStack from "./components/NavigationStack";
import { darkGreen } from "./utils/colors";
import { setLocalNotification } from "./utils/helpers";

const store = createStore(rootReducer);

export default class App extends Component {
  componentDidMount() {
    setLocalNotification();
  }

  render() {
    return (
      <Provider store={store}>
        <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
          <NavigationStack />
        </KeyboardAvoidingView>
      </Provider>
    );
  }
}
