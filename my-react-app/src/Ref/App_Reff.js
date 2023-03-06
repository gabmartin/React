import React, { useState, useEffect, useRef } from "react";

function App() {
  let inputEl = useRef(null);

  const onClickBoton = () => {
    inputEl.current.focus();
  };

  return (
    <div>
      <input ref={inputEl} type="text"></input>
      <button onClick={onClickBoton}>Enfoca!</button>
    </div>
  );
}

export default App;
