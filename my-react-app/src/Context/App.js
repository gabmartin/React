import React from "react";
import UserContext from "./user_context/UserContext";
import MoreInfo from "./components/MoreInfo";

function App() {
  const userData = {
    name: "Agustin",
    years: 27,
  };

  return (
    <UserContext.Provider value={userData}>
      <div>
        <h1>useContext</h1>
        <MoreInfo />
      </div>
    </UserContext.Provider>
  );
}

export default App;
