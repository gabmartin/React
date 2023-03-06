import React from "react";
import { useState } from "react";

const Show = () => {
  let [showText, setShowText] = useState({
    nombre: "",
    apellido: "",
    show: false,
  });

  return (
    <div>
      <form>
        <p>Nombre</p>
        <input type="text" id="nombre"></input>
        <br></br>
        <br></br>
        <p>Apellido</p>
        <input type="text" id="apellido"></input>
      </form>
      <button
        type="button"
        onClick={() => {
          setShowText({
            nombre: document.getElementById("nombre").value,
            apellido: document.getElementById("apellido").value,
            show: true,
          });
        }}
      >
        Muestrame el texto
      </button>

      {showText.show && showText.nombre + " " + showText.apellido}
      {showText.show && <p>Ha funcionado</p>}
    </div>
  );
};

function App() {
  return <Show></Show>;
}

export default App;
