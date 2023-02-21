import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Button } from "ui_components/Button";

import "./index.scss";

export const App: React.FC = () => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="m-5 text-3xl mx-auto max-w-6xl flex align-center">
      <h1>Home</h1>
      <Button text="Button for home" handleClick={toggleOpen} />
      {open && <div className="text-md">Open another component</div>}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
