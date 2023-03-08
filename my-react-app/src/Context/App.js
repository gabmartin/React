import React, { useContext } from "react";
import { useState, createContext } from "react";

// import UserContext from "./user_context/UserContext";
// import MoreInfo from "./components/MoreInfo";

// function App() {
//   const userData = {
//     name: "Agustin",
//     years: 27,
//   };

//   return (
//     <UserContext.Provider value={userData}>
//       <div>
//         <h1>useContext</h1>
//         <MoreInfo />
//       </div>
//     </UserContext.Provider>
//   );
// }

let contextoUsuario = createContext();
function App() {
  let [usuario, setUsuario] = useState("Javi");

  return (
    <div>
      <contextoUsuario.Provider value={usuario}>
        <Componente2></Componente2>
      </contextoUsuario.Provider>
    </div>
  );
}

function Componente2() {
  return (
    <div>
      <Componente3></Componente3>
    </div>
  );
}

function Componente3() {
  let usuarioQuerido = useContext(contextoUsuario);
  return (
    <div>
      <h2>Hola {usuarioQuerido}</h2>
    </div>
  );
}

export default App;
