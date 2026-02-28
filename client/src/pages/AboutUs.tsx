function AboutUs() {
  return (
    <div className="container-fluid py-5 bg-light min-vh-100">
      <div className="row justify-content-center">
        <div className="col-lg-8 text-center mb-5">
          <h1 className="display-4 fw-bold text-primary">
            Our Mission
          </h1>
          <p className="lead text-muted mt-3">
            Building technology that empowers people and institutions.
          </p>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card shadow-lg border-0 rounded-4">
            <div className="card-body p-5">
              <p className="fs-5 text-muted">
                Blah blah blah stuff about our mission. We believe in
                innovation, collaboration, and creating solutions that
                make an impact. Our goal is to provide seamless digital
                experiences that are powerful, intuitive, and scalable.
              </p>

              <p className="fs-5 text-muted mt-4">
                Through thoughtful design and modern engineering, we aim
                to redefine how users interact with technology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;