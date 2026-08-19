import "./Skills.css";

function Skills() {
  const skills = [
    "Java",
    "Spring Boot",
    "React",
    "JavaScript",
    "HTML",
    "CSS",
    "SQL",
    "Git",
    "Azure",
    "Docker"
  ];

  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2>Skills</h2>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-card" key={skill}>
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;