/* eslint-disable react/function-component-definition */
import "./App.css";

import React, { FC } from "react";

import Layouts from "./components/layout";

const App: FC = () => {
  return (
    <div className="App">
      <Layouts title="aaa" />
    </div>
  );
};

export default App;
