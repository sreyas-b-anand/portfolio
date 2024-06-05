import Myprojectcomp from "../Components/Myprojectcomponent";
import Navbar from "../Components/Navbar";
import useFetch from "../Components/useFetch";

function Myproject() {
  const { data: project, isLoading, isError } = useFetch();
  const error = "Oops ... Sreyas is not willing to show his projects :(";
  const error1 = "Try again later";

  return (
    <>
      <div className="navbar">
        <Navbar />
      </div>

      <div className="error">
        {isLoading && (
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        )}

        {isError && (
          <div >
            {error} <br />
            {error1}
          </div>
        )}
      </div>

      {project && <Myprojectcomp project={project} />}
    </>
  );
}
export default Myproject;
