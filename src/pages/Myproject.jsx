import Myprojectcomp from "../Components/Myprojectcomponent";
import Navbar from "../Components/Navbar";
import "./MyProjects.css";

function Myproject() {
  const calculator = {
    header: "GRAMMR",
    desc: "I have created a simple grammar checking website using Gemini api",
    gitlink: "https://github.com/sreyas-b-anand/grammr",
    weblink: "https://grammr.vercel.app/",
    id: 1,
  };
  const tictactoe = {
    header: "TIC-TAC-TOE ",
    desc: "I have created a tictactoe game , using C++ ,which runs on terminal",
    gitlink: "https://github.com/sreyas-b-anand/tictactoeCpp",
    weblink: "",
    id: 2,
  };
  const bookFinder = {
    header: "BOOKLIB ",
    desc: "I have created a simple book finder website using Google Books api",
    gitlink: "https://github.com/sreyas-b-anand/book-finder",
    weblink: "https://booklib-sreyas.vercel.app/",
    id: 3,
  }

  return (
    <>
      <Navbar />

      <Myprojectcomp tictactoe={tictactoe} calculator={calculator} bookFinder={bookFinder} />
    </>
  );
}
export default Myproject;
