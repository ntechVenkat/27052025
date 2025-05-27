import React from "react";
import ComponentStore from "./ComponentStore";
import { Provider } from "react-redux";
import store from "./reduxStore";

const ComponentLikeApp = () => {
  return (
    <div>
      <center>
        <h1 className="text-primary">Welcome to React-Redux App</h1>
      </center>
      <Provider store={store}>
        <ComponentStore />
      </Provider>
    </div>
  );
};
export default ComponentLikeApp;
