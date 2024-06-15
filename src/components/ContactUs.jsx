import { Link, Outlet } from "react-router-dom";

const ContactUs = () => {
    return (
        <div>
            <h1>ContactUs</h1>
            <Link to="ceo" state={{name: "hassan"}}>CEO</Link> <br />
            <Link to="manager">Manager</Link> <br />
            <Link to="staff">Staff</Link> <br />
            <Outlet/>
        </div>
    );
}

export default ContactUs;