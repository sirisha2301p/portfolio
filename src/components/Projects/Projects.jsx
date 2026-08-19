import "./Projects.css";
import ProjectCard from "./ProjectCard";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Enterprise Java Application Cloud Migration & Modernization",
      type: "Enterprise Project",
      technologies:
        "Java 17, Spring Boot, Azure, SQL Server, Maven, Azure DevOps",

      shortDescription:
        "Migrated enterprise Java applications from on-premises infrastructure to Azure Cloud.",

      description:
        "Migrated multiple enterprise Java applications from on-premises infrastructure to Azure Cloud and upgraded Java from 8 to 17. Implemented CI/CD pipelines, SSO, Azure Blob Storage, HikariCP for database connection pooling, and custom Log4j2 appenders for centralized logging and monitoring."
    },

    {
      id: 2,
      title: "TransConnect – JioBP",
      type: "Enterprise Project",
      technologies:
        "Java, Spring Boot, Microservices, Kafka, OracleDB, Docker, Resilience4j",

      shortDescription:
        "A digital enterprise platform developed to modernize and streamline Jio-BP business operations.",

      description:
        "TransConnect is a digital enterprise platform developed for Jio-BP to modernize and streamline business operations. The legacy PL/SQL monolithic system was re-engineered into a microservices-based architecture. The platform supports financial management, contract management, and customer or carrier onboarding. Kafka is used for asynchronous communication, Resilience4j provides fault tolerance, and Docker is used for containerized deployment."
    },

    {
      id: 3,
      title: "ReachMobile",
      type: "Enterprise Project",
      technologies:
        "Java, Spring Boot, Microservices, AWS, MySQL, Lambda, Step Functions",

      shortDescription:
        "A telecom application managing billing, payments, shipments, and invoicing.",

      description:
        "ReachMobile is a telecom domain application designed to manage end-to-end customer operations including billing, payments, shipments, and invoicing. The application follows a microservices architecture and is deployed on AWS. AWS S3 is used for invoice storage, while Lambda and Step Functions support serverless processing and workflow orchestration."
    },

    {
      id: 4,
      title: "Intermediate and Long-Term Care (iLTC)",
      type: "Enterprise Project",
      technologies:
        "Java 8, Spring Boot, REST APIs, Microservices, MySQL, Tomcat, JUnit, Mockito",

      shortDescription:
        "A healthcare application supporting care providers and government referral systems.",

      description:
        "iLTC is a healthcare domain application that enables care providers to efficiently interface with government referral systems. It provides integrated tools for operational, financial, and clinical management of residents across nursing homes, home care, and retirement villages. The application uses Spring Boot, REST APIs, and Microservices architecture with MySQL for data persistence."
    },

    {
      id: 5,
      title: "Tractor Management System",
      type: "Personal Project",
      technologies: "React, Spring Boot, Java, MySQL",

      shortDescription:
        "A full-stack application for managing tractors, customers, drivers, payments, and expenses.",

      description:
        "A personal full-stack application designed to manage tractors, customers, drivers, work hours, payments, diesel expenses, maintenance, and financial reports."
    }
  ];

  return (
    <section className="projects" id="projects">
      <div className="container">

        <h2>Projects</h2>

        <p className="projects-intro">
          A selection of enterprise applications and personal projects
          developed using modern full-stack technologies.
        </p>

        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;