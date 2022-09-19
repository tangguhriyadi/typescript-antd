/* eslint-disable react/function-component-definition */
import "./App.css";

import React, { FC } from "react";

import Layouts from "./components/layout";
import { addExtra, plus } from "./features/cake/cake";
import { useAppDispatch, useAppSelector } from "./features/hooks";

interface Props {
  title: string;
}

const App: FC<Props> = ({ title }: Props) => {
  const dispatch = useAppDispatch();
  const cake = useAppSelector((state) => state.cake.cake);
  const extra = useAppSelector((state) => state.cake.extra);
  return (
    <div className="App">
      <div>{title}</div>
      <div>{cake}</div>
      <div>{extra}</div>
      <button type="button" onClick={() => dispatch(plus())}>
        plus
      </button>
      <button type="button" onClick={() => dispatch(addExtra(1))}>
        extra
      </button>
      <Layouts />
    </div>
  );
};

export default App;
