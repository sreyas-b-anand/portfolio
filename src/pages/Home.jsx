import Navbar from "../Components/Navbar";
import git from "../assets/git.png";
import mail from "../assets/mail.png";
import linkedIn from "../assets/linkedIn.png";
import "./Home.css";


function Home() {

  return (
    <>
   
      <Navbar  />
      
      <div className="homepage">
        <div className="social">
          <div className="intro">
            Hi,My name is{" "}
            <div className="name">
              SREYAS B ANAND{" "}
              <div className="photodiv">
                <img
                  alt="image"
                  src=""
                  className="photo1"
                />
                <img
                  alt="image"
                  src=""
                  className="photo2"
                />
              </div>
            </div>
          </div>

          <br />
          <section className="welcome">
            WELCOME TO MY PORTFOLIO <p className="website">WEBSITE</p>
          </section>
          <div className="image">
            <a href="https://github.com/SREYAS1045">
              <img className="linkimg" src={git} />
            </a>
            <a href="https://www.linkedin.com/in/sreyas-b-anand-8113a8298">
              <img className="linkimg" src={linkedIn} />
            </a>
            <a href="mailto:sreyas1045@gmail.com">
              <img className="linkimg" src={mail}/>
            </a>
          </div>
        </div>
      </div>
    
      
    
    </>

  );
}
export default Home;
