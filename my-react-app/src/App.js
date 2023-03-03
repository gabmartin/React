import React from "react";
import { useState } from "react";

// const Likes = ({ parametro }) => {
//   const [mgState, setMgState] = useState(parametro);
//   let elemento = (
//     <button
//       onClick={() => {
//         setMgState(mgState + 1);
//       }}
//     >
//       {mgState} likes
//     </button>
//   );
//   return elemento;
// };

// function App() {
//   return <Likes parametro={0}></Likes>;
// }

/* Esta funcion nos permite empezar desde un valor inicial de 12,
que pasamos como parametro. El estado coge ese valor inicial y lo usa. 
El onClick y setState añaden 1 cada vez que hacemos click y actualiza el
estado. Es como decir likes = likes + 1 o likes += 1; */

const Likes = ({}) => {
  const [mgState, setMgState] = useState(0);
  let elemento = (
    <button onClick={() => {setMgState(mgState + 1)}}>

      {mgState} likes

    </button>
  );
  
  return elemento;
};

function App() {
  return <Likes></Likes>;
}

export default App;
