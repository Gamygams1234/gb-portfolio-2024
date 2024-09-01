import React, { useState, useEffect } from "react";
import { data } from "../data.js";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [selectedTag, setSelectedTag] = useState("All");
  const [displayLimit, setDisplayLimit] = useState(3);

  useEffect(() => {
    // Fetch your JSON data (you could replace this with an API call if needed)

    // Sort the projects by rating in descending order
    const sortedProjects = data.sort((a, b) => b.rating - a.rating);
    setProjects(sortedProjects);
  }, []);

  const filterProjects = (tag) => {
    setSelectedTag(tag);
    setDisplayLimit(3); // Reset the display limit when the filter changes
  };

  const filteredProjects =
    selectedTag === "All"
      ? projects
      : projects.filter((project) =>
          project.tags
            .map((item) => item.toLowerCase())
            .includes(selectedTag.toLowerCase())
        );

  const handleShowMore = () => {
    setDisplayLimit((prevLimit) => prevLimit + 3);
  };

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <div className="projects-header">
          <h3 className="text-black">Projects</h3>
          <h2 className="text-black">What I have made?</h2>
          <div className="tags">
            <button
              onClick={() => filterProjects("All")}
              className={selectedTag === "All" ? "active" : ""}
            >
              All
            </button>
            <button
              onClick={() => filterProjects("Components")}
              className={selectedTag === "Components" ? "active" : ""}
            >
              Components
            </button>
            <button
              onClick={() => filterProjects("Api")}
              className={selectedTag === "Api" ? "active" : ""}
            >
              API
            </button>
            <button
              onClick={() => filterProjects("Assistance")}
              className={selectedTag === "Assistance" ? "active" : ""}
            >
              Assistance
            </button>
            <button
              onClick={() => filterProjects("Landing Page")}
              className={selectedTag === "Landing Page" ? "active" : ""}
            >
              Landing Page
            </button>
            <button
              onClick={() => filterProjects("Game")}
              className={selectedTag === "Game" ? "active" : ""}
            >
              Game
            </button>
          </div>
        </div>
        <div className="projects-grid">
          {filteredProjects.slice(0, displayLimit).map((project) => (
            <div key={project.id} className="project-card">
              <img src={project.image} alt={project.name} />
              <div className="project-tags">
                {project.tags.map((tag, index) => (
                  <span key={index} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="project-details">
                <h3 className="text-black">{project.name}</h3>
                <div className="project-links">
                  <a
                    href={project.liveView}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live View
                  </a>
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Github
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        {filteredProjects.length > displayLimit && (
          <div className="show-more-container">
            <button onClick={handleShowMore} className="show-more-button">
              Show More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
