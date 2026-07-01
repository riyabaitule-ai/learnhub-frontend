import { useNavigate } from "react-router-dom";
import course1 from "../assets/Learn Figma.jpg";
import course2 from "../assets/Php1.jpg";
import course3 from "../assets/IT Statistics Data Science and Business Analysis.jpg";
import course4 from "../assets/Advanced Android 12 & Kotlin Development.jpg";

function Course() {
  const navigate = useNavigate();

  const categories = ["Digital Marketing", "UI/UX Design", "Graphic Design", "Web Development"];
  const courses = [
    {
      id: 1,
      title: "Learn Figma — UI/UX Design Essential Training",
      img: course1,
      instructor: "Rahul Sharma",
      duration: "06 Weeks",
      tag: "UI/UX",
    },
    {
      id: 2,
      title: "Education Software and PHP and JS System Script",
      img: course2,
      instructor: "Sarah Miller",
      duration: "08 Weeks",
      tag: "Web Dev",
    },
    {
      id: 3,
      title: "IT Statistics Data Science and Business Analysis",
      img: course3,
      instructor: "Priyanka Arora",
      duration: "10 Weeks",
      tag: "Data",
    },
    {
      id: 4,
      title: "Advanced Android 12 & Kotlin Development Course",
      img: course4,
      instructor: "Amit Kumar",
      duration: "12 Weeks",
      tag: "Mobile",
    },
  ];

  return (
    <main className="course-page">
      <div className="container">
        <section className="course-hero">
          <div className="hero-left">
            <p className="eyebrow">Get to know about us</p>
            <h1>Our Popular Online Courses</h1>
            <p className="hero-copy">
              LearnHub offers mentor-led programs, real-world projects, and career support to help you build job-ready skills fast.
            </p>
            <ul className="hero-list">
              <li>10k+ courses designed for modern learners</li>
              <li>Live mentorship and hands-on project review</li>
              <li>Certification pathways built for placement success</li>
            </ul>
            <button className="btn-primary" onClick={() => navigate("/instructors")}>Meet Our Team</button>
          </div>
          <div className="hero-right">
            <div className="hero-stack">
             
              <img src={course2} alt="Python course" />
              
            </div>
          </div>
        </section>

        <section className="category-row">
          {categories.map((category) => (
            <button key={category} className="pill">{category}</button>
          ))}
        </section>

        <section className="course-grid course-card-grid">
          {courses.map((course) => (
            <article key={course.id} className="course-card detailed">
              <div className="course-media">
                <img src={course.img} alt={course.title} />
                <span className="card-badge">{course.duration}</span>
              </div>
              <div className="course-body">
                <div className="course-meta">
                  <span className="course-tag">{course.tag}</span>
                  <span className="course-level">Beginner</span>
                </div>
                <h3>{course.title}</h3>
                <p className="course-description">
                  A practical course with real labs, instructor coaching, and portfolio-ready outcomes.
                </p>
                <div className="course-actions-row">
                  <button className="btn-outline" onClick={() => navigate("/enroll")}>Enroll</button>
                  <button className="btn-link" onClick={() => alert("Course details coming soon")}>Details</button>
                </div>
                <div className="course-footer">
                  <span>Instructor: {course.instructor}</span>
                  <span className="course-price">FREE</span>
                </div>
              </div>
            </article>
          ))}
        </section>

        <div className="course-cta-row">
          <button className="btn-primary" onClick={() => navigate("/enroll")}>View All Courses</button>
        </div>
      </div>
    </main>
  );
}

export default Course;
