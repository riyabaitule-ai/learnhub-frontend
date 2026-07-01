function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Your message has been sent successfully. We will get back to you soon.");
  };

  return (
    <main className="contact-page">
      <div className="contact-shell">
        <section className="contact-card contact-info">
          <p className="eyebrow">Get in Touch</p>
          <h1>We are here to support your learning goals.</h1>
          <p className="contact-text">
            Share your ideas, ask about courses, or talk to us about your career path.
            LearnHub is ready to help you take the next step.
          </p>

          <div className="contact-details">
            <div className="detail-row">
              <span className="detail-icon">✉</span>
              <div>
                <p>hello@learnhub.com</p>
                <small>Email support</small>
              </div>
            </div>
            <div className="detail-row">
              <span className="detail-icon">📍</span>
              <div>
                <p>32 Learning Lane, Mumbai, India</p>
                <small>Visit our office</small>
              </div>
            </div>
            <div className="detail-row">
              <span className="detail-icon">📞</span>
              <div>
                <p>+91 91234 56789</p>
                <small>Call us anytime</small>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-card contact-form-card">
          <form className="contact-form" onSubmit={handleSubmit}>
            <label>
              <span>Your Name*</span>
              <input type="text" name="name" placeholder="Your Name" required />
            </label>
            <label>
              <span>Email Address*</span>
              <input type="email" name="email" placeholder="Email Address" required />
            </label>
            <label>
              <span>Your Phone*</span>
              <input type="tel" name="phone" placeholder="Phone Number" required />
            </label>
            <label>
              <span>Your Message</span>
              <textarea name="message" placeholder="Write your message..." rows="4" required></textarea>
            </label>
            <button type="submit" className="contact-submit">Send Message</button>
          </form>
        </section>
      </div>
    </main>
  );
}

export default Contact;
