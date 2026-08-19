import { useState } from "react";
import "./Projects.css";

function ProjectCard({ project }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      <div className="project-card">

        <span className="project-type">
          {project.type}
        </span>

        <h3>{project.title}</h3>

        <p className="project-technologies">
          {project.technologies}
        </p>

        <p className="project-short-description">
          {project.shortDescription}
        </p>

        <button
          className="project-button"
          onClick={() => setShowDetails(true)}
        >
          View Details
        </button>

      </div>

      {showDetails && (
        <div
          className="modal-overlay"
          onClick={() => setShowDetails(false)}
        >

          <div
            className="project-modal"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="modal-close"
              onClick={() => setShowDetails(false)}
            >
              ×
            </button>

            <span className="project-type">
              {project.type}
            </span>

            <h2>{project.title}</h2>

            <h4>Technologies</h4>

            <p className="project-technologies">
              {project.technologies}
            </p>

            <h4>Project Description</h4>

            <p className="project-description">
              {project.description}
            </p>

          </div>

        </div>
      )}
    </>
  );
}

export default ProjectCard;