import { motion } from "framer-motion";
import profilePic from "../assets/profile.jpg"; // replace with your own
import { pageVariants, pageTransition } from "../animationVariants";

function Home() {
  return (
    <motion.div
      className="page home-page"
      variants={pageVariants}       // animation states (initial, in, out)
      initial="initial"             // start state
      animate="in"                  // animate to visible
      exit="out"                    // exit animation
      transition={pageTransition}   // timing for animation
    >
      <div className="hero">
        <img src={profilePic} alt="Profile" className="hero-img" />
        <div className="hero-text">
          <h1>Hi, I'm Lukas</h1>
          <p>
            I'm a student developer building modern web apps with React, Vite, and cool animations.
          </p>
          <p>
            Welcome to my portfolio! Scroll down to see my projects and skills.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default Home;