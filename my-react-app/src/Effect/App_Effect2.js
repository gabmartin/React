import React, { useState, useEffect } from "react";

function App() {
  let [nombre, setNombre] = useState("");
  let [apellido, setApellido] = useState("");

  useEffect(() => {
    console.log("Me he ejecutado, me llamo " + nombre);
  }, [nombre]);

  return (
    <div>
      <input
        value={nombre}
        onChange={(evento) => {
          setNombre(evento.target.value);
        }}
      ></input>
      <br></br>
      <input
        value={apellido}
        onChange={(evento) => {
          setApellido(evento.target.value);
        }}
      ></input>
    </div>
  );
}

export default App;
