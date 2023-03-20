import Menu from "../Menu/menu";
import { Link } from "react-router-dom";
import { items } from "../Data/items";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <br></br>
      <Menu />
      {items.map((item) => (
        <Link to={"/contact/${item.id}"}>
          <div>
            {item.nombre}
            <br></br>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Home;
