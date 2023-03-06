import { useState } from "react";
function App() {
  const [infoUsuario, setInfoUsuario] = useState({
    username: "",
    currentPassword: "",
    newPassword: "",
    email: "",
    birthdate: "",
    fraseSeguridad: "",
  });

  const handleChange = (evento) => {
    setInfoUsuario({
      ...infoUsuario,
      [evento.target.name]: evento.target.value,
    });
  };

  const handleSubmit = (evento) => {
    evento.preventDefault();
    console.log(infoUsuario);
  };

  return (
    <div>
      <h1>Cambia tu contraseña</h1>
      <br></br>
      <br></br>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Nombre de usuario"
          onChange={handleChange}
        ></input>
        <br></br>
        <br></br>
        <input
          type="password"
          name="currentPassword"
          id="currentPassword"
          placeholder="Tu actual contraseña"
          onChange={handleChange}
        ></input>
        <br></br>
        <br></br>
        <input
          type="password"
          name="newPassword"
          id="newPassword"
          placeholder="Tu nueva contraseña"
          onChange={handleChange}
        ></input>
        <br></br>
        <br></br>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Correo electrónico"
          onChange={handleChange}
        ></input>
        <br></br>
        <br></br>
        <label htmlFor="birthdate">Fecha de nacimiento </label>
        <input
          type="date"
          name="birthdate"
          id="birthdate"
          onChange={handleChange}
        ></input>
        <br></br>
        <br></br>
        <input
          type="text"
          name="fraseSeguridad"
          id="fraseSeguridad"
          placeholder="Tu frase de seguridad"
          onChange={handleChange}
        ></input>
        <br></br>
        <br></br>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
