import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";

import { App as HomeApp } from "home/App";
import { App as PdpApp } from "pdp/App";
import { Header } from "ui_components/Header";
import { Footer } from "ui_components/Footer";

const App = () => (
  <div className="text-3xl mx-auto max-w-6xl">
    <Header />
    <HomeApp />
    <PdpApp />
    <Footer />
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
