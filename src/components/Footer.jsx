import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <img
            className="footer-logo"
            src="/FundHive-logo.png"
            alt="Company Logo"
          />
          <p>
            Making dreams come true through collective support and innovative
            ideas.
          </p>
        </div>

        <div className="footer-column">
          <h3>Company</h3>
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Press</a>
            </li>
            <li>
              <a href="#">Impact</a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Support</h3>
          <ul>
            <li>
              <a href="#">Help Center</a>
            </li>
            <li>
              <a href="#">Creator Resources</a>
            </li>
            <li>
              <a href="#">Guidelines</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Stay Updated</h3>
          <p>
            Subscribe to our newsletter for the latest updates and success
            stories.
          </p>
          <form className="newsletter-form">
            <input
              type="email"
              name="newsletter-email"
              id="newsletter-email"
              placeholder="Enter your email"
              required
              aria-required
              autoCapitalize="on"
              autoCorrect="on"
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 CrowdFunding Platform. All rights reserved.</p>
        <div className="social-links">
          <a href="#">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
