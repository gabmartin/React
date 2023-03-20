import { Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";

function Contact() {
  const params = useParams();
  return (
    <div>
      <h1>{Contact.name}</h1>
      <Outlet></Outlet>
    </div>
  );
}

export default Contact;
