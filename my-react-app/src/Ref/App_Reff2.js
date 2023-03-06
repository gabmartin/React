import React, { useEffect, useRef } from "react";

function App() {
  let inputEl = useRef(null);

  useEffect(() => {
    inputEl.current.focus();
  }, []);

  return (
    <div>
      <p>Nombre</p>
      <input ref={inputEl}></input>
      <br></br>
      <p>Apellido</p>
      <input></input>
    </div>
  );
}

export default App;
