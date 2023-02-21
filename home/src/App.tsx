import React from "react";
import ReactDOM from "react-dom";
import { Button } from "ui_components/Button";

import "./index.scss";

export const App = () => (
  <div className="m-5 text-3xl mx-auto max-w-6xl flex align-center">
    <h1>Home</h1>
    <Button
      text="Button for home"
      handleClick={() => console.log("hello from HOME")}
    />
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
