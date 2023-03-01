import React from "react";
import './App.css';
import Future from "./Future/Future";
import Header from "./Header/Header"
import WhatIsGPT from "./WhatIsGPT/WhatIsGPT";
import Possibility from "./Possibillty/Possibility"

function App() {
  return (
    <div className="App">
      <Header />
      <WhatIsGPT />
      <Future />
      <Possibility />
    </div>
  );
}

export default App;
