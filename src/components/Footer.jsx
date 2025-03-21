import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router";

function Footer() {
  const theme = useSelector((state) => state.toggleTheme);
  return (
    <footer
      className="footer"
      style={{
        background: !theme && "#1f2937",
      }}
    >
      <div className="footer-container">
        <div className="footer-column">
          <img
            className="footer-logo"
            src="/FundHive-logo.png"
            alt="Company Logo"
          />
          <p
            style={{
              color: !theme && "#ccc",
            }}
          >
            Making dreams come true through collective support and innovative
            ideas.
          </p>
        </div>

        <div className="footer-column">
          <h3 style={{ color: !theme && "#fff" }}>Company</h3>
          <ul>
            <li>
              <Link style={{ color: !theme && "#ccc" }} to={"/about"}>
                About
              </Link>
            </li>
            <li>
              <Link style={{ color: !theme && "#ccc" }} to={"/careers"}>
                Careers
              </Link>
            </li>
            <li>
              <Link style={{ color: !theme && "#ccc" }} to={"/press"}>
                Press
              </Link>
            </li>
            <li>
              <Link style={{ color: !theme && "#ccc" }} to={"/impact"}>
                Impact
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h3 style={{ color: !theme && "#fff" }}>Support</h3>
          <ul>
            <li>
              <Link style={{ color: !theme && "#ccc" }} to={"/help-center"}>
                Help Center
              </Link>
            </li>
            <li>
              <Link
                style={{ color: !theme && "#ccc" }}
                to={"/creator-resources"}
              >
                Creator Resources
              </Link>
            </li>
            <li>
              <Link style={{ color: !theme && "#ccc" }} to={"/guidelines"}>
                Guidelines
              </Link>
            </li>
            <li>
              <Link style={{ color: !theme && "#ccc" }} to={"/contact-us"}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h3 style={{ color: !theme && "#fff" }}>Stay Updated</h3>
          <p style={{ color: !theme && "#ccc" }}>
            Subscribe to our newsletter for the latest updates and success
            stories.
          </p>
          <form className="newsletter-form" style={{ color: !theme && "#000" }}>
            <input
              type="email"
              name="newsletter-email"
              id="newsletter-email"
              placeholder="Enter your email"
              required
              aria-required
              autoCapitalize="on"
              autoCorrect="on"
              style={{ color: theme && "#000" }}
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom" style={{ color: !theme && "#ccc" }}>
        <p> 2024 CrowdFunding Platform. All rights reserved.</p>
        <div className="social-links">
          <Link to={"/"}>
            <i
              style={{ color: !theme && "#ccc" }}
              className="fab fa-facebook"
            ></i>
          </Link>
          <Link to={"/"}>
            <i
              style={{ color: !theme && "#ccc" }}
              className="fab fa-instagram"
            ></i>
          </Link>
          <Link to={"/"}>
            <i
              style={{ color: !theme && "#ccc" }}
              className="fab fa-twitter"
            ></i>
          </Link>
          <Link to={"/"}>
            <i
              style={{ color: !theme && "#ccc" }}
              className="fab fa-youtube"
            ></i>
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
