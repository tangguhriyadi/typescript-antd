/* eslint-disable react/function-component-definition */
import "./App.css";

import React, { FC } from "react";

import Layouts from "./components/layout";
import Wrap from "./components/wrap";

const App: FC = () => {
  return (
    <Wrap>
      <div className="App">
        <Layouts title="aaa" />
      </div>
    </Wrap>
  );
};

export default App;
