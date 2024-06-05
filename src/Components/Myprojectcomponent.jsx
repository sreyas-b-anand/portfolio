

function Myprojectcomp(props) {
  const projects = props.project;
  /* Myprojectcomp.propTypes = {
    calculator: PropTypes.shape({
      header: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired,
      gitlink: PropTypes.string.isRequired,
      weblink: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired,


  };*/
  return (
    <>
      <div className="project">
      
          {projects.map((project) => (
            <div key={project.id}>
              <section>{project.header}</section>
              <p>{project.desc}</p>
              <a href={project.gitlink}>GIT</a>
              <a href={project.weblink}>WEB</a>
            </div>
          ))}
        </div>
     
    </>
  );
}
export default Myprojectcomp;
