function CourseDashboard() {
  return (
    <div className="container-fluid py-5 bg-light min-vh-100">

      {/* Header */}
      <div className="row mb-5">
        <div className="col">
          <h1 className="display-5 fw-bold text-primary">
            Course Dashboard
          </h1>
          <p className="text-muted">
            Track your progress and manage your learning journey.
          </p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="row g-4 mb-5">
        <div className="col-md-4">
          <div className="card shadow-sm border-0 rounded-4 text-center p-4">
            <h3 className="fw-bold text-success">5</h3>
            <p className="text-muted mb-0">Active Courses</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm border-0 rounded-4 text-center p-4">
            <h3 className="fw-bold text-warning">2</h3>
            <p className="text-muted mb-0">Pending Assignments</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm border-0 rounded-4 text-center p-4">
            <h3 className="fw-bold text-info">85%</h3>
            <p className="text-muted mb-0">Overall Progress</p>
          </div>
        </div>
      </div>

      {/* Courses Section */}
      <div className="row">
        <div className="col">
          <div className="card shadow-lg border-0 rounded-4">
            <div className="card-body p-4">
              <h4 className="fw-semibold mb-4">Your Courses</h4>

              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  Web Development
                  <span className="badge bg-primary rounded-pill">
                    In Progress
                  </span>
                </li>

                <li className="list-group-item d-flex justify-content-between align-items-center">
                  Database Systems
                  <span className="badge bg-success rounded-pill">
                    Completed
                  </span>
                </li>

                <li className="list-group-item d-flex justify-content-between align-items-center">
                  Software Engineering
                  <span className="badge bg-warning text-dark rounded-pill">
                    Upcoming
                  </span>
                </li>
              </ul>

            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default CourseDashboard;