import React from "react";
import lang from "../lang";
import Button from "../Button/Button";

import "./Nav.css";

const Nav = (props) => {
  const getClasses = (id) => (id !== props.selected ? "tab" : "tab selected");

  return (
    <div className="Nav">
      {lang.nav.map((tab) => (
        <Button
          className={getClasses(tab.id)}
          key={tab.id}
          callback={props.callback}
          value={tab.id}
        >
          {tab.name}
        </Button>
      ))}
    </div>
  );
};

export default Nav;
