import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'

export default function Contact() {
  return (
    <section className="section section-alt" id="contact">
      <h2 className="section-title">Get In Touch</h2>
      <p className="contact-subtitle">
        I'm currently looking for internship and job opportunities. Feel free to reach out!
      </p>
      <div className="contact-links">
        <a
          href="https://linkedin.com/in/john-marple/"
          target="_blank"
          rel="noreferrer"
          className="contact-icon-btn"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://mail.google.com/mail/?view=cm&to=marpleja@miamioh.edu"
          target="_blank"
          rel="noreferrer"
          className="contact-icon-btn"
          aria-label="Email Me"
        >
          <SiGmail />
        </a>
        <a
          href="https://github.com/jmarple1"
          target="_blank"
          rel="noreferrer"
          className="contact-icon-btn"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
      </div>
    </section>
  )
}
