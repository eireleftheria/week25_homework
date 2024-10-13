import "./App.css";
import React, { useState } from "react";

function App() {
  const [counted, setCounted] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => setCounted((prevCount) => prevCount + 1)}>
          {counted}
        </button>
      </header>
    </div>
  );
}

export default App;
