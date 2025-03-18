import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router";

const heroBeforeStyle = {
  content: '""',
  position: "absolute",
  inset: 0,
  background: 'url("/head-main-image.jpg") no-repeat center center/cover',
  opacity: 0.3,
};

function Home() {
  const theme = useSelector((state) => state.theme);

  return (
    <main>
      <section
        className="hero"
        style={{
          position: "relative",
          overflow: "hidden",
          paddingTop: "14rem",
          textAlign: "center",
          background: theme ? "#333" : "#1f2937",
        }}
      >
        <div style={heroBeforeStyle}></div>
        <div className="hero-content">
          <h1>
            Fund Your Dreams,
            <br />
            Change The World
          </h1>
          <p>
            Join thousands of creators and innovators who have successfully
            funded their projects. Start your journey today and bring your ideas
            to life.
          </p>
          <div className="hero-buttons">
            <Link to={"/register"} className="start">
              Start a Campaign
            </Link>
            <Link className="explore" to={"/browse-projects"}>
              Explore Projects
            </Link>
          </div>
        </div>
      </section>
      <section className="section-container">
        <div className="stats-grid">
          <div className="stat-item">
            <p style={{ fontSize: "1.5rem", fontWeight: "bold", margin: "0" }}>
              $128M+
            </p>
            <p style={{ fontSize: "1rem", margin: "0" }}>Total Funds Raised</p>
          </div>
          <div className="stat-item">
            <p style={{ fontSize: "1.5rem", fontWeight: "bold", margin: "0" }}>
              15,000+
            </p>
            <p style={{ fontSize: "1rem", margin: "0" }}>Successful Projects</p>
          </div>
          <div className="stat-item">
            <p style={{ fontSize: "1.5rem", fontWeight: "bold", margin: "0" }}>
              2.5M+
            </p>
            <p style={{ fontSize: "1rem", margin: "0" }}>Global Backers</p>
          </div>
          <div className="stat-item">
            <p style={{ fontSize: "1.5rem", fontWeight: "bold", margin: "0" }}>
              94%
            </p>
            <p style={{ fontSize: "1rem", margin: "0" }}>Success Rate</p>
          </div>
        </div>
      </section>
      <section className="featured-section">
        <div className="featured-header">
          <h2>Featured Projects</h2>
          <Link to={"/browse-projects"} className="view-all">
            View All <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
        <div className="featured-grid">
          <div className="project-card">
            <img src="/company-product-1.jpg" alt="Project 1" />
            <div className="card-content">
              <h3>Eco-Friendly Water Bottle</h3>
              <p>Revolutionary design that helps reduce plastic waste</p>
              <div className="progress-bar">
                <div className="progress" style={{ width: "75%" }}></div>
              </div>
              <div className="funding-info">
                <span>$45,000</span>
                <span>75% funded</span>
              </div>
            </div>
          </div>
          <div className="project-card">
            <img src="/company-product-2.jpg" alt="Project 2" />
            <div className="card-content">
              <h3>Smart Home Hub</h3>
              <p>Next generation home automation system</p>
              <div className="progress-bar">
                <div className="progress" style={{ width: "85%" }}></div>
              </div>
              <div className="funding-info">
                <span>$92,000</span>
                <span>85% funded</span>
              </div>
            </div>
          </div>
          <div className="project-card">
            <img src="/company-product-3.jpg" alt="Project 3" />
            <div className="card-content">
              <h3>E-Bike Revolution</h3>
              <p>Sustainable urban transportation solution</p>
              <div className="progress-bar">
                <div className="progress" style={{ width: "65%" }}></div>
              </div>
              <div className="funding-info">
                <span>$128,000</span>
                <span>65% funded</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="how-it-works-container">
        <div className="section-header">
          <h2>How It Works</h2>
          <p>Start your campaign in three simple steps</p>
        </div>
        <div className="grid-container">
          <div className="step">
            <div className="icon-container">
              <img src="/Success Stories-1.jpg" alt="Sarah Johnson" />
            </div>
            <h3>Create Your Campaign</h3>
            <p>
              Share your story, set your funding goal, and create compelling
              rewards
            </p>
          </div>
          <div className="step">
            <div className="icon-container">
              <img src="/Success Stories-2.jpg" alt="Michael Chen" />
            </div>
            <h3>Share & Promote</h3>
            <p>Spread the word through social media and your network</p>
          </div>
          <div className="step">
            <div className="icon-container">
              <img src="/Success Stories-3.jpg" alt="Emma Rodriguez" />
            </div>
            <h3>Track Progress</h3>
            <p>Monitor your campaign's success and engage with backers</p>
          </div>
        </div>
      </section>
      <section className="discover-projects-container">
        <section
          className="campaign-categories"
          style={{ background: !theme && "#1f2937" }}
        >
          <div className="text-center">
            <h2 style={{ color: !theme && "#fff" }}>Campaign Categories</h2>
            <p style={{ color: !theme && "#ccc" }}>
              Discover projects across various industries
            </p>
          </div>
          <div className="grid">
            <div className="category-box">
              <i className="fas fa-laptop"></i>
              <h3>Technology</h3>
              <p>250+ Projects</p>
            </div>
            <div className="category-box">
              <i className="fas fa-palette"></i>
              <h3>Art & Design</h3>
              <p>180+ Projects</p>
            </div>
            <div className="category-box">
              <i className="fas fa-leaf"></i>
              <h3>Sustainability</h3>
              <p>150+ Projects</p>
            </div>
            <div className="category-box">
              <i className="fas fa-gamepad"></i>
              <h3>Games</h3>
              <p>200+ Projects</p>
            </div>
          </div>
        </section>

        <section className="success-stories">
          <div className="text-center">
            <h2>Success Stories</h2>
            <p>Hear from our successful campaign creators</p>
          </div>

          <div className="grid success-stories-box">
            <div
              className="story-box"
              style={{
                background: !theme && "#1f2937",
                color: !theme && "#fff",
              }}
            >
              <div className="story-header">
                <img src="/Success Stories-1.jpg" alt="Sarah Johnson" />
                <div>
                  <h3>Sarah Johnson</h3>
                  <p
                    style={{
                      color: !theme && "#ccc",
                    }}
                  >
                    Eco-Friendly Products
                  </p>
                </div>
              </div>
              <p
                className="story-header-text"
                style={{
                  color: !theme && "#fff",
                }}
              >
                "The platform made it incredibly easy to share our vision and
                connect with like-minded supporters. We exceeded our funding
                goal by 200%!"
              </p>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
            </div>

            <div
              className="story-box"
              style={{
                background: !theme && "#1f2937",
                color: !theme && "#fff",
              }}
            >
              <div className="story-header">
                <img src="/Success Stories-2.jpg" alt="Michael Chen" />
                <div>
                  <h3>Michael Chen</h3>
                  <p
                    style={{
                      color: !theme && "#ccc",
                    }}
                  >
                    Tech Innovation
                  </p>
                </div>
              </div>
              <p
                className="story-header-text"
                style={{
                  color: !theme && "#fff",
                }}
              >
                "From concept to launch, the support we received was incredible.
                Our community of backers helped us refine and improve our
                product."
              </p>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
            </div>

            <div
              className="story-box"
              style={{
                background: !theme && "#1f2937",
                color: !theme && "#fff",
              }}
            >
              <div className="story-header">
                <img src="/Success Stories-3.jpg" alt="Emma Rodriguez" />
                <div>
                  <h3>Emma Rodriguez</h3>
                  <p
                    style={{
                      color: !theme && "#ccc",
                    }}
                  >
                    Art & Design
                  </p>
                </div>
              </div>
              <p
                className="story-header-text"
                style={{
                  color: !theme && "#fff",
                }}
              >
                "As an artist, I was amazed by how the platform helped me reach
                art enthusiasts globally. The exposure was beyond my
                expectations."
              </p>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
            </div>
          </div>
        </section>
      </section>
      <section className="plans-section">
        <section className="pricing-plans-container">
          <div className="pricing-header">
            <h2>Pricing Plans</h2>
            <p>Choose the perfect plan for your campaign</p>
          </div>
          <div className="pricing-grid">
            <div className="pricing-card">
              <h3>Basic</h3>
              <div className="price">Free</div>
              <ul>
                <li>
                  <i className="fas fa-check"></i> Basic campaign tools
                </li>
                <li>
                  <i className="fas fa-check"></i> Community support
                </li>
                <li>
                  <i className="fas fa-check"></i> Standard analytics
                </li>
              </ul>
              <a href="#" className="pricing-button">
                Get Started
              </a>
            </div>
            <div className="pricing-card featured">
              <h3>Pro</h3>
              <div className="price">
                $29 <span>/month</span>
              </div>
              <ul>
                <li>
                  <i className="fas fa-check"></i> Advanced campaign tools
                </li>
                <li>
                  <i className="fas fa-check"></i> Priority support
                </li>
                <li>
                  <i className="fas fa-check"></i> Advanced analytics
                </li>
              </ul>
              <a href="#" className="pricing-button">
                Get Started
              </a>
            </div>
            <div className="pricing-card">
              <h3>Enterprise</h3>
              <div className="price">
                $99 <span>/month</span>
              </div>
              <ul>
                <li>
                  <i className="fas fa-check"></i> Custom campaign tools
                </li>
                <li>
                  <i className="fas fa-check"></i> 24/7 dedicated support
                </li>
                <li>
                  <i className="fas fa-check"></i> Enterprise analytics
                </li>
              </ul>
              <a href="#" className="pricing-button">
                Contact Sales
              </a>
            </div>
          </div>
        </section>
        <section
          className="faq-section"
          style={{
            background: !theme && "#1f2937",
          }}
        >
          <div className="faq-container">
            <div className="faq-header">
              <h2
                style={{
                  color: !theme && "#fff",
                }}
              >
                Frequently Asked Questions
              </h2>
              <p
                style={{
                  color: !theme && "#ccc",
                }}
              >
                Find answers to common questions about our platform
              </p>
            </div>
            <div className="faq-list">
              <details className="faq-item">
                <summary>How does crowdfunding work?</summary>
                <p>
                  Crowdfunding allows creators to raise funds for their projects
                  through small contributions from many people. You set a goal,
                  share your story, and offer rewards to backers.
                </p>
              </details>
              <details className="faq-item">
                <summary>What fees do you charge?</summary>
                <p>
                  We charge a 5% platform fee on successfully funded projects,
                  plus payment processing fees. Failed projects incur no fees.
                </p>
              </details>
              <details className="faq-item">
                <summary>How long can my campaign run?</summary>
                <p>
                  Campaigns can run from 1 to 60 days. We recommend 30 days as
                  the optimal campaign duration.
                </p>
              </details>
              <details className="faq-item">
                <summary>What happens if I don&#39;t reach my goal?</summary>
                <p>
                  We use an all-or-nothing funding model. If you don&#39;t reach
                  your goal, all backers are refunded and no fees are charged.
                </p>
              </details>
            </div>
          </div>
        </section>
        <section className="phone-main-section">
          <section className="mobile-app-section" id="mobile-app">
            <div className="mobile-app-container">
              {/* <!-- Content --> */}
              <div className="mobile-app-content">
                <h2>Download Our Mobile App</h2>
                <p>
                  Manage your campaigns on the go with our powerful mobile
                  application. Stay connected and in control anytime, anywhere.
                </p>

                {/* <!-- App Buttons --> */}
                <div className="mobile-app-buttons">
                  <Link to={"/"} className="app-store-button">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                      alt="App Store"
                    />
                  </Link>
                  <Link to={"/"} className="play-store-button">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                      alt="Play Store"
                    />
                  </Link>
                </div>

                {/* <!-- Features --> */}
                <div className="mobile-app-features">
                  <h3>Key Features:</h3>
                  <ul>
                    <li>
                      <i className="fas fa-check-circle"></i> Real-time campaign
                      analytics
                    </li>
                    <li>
                      <i className="fas fa-check-circle"></i> Instant
                      notifications
                    </li>
                    <li>
                      <i className="fas fa-check-circle"></i> Secure payment
                      processing
                    </li>
                    <li>
                      <i className="fas fa-check-circle"></i> Direct messaging
                      with backers
                    </li>
                  </ul>
                </div>
              </div>

              {/* <!-- Image --> */}
              <div className="mobile-app-image">
                <img
                  src="https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Mobile App"
                />
              </div>
            </div>
          </section>
          <section
            className="platform-stats-section"
            style={{
              background: !theme && "#1f2937",
              color: !theme && "#fff",
            }}
            id="platform-stats"
          >
            <div className="stats-header">
              <h2
                style={{
                  color: !theme && "#fff",
                }}
              >
                Platform Statistics
              </h2>
              <p
                style={{
                  color: !theme && "#ccc",
                }}
              >
                Our growth and impact in numbers
              </p>
            </div>
            <div className="stats-container">
              <div className="stats-box">
                <div className="stats-number">180+</div>
                <p>Countries Reached</p>
              </div>
              <div className="stats-box">
                <div className="stats-number">$500M+</div>
                <p>Total Transactions</p>
              </div>
              <div className="stats-box">
                <div className="stats-number">5M+</div>
                <p>Registered Users</p>
              </div>
              <div className="stats-box">
                <div className="stats-number">98%</div>
                <p>User Satisfaction</p>
              </div>
            </div>
          </section>
          <section
            className="video-testimonials-section"
            id="testimonials-video"
          >
            <div className="testimonials-header">
              <h2>Video Testimonials</h2>
              <p>Watch real stories from our successful creators</p>
            </div>
            <div className="testimonials-container">
              <div className="testimonial-box">
                <div className="video-wrapper">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/9No-FiEInLA"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="testimonial-info">
                  <h3>Tech Startup Success</h3>
                  <p>How we raised $500K in 30 days</p>
                </div>
              </div>

              <div className="testimonial-box">
                <div className="video-wrapper">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/LXb3EKWsInQ"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="testimonial-info">
                  <h3>Art Project Journey</h3>
                  <p>From concept to global recognition</p>
                </div>
              </div>

              <div className="testimonial-box">
                <div className="video-wrapper">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/5Peo-ivmupE"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="testimonial-info">
                  <h3>Community Impact</h3>
                  <p>Making a difference together</p>
                </div>
              </div>
            </div>
          </section>
          <section className="news-section">
            <div className="news-header">
              <h2>Latest News & Updates</h2>
              <p>Stay informed about our platform and community</p>
            </div>
            <div className="news-container">
              {/* <!-- News Card 1 --> */}
              <div className="news-card">
                <img
                  src="/Latest News & Updates-1.jpg"
                  alt="New Features"
                  className="news-image"
                />
                <div className="news-content">
                  <h3>New Platform Features Released</h3>
                  <p>
                    Explore our latest tools and improvements for campaign
                    creators.
                  </p>
                  <a href="#" className="read-more">
                    Read More <span>&rarr;</span>
                  </a>
                </div>
              </div>

              {/* <!-- News Card 2 --> */}
              <div className="news-card">
                <img
                  src="/Latest News & Updates-2.jpg"
                  alt="Success Story"
                  className="news-image"
                />
                <div className="news-content">
                  <h3>Success Story: $1M Milestone</h3>
                  <p>
                    Learn how our top creator reached this amazing achievement.
                  </p>
                  <a href="#" className="read-more">
                    Read More <span>&rarr;</span>
                  </a>
                </div>
              </div>

              {/* <!-- News Card 3 --> */}
              <div className="news-card">
                <img
                  src="/Latest News & Updates-3.jpg"
                  alt="Workshop"
                  className="news-image"
                />
                <div className="news-content">
                  <h3>Upcoming Creator Workshop</h3>
                  <p>
                    Join our free online session to maximize your campaign
                    success.
                  </p>
                  <a href="#" className="read-more">
                    Read More <span>&rarr;</span>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </section>
        <section
          className="cta-section"
          style={{
            background: !theme && "#1f2937",
          }}
        >
          <div className="cta-container">
            <h2
              style={{
                color: !theme && "#fff",
              }}
            >
              Ready to bring your idea to life?
            </h2>
            <p
              style={{
                color: !theme && "#ccc",
              }}
            >
              Join thousands of successful creators who have turned their dreams
              into reality.
            </p>
            <div className="cta-buttons">
              <Link to={"/register"} className="cta-primary">
                Start Your Campaign
              </Link>
              <Link
                to={"/"}
                style={{
                  color: !theme && "#fff",
                }}
                className="cta-secondary"
              >
                Learn more →
              </Link>
            </div>
          </div>
        </section>
        <section className="platform-section">
          <div className="platform-container">
            {/* <!-- Platform Content --> */}
            <div className="platform-content">
              <h2>Why Choose Our Platform?</h2>
              <div className="platform-features">
                {/* <!-- Feature 1 --> */}
                <div className="feature">
                  <div className="feature-icon">
                    <i className="fas fa-shield-alt"></i>
                  </div>
                  <div className="feature-text">
                    <h3>Secure & Transparent</h3>
                    <p>All transactions are protected and fully transparent.</p>
                  </div>
                </div>

                {/* <!-- Feature 2 --> */}
                <div className="feature">
                  <div className="feature-icon">
                    <i className="fas fa-users"></i>
                  </div>
                  <div className="feature-text">
                    <h3>Global Community</h3>
                    <p>Connect with backers worldwide.</p>
                  </div>
                </div>

                {/* <!-- Feature 3 --> */}
                <div className="feature">
                  <div className="feature-icon">
                    <i className="fas fa-headset"></i>
                  </div>
                  <div className="feature-text">
                    <h3>24/7 Support</h3>
                    <p>Expert assistance whenever you need it.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Platform Image --> */}
            <div className="platform-image">
              <img
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Platform Benefits"
              />
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}

export default Home;
