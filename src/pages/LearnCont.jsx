import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaClock } from "react-icons/fa";

function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Your message has been sent successfully. We will get back to you soon.");
  };

  return (
    <main className="contact-page">
      <div className="container">
        <div className="contact-shell">
          <section className="contact-glass contact-info-card">
            <p className="eyebrow">We're here to help you</p>
            <h1>Discuss your LearnHub learning goals today.</h1>
            <p className="contact-intro">
              Get personalized guidance for courses, enrollment timelines, career support,
              and team training solutions tailored for modern learners.
            </p>

            <div className="contact-detail">
              <span className="detail-icon">
                <FaEnvelope />
              </span>
              <div>
                <p>hello@learnhub.com</p>
                <small>Email support</small>
              </div>
            </div>

            <div className="contact-detail">
              <span className="detail-icon">
                <FaPhoneAlt />
              </span>
              <div>
                <p>+91 98765 43210</p>
                <small>Phone support</small>
              </div>
            </div>

            <div className="contact-detail">
              <span className="detail-icon">
                <FaMapMarkerAlt />
              </span>
              <div>
                <p>84 Learning Avenue, Pune, Maharashtra</p>
                <small>Visit our campus</small>
              </div>
            </div>

            <div className="contact-detail">
              <span className="detail-icon">
                <FaClock />
              </span>
              <div>
                <p>Mon - Sat, 9:00 AM - 7:00 PM</p>
                <small>Office hours</small>
              </div>
            </div>
          </section>

          <section className="contact-glass contact-form-card">
            <h2>Send Us a Message</h2>
            <p className="contact-form-copy">
              Share your area of interest and we'll connect you with the right LearnHub team.
            </p>
            <form className="contact-form" onSubmit={handleSubmit}>
              <label>
                <span>Name</span>
                <input type="text" placeholder="Your Name" />
              </label>
              <label>
                <span>Email</span>
                <input type="email" placeholder="abc@learnhub.com" />
              </label>
              <label>
                <span>Program interest</span>
                <input type="text" placeholder="Web Development, Data Science, UI/UX" />
              </label>
              <label>
                <span>Message</span>
                <textarea placeholder="Tell us about your learning goals" />
              </label>
              <button type="submit" className="contact-submit">Get a Solution</button>
            </form>
          </section>
        </div>
      </div>
    </main>
  );
}

export default Contact;
