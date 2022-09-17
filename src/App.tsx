import "./App.css";

import React, {FC} from "react";

interface Props {
  title: string;
}

const App: FC<Props> = ({ title }: Props) => {
  return (
    <div className="App">
      <div>{title}</div>
    </div>
  );
};

export default App;
