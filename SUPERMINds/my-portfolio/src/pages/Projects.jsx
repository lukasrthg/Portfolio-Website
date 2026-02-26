import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { pageVariants, pageTransition } from "../animationVariants";


function Projects() {
  const [repos, setRepos] = useState([]);


  useEffect(() => {
    fetch("https://api.github.com/users/lukasrthg/repos")
      .then((res) => res.json())
      .then((data) =>
        setRepos(
          data
            .filter((repo) => !repo.fork && repo.description)
            .sort((a, b) => b.stargazers_count - a.stargazers_count)
        )
      )
      .catch((err) => console.error(err));
  }, []);


  return (
    <motion.div
      className="page"
      variants={pageVariants}
      initial="initial"
      animate="in"
      exit="out"
      transition={pageTransition}
    >
      <div className="page-content">
        <h1>Projects</h1>
        <div className="projects-grid">
          {repos.map((repo, index) => (
            <motion.div
              key={repo.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
              }}
            >
              <ProjectCard
                project={{
                  title: repo.name,
                  description: repo.description,
                  link: repo.html_url,
                  stars: repo.stargazers_count,
                  language: repo.language,
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}


export default Projects;