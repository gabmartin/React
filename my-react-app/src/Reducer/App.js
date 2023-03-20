import React, { Component } from "react";
import { useEffect, useReducer, useRef } from "react";


let initialState = {
  activado: false,
  tiempo: 0
}

function App() {
  let [estado, funcionUsada] = useReducer(reducer, initialState);

  let referenciaId = useRef(0);

  useEffect(() => {
    referenciaId.current = setInterval(() => funcionUsada({ type: "tick "}, 1000));
    return () => {
      clearInterval(referenciaId.current);
      referenciaId.current = 0;
    };
  }, [estado.activado]);

  return (
    <div>
      {estado.tiempo}
      <div>
        <button onClick={() => funcionUsada({ type: "start" })}>Empezar</button>
        <button onClick={() => funcionUsada({ type: "stop" })}>Parar</button>
        <button onClick={() => funcionUsada({ type: "reset" })}>Resetear</button>
      </div>
    </div>
  );
}

function reducer(estado, accion) {
  switch (accion.type) {
    case "start":
      return { ...estado, activado: true };
    case "stop":
      return { ...estado, activado: false };

    case "reset":
      return { activado: false, tiempo: 0 };

    case "tick":
      return { ...estado, tiempo: estado.tiempo + 1 };
  }
}

export default App;
