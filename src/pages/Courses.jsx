import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FigmaImg from "../assets/Learn Figma.jpg";
import PhpImg from "../assets/PHP and JS System Script.jpg";
import AnalyticsImg from "../assets/IT Statistics Data Science and Business Analysis.jpg";
import AndroidImg from "../assets/Advanced Android 12 & Kotlin Development.jpg";
import banner from "../assets/homeBanner.png";

function Courses() {
  const navigate = useNavigate();
  const [selectedCourseId, setSelectedCourseId] = useState(null);

  const categories = [
    "Digital Marketing",
    "UI/UX Design",
    "Graphic Design",
    "Web Development",
  ];

  const courses = [
    {
      id: 1,
      title: "Learn Figma — UI/UX Design Essential Training",
      img: FigmaImg,
      instructor: "Kevin Perry",
      duration: "06 Weeks",
      level: "Beginner",
      price: "Free",
      description: "Create polished wireframes, user flows, and modern app interfaces with practical Figma exercises.",
    },
    {
      id: 2,
      title: "Education Software and PHP and JS System Script",
      img: PhpImg,
      instructor: "Max Alexis",
      duration: "08 Weeks",
      level: "Intermediate",
      price: "Free",
      description: "Build a full-featured school management system with PHP, JavaScript, and database-driven logic.",
    },
    {
      id: 3,
      title: "IT Statistics Data Science and Business Analysis",
      img: AnalyticsImg,
      instructor: "Kevin Perry",
      duration: "10 Weeks",
      level: "Intermediate",
      price: "Free",
      description: "Learn how to analyze business data, visualize insights, and communicate findings with confidence.",
    },
    {
      id: 4,
      title: "Advanced Android 12 & Kotlin Development Course",
      img: AndroidImg,
      instructor: "Max Alexis",
      duration: "12 Weeks",
      level: "Advanced",
      price: "Free",
      description: "Develop Android apps using Kotlin, modern UI patterns, and real-world project workflows.",
    },
    {
      id: 5,
      title: "Cloud Computing with Azure Fundamentals",
      img: AndroidImg,
      instructor: "Sara Chen",
      duration: "07 Weeks",
      level: "Beginner",
      price: "Free",
      description: "Understand cloud concepts, deployment models, and practical Azure services for modern teams.",
    },
    {
      id: 6,
      title: "React Native Mobile App Development",
      img: FigmaImg,
      instructor: "Daniel Brooks",
      duration: "09 Weeks",
      level: "Intermediate",
      price: "Free",
      description: "Build cross-platform mobile apps with React Native and connect them to real APIs.",
    },
  ];

  return (
    <main className="container courses-page">
      <section className="courses-hero">
        <div className="hero-inner grid-2">
          <div className="hero-media-left">
            <img src={banner} alt="courses" />
          </div>
          <div className="hero-copy-right">
            <p className="eyebrow">Get to know about us</p>
            <h1> Dive into our Online Courses and Ignite Your Learning!</h1>
            <p>
              LearnHub offers curated, industry-aligned courses built to help
              you acquire in-demand skills quickly. Live mentorship, projects,
              and placement support included.
            </p>
            <ul className="feature-bullets">
              <li>Access more than 10k+ online courses</li>
              <li>Learn the high-impact skills that top companies want</li>
              <li>Practical projects and mentor feedback</li>
            </ul>
            <button className="btn-primary" onClick={() => navigate('/learn/enroll')}>About More</button>
          </div>
        </div>
      </section>

      <section className="popular-courses">
        <h2 className="section-title">Our Popular Online Courses</h2>

        <div className="category-pills">
          {categories.map((c) => (
            <button key={c} className="pill">{c}</button>
          ))}
        </div>

        <div className="courses-grid">
          {courses.map((c) => {
            const isSelected = selectedCourseId === c.id;

            return (
              <article key={c.id} className="course-card detailed">
                <div className="course-media">
                  <img src={c.img} alt={c.title} />
                  <span className="card-badge">{c.duration}</span>
                </div>
                <div className="course-body">
                  <h3>{c.title}</h3>
                  <div className="meta-row">
                    <div className="rating">⭐⭐⭐⭐☆</div>
                    <div className="meta-right">{c.price}</div>
                  </div>

                  <div className="course-footer">
                    <div className="instructor">{c.instructor}</div>
                    <div className="actions">
                      <button
                        className="btn-outline"
                        onClick={() => {
                          alert(`Enrollment request received for ${c.title}. Our team will contact you shortly.`);
                          navigate('/learn/enroll');
                        }}
                      >
                        Enroll
                      </button>
                      <button className="btn-link" onClick={() => setSelectedCourseId(isSelected ? null : c.id)}>
                        {isSelected ? 'Hide Details' : 'Details'}
                      </button>
                    </div>
                  </div>

                  {isSelected && (
                    <div className="course-details">
                      <div className="course-details-header">
                        <h4>Course Details</h4>
                        <button className="btn-link close-details" onClick={() => setSelectedCourseId(null)}>
                          Close
                        </button>
                      </div>
                      <p>{c.description}</p>
                      <ul className="detail-list">
                        <li><strong>Level:</strong> {c.level}</li>
                        <li><strong>Duration:</strong> {c.duration}</li>
                        <li><strong>Instructor:</strong> {c.instructor}</li>
                        <li><strong>Price:</strong> {c.price}</li>
                      </ul>
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        <div style={{ textAlign: 'center', marginTop: 22 }}>
          <button className="btn-primary" onClick={() => alert('View all courses')}>View All Courses</button>
        </div>
      </section>
    </main>
  );
}

export default Courses;
