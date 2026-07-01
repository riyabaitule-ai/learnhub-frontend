import enrollBanner from "../assets/Enroll.jpg";

function Enroll() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Your enrollment request has been received. We will contact you soon.");
  };

  return (
    <div className="container enroll-page">
      <div className="enroll-shell">
        <div className="enroll-left">
          <div className="enroll-left-inner">
            <p className="eyebrow">Enroll Now</p>
            <h1>Start your LearnHub journey today.</h1>
            <p className="enroll-lead">
              Join the next batch of LearnHub students and gain practical skills,
              live mentorship, and career support designed for modern learners.
            </p>

            <div className="enroll-features">
              <div className="feature-pill">Live classes with certified mentors</div>
              <div className="feature-pill">Real projects and portfolio reviews</div>
              <div className="feature-pill">Career coaching & placement support</div>
            </div>

            <div className="enroll-stats">
              <div>
                <strong>98%</strong>
                <span>Student satisfaction</span>
              </div>
              <div>
                <strong>12k+</strong>
                <span>Successful alumni</span>
              </div>
            </div>
          </div>
        </div>

        <div className="enroll-right">
          <div className="enroll-card">
            <img src={enrollBanner} alt="Enroll now" className="page-image" />
            <h2>Secure Your Seat</h2>
            <p>Choose your course and tell us how we can help you grow.</p>
            <form className="form-grid" onSubmit={handleSubmit}>
              <input type="text" placeholder="Full Name" />
              <input type="email" placeholder="Email Address" />
              <input type="tel" placeholder="Phone Number" />
              <select>
                <option>Select Course</option>
                <option>MERN Stack</option>
                <option>Python Programming</option>
                <option>Data Analytics</option>
                <option>Machine Learning</option>
              </select>
              <textarea placeholder="Your goals and questions"></textarea>
              <button type="submit" className="enroll-submit">Enroll Now</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Enroll;
