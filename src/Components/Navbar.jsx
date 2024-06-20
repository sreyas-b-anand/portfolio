import { Link } from "react-router-dom";
import "./Navbar.css";
import Sidebar from "./Sidebar";

function Navbar() {
  
  return (
    <>
      <nav className="navbar">
        <header>
          <p className="name">SREYAS B ANAND</p>
        </header>
        <Sidebar  />
        <section>
          <Link className="link" to="/">
            HOME
          </Link>
          <Link className="link" to="/Aboutme">
            ABOUT
          </Link>
          <Link className="link" to="/MyProjects">
            MY PROJECTS{" "}
          </Link>
          <Link className="link" to="/Contact">
            CONTACT
          </Link>
        </section>
      </nav>
    </>
  );
}
export default Navbar;
