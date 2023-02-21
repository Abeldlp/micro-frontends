import React from "react";
import ReactDOM from "react-dom";

import { Footer } from "ui_components/Footer";
import { Header } from "ui_components/Header";

import "./index.scss";

export const App = () => (
  <div className="text-3xl mx-auto max-w-6xl">
    <Header />
    <div>Name: pdp</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Tailwind</div>
    <Footer />
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
