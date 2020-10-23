import React from "react";

import "./Button.css";

const Button = (props) => {
  const style = props.className ? `Button ${props.className}` : "Button";

  return (
    <button onClick={props.callback} className={style} value={props.value}>
      {props.children}
    </button>
  );
};

export default Button;
