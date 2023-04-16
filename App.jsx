// navigation
import MainNavigator from "./navigation";
import { Provider } from "react-redux";
import React from "react";
import { init } from "./db";
import store from "./store";

init().then(() => {
  console.log("Initialized database");
}).catch(err => {
  console.log("Initializing db failed.");
  console.log(err);
});

export default function App() {
  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
}
