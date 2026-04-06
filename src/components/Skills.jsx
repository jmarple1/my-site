const skills = [
  { name: 'Python', category: 'Languages' },
  { name: 'Java', category: 'Languages' },
  { name: 'C++', category: 'Languages' },
  { name: 'SQL', category: 'Languages' },
  { name: 'React', category: 'Frameworks' },
  { name: 'HTML/CSS', category: 'Web' },
]

export default function Skills() {
  return (
    <section className="section section-alt" id="skills">
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid">
        {skills.map((skill) => (
          <div key={skill.name} className="skill-badge">
            {skill.name}
          </div>
        ))}
      </div>
    </section>
  )
}
