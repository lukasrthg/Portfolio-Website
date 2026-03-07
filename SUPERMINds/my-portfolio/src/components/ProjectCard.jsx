function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <h3>{project.title}</h3>
      <p>{project.description}</p>


      {project.language && <p>🧠 {project.language}</p>}
      {project.stars !== undefined && <p>⭐ {project.stars}</p>}


      <a href={project.link} target="_blank" rel="noopener noreferrer">
        View on GitHub
      </a>
    </div>
  );
}


export default ProjectCard;