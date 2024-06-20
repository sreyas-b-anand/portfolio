import "./myprojectcomp.css";

function Myprojectcomp(props) {
  const calculator = props.calculator;
  const tictactoe = props.tictactoe;

  return (
    <>
      <div className="all">
        <div className="project1">
          <div key={calculator.id}>
            <header>{calculator.header}</header>
            <section>{calculator.desc}</section>
            <footer>
              <a href={calculator.gitlink}>GIT</a>{" "}
              <a href={calculator.weblink}>WEB</a>
            </footer>
          </div>
        </div>

        <div className="project2">
          <div key={tictactoe.id}>
            <header>{tictactoe.header}</header>
            <section>{tictactoe.desc}</section>
            <footer>
              <a href={tictactoe.gitlink}>GIT</a>
              <a className="disabled" href={tictactoe.weblink}>WEB</a>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
}
export default Myprojectcomp;
