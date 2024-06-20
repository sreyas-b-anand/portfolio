import { Link } from "react-router-dom";
import "./Sidebar.css";
import { useNavigate } from "react-router-dom";
import arrow from '../assets/arrow.png';

function Sidebar() {
  const navigate = useNavigate();
  const name = document.querySelector(".name");
  const handleClick = () => {
    const sidebar = document.querySelector(".sidebar");
    const button = document.querySelector(".btnsidebar");
    const image = document.querySelector(".btnimg");
    sidebar.classList.toggle("open");
    if (sidebar.classList.contains("open")) {
      sidebar.style.display = "flex";
      button.style.right = "60vw";
      image.style.transform = "rotate(180deg)";
      
    } else {
      setTimeout(() => {
        sidebar.style.display = "none";
      }, 300);
      button.style.right = "0";
      image.style.transform = "rotate(360deg)";
    }
  };
  

  const linkClick = (path) => {

    navigate(path);
  };
  return (
    <>
      <span>
        <a role="button" className="btnsidebar" onClick={handleClick}>
          <img className="btnimg" src={arrow} alt="III" />
        </a>
      </span>
      <span className="sidebar">
        <Link className="sidebarlink" to="/" onClick={() => linkClick("/")}>
          HOME
        </Link>
        <Link className="sidebarlink" to="/Aboutme" onClick={() => linkClick("/Aboutme")}>
          ABOUT
        </Link>
        <Link
          className="sidebarlink"
          to="/MyProjects"
          onClick={() => linkClick("/MyProjects")}
        >
          MY PROJECTS
        </Link>
        <Link className="sidebarlink" to="/Contact" onClick={() => linkClick("/Contact")}>
          CONTACT
        </Link>
      </span>
    </>
  );
}

export default Sidebar;
