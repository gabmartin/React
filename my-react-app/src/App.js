import React from "react";
import { useState } from "react";

const Likes = ({ parametro }) => {
  const [mgState, setMgState] = useState(parametro);
  let elemento = (
    <button
      onClick={() => {
        setMgState(mgState + 1);
      }}
    >
      {mgState} likes
    </button>
  );
  return elemento;
};

function App() {
  return <Likes parametro={0}></Likes>;
}

export default App;
