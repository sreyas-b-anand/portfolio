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
            <a href={calculator.gitlink}>GIT</a>
            <a href={calculator.weblink}>WEB</a>
          </div>
        </div>

        <div className="project2">
          <div key={tictactoe.id}>
            <header>{tictactoe.header}</header>
            <section>{tictactoe.desc}</section>
            <a href={tictactoe.gitlink}>GIT</a>
            <a href={tictactoe.weblink}>WEB</a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Myprojectcomp;
