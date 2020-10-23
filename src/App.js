import React, { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Header from "./Header/Header";
import Nav from "./Nav/Nav";
import Editor from "./Editor/Editor";
import Settings from "./Settings/Settings";
import ErrorPage from "./ErrorPage";


import "./App.css";

const App = () => {
  const [tab, setTab] = useState("Settings");

  const handleSelected = (event) => setTab(event.target.value);

  const fakeRouting = () => {
    switch (tab) {
      case "Editor":
        return <Editor />;
      case "Settings":
        return <Settings />
      default:
        return <ErrorPage page={tab} />;
    }
  };

  return (
    <HelmetProvider>
      <div className="App">
        <Helmet>
          <title>Timeline | {tab}</title>
        </Helmet>
        <Header selected={tab} />
        <Nav selected={tab} callback={handleSelected} />
        <div className="Tab">
          {fakeRouting()}
        </div>
      </div>
    </HelmetProvider>
  );
};

export default App;
