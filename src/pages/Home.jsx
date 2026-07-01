import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import banner from "../assets/homeBanner.png";
import heroPerson from "../assets/hero.png";
import MERN from "../assets/MERNStack.jpg";
import Python from "../assets/PythonProgramming.jpg";
import DataAnalytics from "../assets/DataAnalytics.jpg";
import ML from "../assets/MachineLearning.jpg";
import Rahul from "../assets/RahulSharma.jpg";
import Priya from "../assets/PriyaVerma.jpg";
import Amit from "../assets/AmitKumar.jpg";
import learnHubImg from "../assets/learnHub.jpg";

function Home() {
  const navigate = useNavigate();
  const [testIndex, setTestIndex] = useState(0);

  const courses = [
    { title: "Full Stack Web Development", img: MERN, tag: "MERN", duration: "12 Weeks" },
    { title: "Python Programming", img: Python, tag: "Python", duration: "8 Weeks" },
    { title: "Data Analytics", img: DataAnalytics, tag: "Data", duration: "10 Weeks" },
    { title: "Machine Learning", img: ML, tag: "AI", duration: "14 Weeks" },
  ];

  const highlights = [
    "Live classes with expert mentors",
    "Real-world projects and portfolio support",
    "Flexible learning with recorded sessions",
    "Career guidance and job-readiness training",
  ];

  const testimonials = [
    { name: "Rahul Sharma", img: Rahul, text: "Great instructors and hands-on projects." },
    { name: "Priya Verma", img: Priya, text: "I got placed within months after the course." },
    { name: "Amit Kumar", img: Amit, text: "Practical curriculum and supportive mentors." },
  ];

  useEffect(() => {
    const id = setInterval(() => {
      setTestIndex((i) => (i + 1) % testimonials.length);
    }, 4200);
    return () => clearInterval(id);
  }, []);

  return (
    <main>
      <section className="hero-section">
        <div className="hero-inner container-hero">
          <div className="hero-copy">
            <p className="eyebrow">LearnHub</p>
            <h1>
              Online Education
              <span> Feels Like Real Classroom</span>
            </h1>
            <p className="lead">
              Practical, mentor-led courses that prepare you for the real world.
              Get certified, build job-ready skills, and connect with industry
              mentors.
            </p>

            <div className="hero-cta">
              <button className="btn-primary" onClick={() => navigate("/learn")}>Get Started</button>
              <button className="btn-ghost" onClick={() => navigate("/courses")}>Our Courses</button>
            </div>

            <ul className="stats">
              <li><strong>16500+</strong> Active Students</li>
              <li><strong>7500+</strong> Online Courses</li>
              <li><strong>98%</strong> Job Placement Rate</li>
            </ul>
          </div>

          <div className="hero-media">
            <img src={banner} alt="learning banner" className="banner-img" />
            <img src={heroPerson} alt="student" className="hero-person" />
          </div>
        </div>
      </section>

      <section className="features container">
        <div className="feature-box">
          <h4>Audio & Video</h4>
          <p>High-quality streaming and recorded sessions for flexible learning.</p>
        </div>
        <div className="feature-box">
          <h4>Virtual Classroom</h4>
          <p>Interactive live classes with mentors and doubt-clearing sessions.</p>
        </div>
        <div className="feature-box">
          <h4>Group Learning</h4>
          <p>Peer projects and community study groups to accelerate growth.</p>
        </div>
      </section>

      <section className="courses container">
        <h2 className="section-title">Choose Our Top Courses</h2>
        <div className="courses-grid">
          {courses.map((c, idx) => (
            <article key={idx} className="course-card">
              <div className="course-media">
                <img src={c.img} alt={c.title} />
              </div>
              <div className="course-body">
                <h3>{c.title}</h3>
                <p className="tag">{c.tag}</p>
                <p className="course-duration">{c.duration}</p>
                <div className="course-actions">
                  <button className="btn-outline" onClick={() => alert("Enroll clicked")}>Enroll Now</button>
                  <button className="btn-link" onClick={() => navigate('/about')}>Details</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="why container">
        <div className="why-inner">
          <div className="why-media">
            <img src={learnHubImg} alt="students" className="page-image" />
          </div>
          <div className="why-copy">
            <h2>Why Online Learning Method?</h2>
            <p>
              Online learning provides flexibility, accessibility, and personalized
              experiences, making education convenient for all learners.
            </p>
            <ul className="bullets">
              <li><strong>Our Mission:</strong> Create a supportive learning community.</li>
              <li><strong>Our Vision:</strong> Help learners explore new horizons.</li>
            </ul>
            <div className="highlight-list">
              {highlights.map((item) => (
                <div key={item} className="highlight-item">{item}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials container">
        <h2 className="section-title">What Our Clients Are Saying</h2>
        <div className="test-slider">
          {testimonials.map((t, i) => (
            <blockquote key={i} className={"test-card " + (i === testIndex ? 'active' : '')}>
              <img src={t.img} alt={t.name} className="profile-card" />
              <p className="test-text">"{t.text}"</p>
              <p className="test-name">— {t.name}</p>
            </blockquote>
          ))}
        </div>
      </section>
    </main>
  );

}

export default Home;