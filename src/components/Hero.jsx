import headshot from '../assets/1756683642280.jpg'

export default function Hero() {
  return (
    <section className="hero" id="about">
      <div className="hero-inner">
        <img src={headshot} alt="John Marple" className="hero-photo" />
        <div className="hero-text">
          <h1><span className="accent">John Marple</span></h1>
          <p className="hero-subtitle">Computer Science Student at Miami University</p>
          <p className="hero-location">Columbus, Ohio</p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-outline">Contact Me</a>
          </div>
        </div>
        <div className="hero-divider" />
        <div className="hero-about">
          <p>
            I'm a Computer Science student at Miami University with a passion for building
            software that solves real problems. I have hands-on experience with a range of
            languages and technologies, and I'm always looking to learn and grow as a developer.
          </p>
          <p>
            Originally from Columbus, Ohio, I enjoy tackling challenging projects and
            collaborating with others to create meaningful applications.
          </p>
        </div>
      </div>
    </section>
  )
}
