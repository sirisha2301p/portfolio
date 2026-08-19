import "./Experience.css";

function Experience() {
  const experiences = [
    {
      id: 1,
      company: "Tata Technologies",
      role: "Java Full Stack Developer",
      duration: "2026 - Present",
      description:
        "Working on enterprise Java applications using Java, Spring Boot, React, Azure, SQL Server, and Microservices."
    },
    {
      id: 2,
      company: "Personal Projects",
      role: "Java Full Stack Developer",
      duration: "2022 - Present",
      description:
        "Developed Employee Management System, Tractor Management System, and Portfolio Website using React and Spring Boot."
    }
  ];

  return (
    <section className="experience" id="experience">
      <div className="container">
        <h2>Experience</h2>

        <div className="experience-list">
          {experiences.map((exp) => (
            <div className="experience-card" key={exp.id}>
              <h3>{exp.role}</h3>
              <h4>{exp.company}</h4>
              <span>{exp.duration}</span>

              <p>{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;