import { useState } from "react";
function App() {

  const [infoContacto,setInfoContacto] = useState({
    nombre: "",
    email: "",
    tlf:""
  });

  const manejaCambio = (evento) => {
    setInfoContacto({...infoContacto,[evento.target.name]:evento.target.value});
  }

  const manejaSubmit = (evento) =>{
    evento.preventDefault();
    console.log(infoContacto);
  }

  return (
    <div>
      <form onSubmit={manejaSubmit}>
        <h3>Contacto</h3>
        <br></br>
        <input type="text" name="nombre" id="nombre" onChange={manejaCambio}></input>
        <br></br><br></br>
        <input type="email" name="email" id="email" onChange={manejaCambio}></input>
        <br></br><br></br>
        <input type="number" name="tlf" id="tlf" onChange={manejaCambio}></input>
        <br></br><br></br>
        <button>Submit</button>
      </form>
     </div>
  );
}

export default App;