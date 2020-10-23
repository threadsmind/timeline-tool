import React, { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Header from "./Header/Header";
import Nav from "./Nav/Nav";

import "./App.css";

const App = () => {
  const [tab, setTab] = useState("Settings");

  const handleSelected = (event) => setTab(event.target.value);

  return (
    <HelmetProvider>
      <div className="App">
        <Helmet>
          <title>Timeline | {tab}</title>
        </Helmet>
        <Header selected={tab} />
        <Nav selected={tab} callback={handleSelected} />
      </div>
    </HelmetProvider>
  );
};

export default App;
