import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

function Navbar() {
  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="navbar">
      {links.map((link, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.1, color: "#facc15" }}
          transition={{ duration: 0.2 }}
        >
          <NavLink
            to={link.path}
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
          >
            {link.name}
          </NavLink>
        </motion.div>
      ))}
    </nav>
  );
}

export default Navbar;