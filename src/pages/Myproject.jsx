import Myprojectcomp from "../Components/Myprojectcomponent";
import Navbar from "../Components/Navbar";
import "./MyProjects.css";

function Myproject() {
  const calculator = {
    header: "CALCULATOR",
    desc: "I have created a calculator website which performs basic arthmetic,trigonometric, and logarithmic operations(recommended for desktops and laptops)",
    gitlink: "https://github.com/sreyas-b-anand/calculator12",
    weblink: "https://sreyas-b-anand.github.io/calculator12/",
    id: 1,
  };
  const tictactoe = {
    header: "TIC-TAC-TOE ",
    desc: "I have created a tictactoe game , using C++ ,which runs on terminal",
    gitlink: "https://github.com/sreyas-b-anand/tictactoeCpp",
    weblink: "",
    id: 2,
  };

  return (
    <>
      <Navbar />

      <Myprojectcomp tictactoe={tictactoe} calculator={calculator} />
    </>
  );
}
export default Myproject;
