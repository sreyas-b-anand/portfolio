import Myprojectcomp from "../Components/Myprojectcomponent";
import Navbar from "../Components/Navbar";
import './MyProjects.css'

function Myproject() {
  const calculator = {
    header: "CALCULATOR",
    desc: "I have created a calculator website which performs basic arthmetic,trigonometric, and logarithmic operations(recommended for desktops and laptops)",
    gitlink: "https://github.com/SREYAS1045/calculator12",
    weblink: "https://sreyas1045.github.io/calculator12/",
    id: 1,
  };
  const tictactoe = {
    header : "TIC-TAC-TOE ",
    desc : "I have created a tictactoe game , using C++ ,which runs on terminal",
    gitlink : "https://github.com/SREYAS1045/tictactoeCpp",
    weblink : "" ,
    id : 2
  }
  

  return (
    <>
      <div className="navbar">
        <Navbar />
      </div>
        <Myprojectcomp tictactoe={tictactoe} calculator={calculator} />
    </>
  );
}
export default Myproject;
