import { FaGraduationCap, FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="site-footer custom-footer learnhub-footer">
      <div className="footer">
        <div className="footer-brand-row">
          <span className="footer-logo">
            <FaGraduationCap /> LearnHub
          </span>
          <p className="footer-tagline">
            Expert-led courses, modern career pathways, and a supportive learning community.
          </p>
        </div>

        <div className="footer-social">
          <a href="#" aria-label="Facebook"><FaFacebook /></a>
          <a href="#" aria-label="Instagram"><FaInstagram /></a>
          <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
          <a href="#" aria-label="YouTube"><FaYoutube /></a>
        </div>

        <div className="footer-links">
          <ul>
            <li><a href="#">Contact us</a></li>
            <li><a href="#">Our Services</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Career</a></li>
          </ul>
        </div>

        <div className="footer-copy">
          LearnHub © 2026 LearnHub - All rights reserved || Designed by: Mahesh
        </div>
      </div>
    </footer>
  );
}

export default Footer;