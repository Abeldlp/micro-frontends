import React from "react";
import ReactDOM from "react-dom";
import { Header } from "ui_components/Header";
import { Footer } from "ui_components/Footer";

import "./index.scss";

export const App = () => (
  <div className="text-3xl mx-auto max-w-6xl">
    <Header />
    <div>
      <h1>Home</h1>
    </div>
    <Footer />
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
