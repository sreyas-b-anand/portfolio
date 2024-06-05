import { Link } from "react-router-dom";
import './Navbar.css';


function Navbar() {
  return (
    <>
      <nav className="navbar">
        <p className="name">PORTFOLIO</p>
        <section>
        <Link to='/'>HOME</Link>
        <Link to='/Aboutme'>ABOUT</Link>
        <Link to='/MyProjects'>MY PROJECTS </Link>
        <Link to='/Contact'>CONTACT</Link>
        </section>
      </nav>
    </>
  )
}
export default Navbar;
