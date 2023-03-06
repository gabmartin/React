import React from "react";
import { useState } from "react";
import { render } from "react-dom";

const Form = ({ }) => {
  const [nameState, setNameState] = useState("Tu nombre");
  
  const eventChange = (evento) => {
    setNameState(evento.target.value);
    console.log(nameState);
  };

  let elemento = (<form>
    <p>Dime tu nombre</p>
    <input type="text" value={nameState} 
      onChange={eventChange}/>
  </form>)
  return elemento;
};

function App2() {
  return <Form></Form>;
}

export default App2;
