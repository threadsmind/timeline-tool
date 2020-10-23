import React from "react";
import lang from "../lang";

import "./Header.css";

const Header = (props) => {
  const tab = () =>
    lang.nav.filter((item) => item.id === props.selected)[0].name;

  return (
    <header className="Header">
      <h1>{`${lang.appName} | ${tab()}`}</h1>
    </header>
  );
};

export default Header;
