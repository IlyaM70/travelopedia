import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./layout/Header";
import DestinationIndex from "./Components/DestinationIndex";
import DestinationList from "./Components/DestinationList";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import RandomDestination from "./Components/RandomDestination";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Header />
      <DestinationIndex />
      <DestinationList />
      <RandomDestination />
    </Provider>
  </React.StrictMode>
);
