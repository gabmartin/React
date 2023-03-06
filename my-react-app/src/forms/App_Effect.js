import React, { useState, useEffect } from "react";

// Efectos: componentDidUpdate,
//          componentDidMount,
//          componentWillUnmount

function App() {
  // componentDidMount(){}
  // componentDidUpdate(){} Forma antigua de llamarlos
  // componentWillUnmount(){}

  let [contar, setContar] = useState(0);
  useEffect(() => {
    setContar(contar + 1);
  }, []);

  return (
    <div>
      <p>{contar}</p>
    </div>
  );
}

export default App;
