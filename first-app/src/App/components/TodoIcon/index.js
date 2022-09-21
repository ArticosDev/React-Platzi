import React from "react";
import "./TodoIcon.css";
import { ReactComponent as Trash } from './trash.svg';
import { ReactComponent as Check } from "./check.svg";

const iconTypes = {
  check: (color) => <Check className="Icon-svg Icon-svg--check" fill={color} />,
  delete: (color) => (
    <Trash className="Icon-svg Icon-svg--delete" fill={color} />
  ),
};

function TodoIcon({ type, color = "gray", onClick }) {
  return (
    <span
      className={`Icon-container Icon-container--${type}`}
      onClick={onClick}
    >
      {iconTypes[type](color)}
    </span>
  );
}

export { TodoIcon };
