function Users({ users }) {
  return (
    <div className="container-fluid px-5 mt-5">
      <h1 className="mb-4 fw-bold text-dark">Users</h1>

      <div className="row g-4">
        {users.map((user) => (
          <div key={user._id} className="col-lg-4 col-md-6">
            <div className="card border-0 shadow-lg h-100">
              <div className="card-body">
                <h5 className="card-title fw-semibold">
                  {user.name}
                </h5>
                <p className="card-text text-muted">
                  {user.email}
                </p>
              </div>
              <div className="card-footer bg-transparent border-0">
                <button className="btn btn-outline-primary btn-sm">
                  View Profile
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Users;