import { useNavigate } from "react-router-dom";
import banner from "../assets/homeBanner2.png";
import liveInstructor from "../assets/liveInstructor.jpg";   // ✅ fixed import name
import practicalPortfolio from "../assets/PracticalPortfolio.jpg";
import careerSupport from "../assets/learnHome5.jpg";

function LearnHome() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <img src={banner} alt="LearnHub" className="banner-img" />

      <h1>Welcome to LearnHub</h1>

      <p>
        Upgrade your skills with industry-ready courses in MERN Stack, Python,
        Data Analytics, Machine Learning, and more. Learn with hands-on projects,
        live instructor sessions, and guided placement support.
      </p>

      <div className="stats-grid">
        <div className="stat-box">
          <strong>12,000+</strong>
          <span>happy learners</span>
        </div>
        <div className="stat-box">
          <strong>95%</strong>
          <span>placement support</span>
        </div>
        <div className="stat-box">
          <strong>150+</strong>
          <span>live projects</span>
        </div>
      </div>

      <button onClick={() => navigate("/course")}>Explore Courses</button>

      <div className="feature-grid">
        <article className="feature-box">
          <img src={liveInstructor} alt="Live classes" />   {/* ✅ fixed usage */}
          <h3>Live instructor-led sessions</h3>
          <p>Work through real problems with expert trainers and weekly Q&amp;A.</p>
        </article>
        <article className="feature-box">
          <img src={practicalPortfolio} alt="Project work" />
          <h3>Practical portfolio projects</h3>
          <p>Build applications, dashboards, and models you can share with employers.</p>
        </article>
        <article className="feature-box">
          <img src={careerSupport} alt="Career support" />
          <h3>Career-ready mentoring</h3>
          <p>Get resume reviews, interview coaching, and job placement guidance.</p>
        </article>
      </div>
    </div>
  );
}

export default LearnHome;
