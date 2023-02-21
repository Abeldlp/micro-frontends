import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";

import { App as HomeApp } from "home/App";
import { App as PdpApp } from "pdp/App";

const App = () => (
  <div className="text-3xl mx-auto max-w-6xl">
    <HomeApp />
    <PdpApp />
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
