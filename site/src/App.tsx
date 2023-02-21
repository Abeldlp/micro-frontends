import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";

import { App as HomeApp } from "home/App";
import { App as PdpApp } from "pdp/App";
import { Header } from "ui_components/Header";
import { Footer } from "ui_components/Footer";

const App = () => (
  <div className="min-h-screen bg-blue-100 mx-auto flex flex-col justify-between">
    <div>
      <Header />
    </div>
    <div>
      <HomeApp />
      <PdpApp />
    </div>
    <div>
      <Footer />
    </div>
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
