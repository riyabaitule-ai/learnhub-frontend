function Footer() {
  return (
    <footer className="site-footer custom-footer learnhub-footer">
      <div className="footer">
        <div className="row footer-brand-row">
          <span className="footer-logo">LearnHub</span>
          <p className="footer-tagline">
            Expert-led courses, modern career pathways, and a supportive learning community.
          </p>
        </div>

        <div className="row footer-social">
          <a href="#"><i className="fa fa-facebook"></i></a>
          <a href="#"><i className="fa fa-instagram"></i></a>
          <a href="#"><i className="fa fa-youtube"></i></a>
          <a href="#"><i className="fa fa-twitter"></i></a>
        </div>

        <div className="row footer-links">
          <ul>
            <li><a href="#">Contact us</a></li>
            <li><a href="#">Our Services</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Career</a></li>
          </ul>
        </div>

        <div className="row footer-copy">
          LearnHub © 2026 LearnHub - All rights reserved || Designed by: Mahesh
        </div>
      </div>
    </footer>
  );
}

export default Footer;
