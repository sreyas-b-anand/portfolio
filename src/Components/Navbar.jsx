import { Link } from "react-router-dom";
import './Navbar.css';


function Navbar() {
  return (
    <>
      <nav className="navbar">
        <header><p className="name">SREYAS B ANAND</p></header>
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
