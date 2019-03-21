import React from "react";
import ReactDOM from "react-dom";

import IncrementButton from "./components/IncrementButton";
import DecrementButtton from "./components/DecrementButton";
import ResetButton from "./components/ResetButton";
import Data from "./components/Data";
import { Provider } from "react-redux";
import store from "./redux/store/store";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Data />
        <IncrementButton />
        <DecrementButtton />
        <ResetButton />
      </Provider>
    );
  }
}
