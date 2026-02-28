import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container-fluid min-vh-100 d-flex justify-content-center align-items-center">
      <div className="text-center p-5 bg-white shadow-lg rounded-4">
        <h1 className="display-4 fw-bold text-primary mb-3">
          Welcome!
        </h1>

        <p className="lead text-muted mb-4">
          A site to learn anything and build your own personal cirriculum
        </p>

        <div className="d-flex flex-column gap-3 mt-4">
          <Link to="/login" className="btn btn-primary btn-lg">
            Login
          </Link>

          <Link to="/signup" className="btn btn-outline-primary btn-lg">
            Sign Up
          </Link>

          <Link to="/institution-login" className="btn btn-dark btn-lg">
            Login with Institution
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;