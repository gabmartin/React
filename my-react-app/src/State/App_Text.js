import React from "react";
import { useState } from "react";

const Show = () => {
  let [showText, setShowText] = useState(false);

  return (
    <div>
      <button
        type="button"
        onClick={() => {
          setShowText(true);
        }}
      >
        Muestrame el texto {/* Comentario */}
      </button>
      {showText && <p>¡Se muestra el texto!</p>}

      {/* Es como un if(showText==true){div.appendchild(p)} 
      si en el p hicieramos un innerHTML con el texto */}

    </div>
  );
};

function App() {
  return <Show></Show>;
}

export default App;
