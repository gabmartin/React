import { Link } from "react-router-dom";

function Menu() {
  return (
    <div>
      <nav>
        <Link to={"/about"}>Sobre mi</Link>
        <br></br>
        <Link to={"/contact"}>Contacto</Link>
        <br></br>
      </nav>
    </div>
  );
}

export default Menu;
