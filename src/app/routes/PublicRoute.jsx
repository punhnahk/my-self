import { Route } from "react-router-dom";

// Importing pages
import About from "@../../pages/About.jsx";
import Resume from "../../pages//Resume.jsx";
import Contact from "../../pages/Contact.jsx";
import Home from "../../pages/Home.jsx";
import Projects from "../../pages/Project.jsx";

const PublicRoutes = (
  <>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/resume" element={<Resume />} />
  </>
);

export default PublicRoutes;
