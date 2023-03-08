import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <br></br>
      <Link to={"/about"}>Sobre mi</Link>
    </div>
  );
}

export default Home;
