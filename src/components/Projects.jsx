const projects = [
  {
    title: 'Project One',
    description: 'Add a description of your project here. What does it do? What problem does it solve?',
    tech: ['React', 'Python'],
    github: '#',
    live: '#',
  },
  {
    title: 'Project Two',
    description: 'Add a description of your project here. What does it do? What problem does it solve?',
    tech: ['Java', 'SQL'],
    github: '#',
    live: null,
  },
]

export default function Projects() {
  return (
    <section className="section" id="projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.title} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-tech">
              {project.tech.map((t) => (
                <span key={t} className="tech-tag">{t}</span>
              ))}
            </div>
            <div className="project-links">
              <a href={project.github} className="btn btn-outline btn-sm">GitHub</a>
              {project.live && (
                <a href={project.live} className="btn btn-primary btn-sm">Live Demo</a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
