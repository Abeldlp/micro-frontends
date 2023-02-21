import React from "react";

interface Props {
  text?: string;
  handleClick?: () => void;
}

export const Button: React.FC<Props> = (props) => {
  const { text = "Button" } = props;
  return (
    <button
      onClick={props.handleClick}
      className="p-3 bg-blue-500 text-sm text-white rounded"
    >
      {text}
    </button>
  );
};
