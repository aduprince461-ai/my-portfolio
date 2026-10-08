import "./App.css";

function App() {
  return (
    <div className="portfolio">

      {/* Navigation */}
      <nav className="navbar">
        <div className="logo">
  <img src="/Images/Prince-Adu-Logo.png" alt="Prince Adu logo" />
  
</div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-text">
          <p className="small-title">GRAPHIC DESIGNER</p>

          <h1>
            I create designs that tell a story.
            </h1>
          
          

          <p className="hero-description">
            I create flyers, posters, logos and social media designs
            that help ideas stand out.
          </p>

          <a href="#projects" className="button">
            View My Work
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section about-section">
  <p className="section-label">ABOUT ME</p>

  <div className="about-content">

    <div className="about-photo">
      <img
        src="/Images/Prince-Adu.jpg"
        alt="Prince Adu"
      />
    </div>

    <div className="about-text">

      <img
        src="/Images/Prince-Adu-Logo.png"
        alt="Prince Adu logo"
        className="about-logo"
      />

      <h2>Creative. Curious. Always Learning.</h2>

      <p>
        I am an aspiring graphic artist and an agriculture student
        with a passion for creativity, learning and practical skills.
        I am developing my skills in graphic design while also
        learning web development and building projects with React.
        My background in agriculture and proficiency in welding have
        helped me develop patience, problem-solving skills and
        attention to detail.
      </p>

    </div>

  </div>
</section>

      {/* Services Section */}
      <section id="services" className="section">
        <p className="section-label">WHAT I DO</p>

        <h2>My Services</h2>

        <div className="cards">

          <div className="card">
            <h3>Flyer Design</h3>
            <p>
              Attractive flyers for events, businesses, organizations
              and social media.
            </p>
          </div>

          <div className="card">
            <h3>Poster Design</h3>
            <p>
              Creative posters designed to communicate messages clearly.
            </p>
          </div>

          <div className="card">
            <h3>Social Media Design</h3>
            <p>
              Visual content created for social media platforms and
              online promotion.
            </p>
          </div>

        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <p className="section-label">MY WORK</p>

        <h2>Featured Projects</h2>

        <div className="projects">

          <div className="project">
            <div className="project-image">
              <a
  href="/Images/Anobee.png"
  target="_blank"
  rel="noopener noreferrer"
>
  <img src="/Images/Anobee.png" alt="Anobee design" />
</a>
            </div>

            <h3>Anobee Wedding Design</h3>

            <p>
             A custom wedding design created for a client to celebrate and visually capture a special milestone.
            </p>
          </div>

          <div className="project">
            <div className="project-image">
              <a href="/Images/Anobee.png">
  <img
    src="/Images/Hulede-flyer.png"
    alt="Hulede Foundation flyer"
  />
</a>
            </div>
<h3>Hulede Foundation — Back to School Campaign</h3>
           
            <p>
             A community-focused campaign design created for Hulede Foundation to support their back-to-school initiative and communicate their commitment to giving back.
            </p>
          </div>

          <div className="project">
            <div className="project-image">
              <a
  href="/Images/Our-Time.png"
  target="_blank"
  rel="noopener noreferrer"
>
  <img
    src="/Images/Our-Time.png"
    alt="Our Time design"
  />
</a>
            </div>

            <h3>Our Time Foods — Business Promotional Design</h3>

            <p>
             A promotional design created for a food business to showcase what they offer, provide location details, and attract customers.
            </p>
          </div>
<div className="project">
  <div className="project-image">
    <a
  href="/Images/Phirocam-KsTU.png"
  target="_blank"
  rel="noopener noreferrer"
>
  <img
    src="/Images/Phirocam-KsTU.png"
    alt="Philadelphia Movement design"
  />
</a>
  </div>

  <h3>Philadelphia Movement — KSTU</h3>

  <p>
    A creative visual design crafted to represent the energy, identity, and message of the Philadelphia movement at KSTU.
  </p>
</div>
        </div>
      </section>

      {/* Web Projects */}
      <section className="web-section">
        <p className="section-label">COMING SOON</p>

        <h2>Web Projects</h2>

        <p>
          As I continue learning web development, this section will
          showcase websites and applications that I build.
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
  <p className="section-label">CONTACT</p>

  <h2>Let's work together.</h2>

  <p>
    Have a design project in mind? I'd love to hear about it.
    Let's create something meaningful together.
  </p>

  <a href="mailto:aduprince461@gmail.com" className="button">
    Send Me an Email
  </a>
</section>

      {/* Footer */}
      <footer>
        <p>© 2026 Prince Adu. All rights reserved.</p>
      </footer>

    </div>
  );
}

export default App;