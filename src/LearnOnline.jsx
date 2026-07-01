import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { FaHome, FaBookOpen, FaChalkboardTeacher, FaRegEdit, FaEnvelope } from "react-icons/fa";
import "./LearnOnline.css";
import "./App.css";


import Home from "./pages/LearnHome";
import Course from "./pages/LearnCourse";
import Instructors from "./pages/LearnInstr";
import Enroll from "./pages/LearnEn";
import Contact from "./pages/LearnCont";
import Footer from "./pages/LearnFooter";

function LearnOnline() {
  return (
    <BrowserRouter>

      <nav>
        <h2>LearnHub</h2>

        <div className="nav-links">
          <Link to="/"><FaHome className="nav-icon" /> Home</Link>
          <Link to="/course"><FaBookOpen className="nav-icon" /> Course</Link>
          <Link to="/instructors"><FaChalkboardTeacher className="nav-icon" /> Instructors</Link>
          <Link to="/enroll"><FaRegEdit className="nav-icon" /> Enroll Now</Link>
          <Link to="/contact"><FaEnvelope className="nav-icon" /> Contact</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Course />} />
        <Route path="/instructors" element={<Instructors />} />
        <Route path="/enroll" element={<Enroll />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default LearnOnline;