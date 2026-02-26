import { motion } from "framer-motion";
import jsLogo from "../assets/js.png";
import reactLogo from "../assets/react.png";
import cssLogo from "../assets/css.png";
import { pageVariants, pageTransition } from "../animationVariants";


const skills = [
  { name: "JavaScript", img: jsLogo },
  { name: "React", img: reactLogo },
  { name: "CSS", img: cssLogo },
];


function About() {
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
        <h1>About Me</h1>
        <p>I'm a student developer learning modern web development with React.</p>


        <h3>My Skills</h3>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="skill-card"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ false: true, amount: 0.2 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <img src={skill.img} alt={skill.name} className="skill-img" />
              <p>{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}


export default About;