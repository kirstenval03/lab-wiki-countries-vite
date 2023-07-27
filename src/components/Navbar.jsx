
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-primary mb-3">
      <div className="container">
        <a className="navbar-brand" href="/">
          WikiCountries
        </a>
      </div>
      <ul>
        <Link style={{ color: "white" }} to="/">
          {" "}
          Home{" "}
        </Link>
    <Link style={{ color: "white" }} to="/countries">
        {" "}
        Countries{" "}
    </Link>
    </ul>
    </nav>
    );
}
export default Navbar;