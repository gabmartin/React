import { Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";

function ContactHijo() {
  const params = useParams();
  const contact = useMemo(() => getContact(params.contactid),[])
  return (
    <div>
      <h1>{params.contactid}</h1>
    </div>
  );
}

export default ContactHijo;
