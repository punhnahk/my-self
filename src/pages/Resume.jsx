// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import pdf from "../shared/assets/Intern_CV_Phung Huu Minh Khanh.pdf";

export default function Resume() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const education = [
    {
      degree: "Upper Second Honour | Information Technology",
      school: "University of Greenwich",
      year: "2021 - 2026",
    },
  ];

  const projects = [
    {
      title: "Noel Techshop - Electronics Sales Website",
      company: "University of Greenwich",
      year: "Jan 2024 - Dec 2024",
      technologies: "ReactJS, Tailwind CSS, NodeJS, ExpressJS, MongoDB",
      github: "https://github.com/punhnahk/final",
    },
    {
      title: "Student Contribution Website",
      company: "University of Greenwich",
      year: "Jan 2024 - Apr 2024",
      technologies: ".NET Framework, C#, JavaScript, Bootstrap",
      github:
        "https://github.com/yourgithub/student-contributionhttps://github.com/COMP1640-Greenwich/Enterprise-Web-Development_1640",
    },
    {
      title: "Book Store Website",
      company: "University of Greenwich",
      year: "Oct 2023 - Dec 2023",
      technologies: ".NET Framework, C#, JavaScript, Bootstrap",
      github: "https://github.com/punhnahk/Selling-Book-MVC",
    },
  ];

  const experience = [
    {
      title: "Intern Developer",
      company: "Devplus Company",
      year: "Present",
      technologies: "Full-stack Development, React, NodeJS, Express, MongoDB",
    },
  ];

  const skills = [
    "JavaScript",
    "React",
    "TailwindCSS",
    "NodeJS",
    "ExpressJS",
    "MongoDB",
    ".NET",
    "C#",
    "UI/UX Design",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white px-6 py-12 pt-20">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="show"
          className="flex justify-between items-center mb-8"
        >
          <h1 className="text-3xl font-extrabold text-blue-400">Resume</h1>
          <a
            href={pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2"
          >
            Download CV
          </a>
        </motion.div>

        {/* Education */}
        <motion.section
          variants={fadeInUp}
          initial="hidden"
          animate="show"
          className="mb-8"
        >
          <h2 className="text-xl font-bold text-yellow-400">Education</h2>
          {education.map((edu, index) => (
            <div
              key={index}
              className="mt-2 p-4 bg-gray-800 rounded-lg shadow-md"
            >
              <h3 className="text-lg font-semibold">{edu.degree}</h3>
              <p className="text-sm text-gray-400">
                {edu.school} | {edu.year}
              </p>
            </div>
          ))}
        </motion.section>

        {/* Projects */}
        <motion.section
          variants={fadeInUp}
          initial="hidden"
          animate="show"
          className="mb-8"
        >
          <h2 className="text-xl font-bold text-green-400">Projects</h2>
          {projects.map((project, index) => (
            <div
              key={index}
              className="mt-2 p-4 bg-gray-800 rounded-lg shadow-md relative"
            >
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="text-sm text-gray-400">
                {project.company} | {project.year}
              </p>
              <p className="text-xs text-blue-300 mt-1">
                {project.technologies}
              </p>
              <div className="flex justify-between">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-2 right-2 text-blue-400 text-sm underline"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          ))}
        </motion.section>

        {/* Experience */}
        <motion.section
          variants={fadeInUp}
          initial="hidden"
          animate="show"
          className="mb-8"
        >
          <h2 className="text-xl font-bold text-orange-400">Experience</h2>
          {experience.map((exp, index) => (
            <div
              key={index}
              className="mt-2 p-4 bg-gray-800 rounded-lg shadow-md"
            >
              <h3 className="text-lg font-semibold">{exp.title}</h3>
              <p className="text-sm text-gray-400">
                {exp.company} | {exp.year}
              </p>
              <p className="text-xs text-blue-300 mt-1">{exp.technologies}</p>
            </div>
          ))}
        </motion.section>

        {/* Skills */}
        <motion.section
          variants={fadeInUp}
          initial="hidden"
          animate="show"
          className="mb-8"
        >
          <h2 className="text-xl font-bold text-pink-400">Skills</h2>
          <div className="flex flex-wrap gap-2 mt-3">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="bg-gray-700 text-sm px-3 py-1 rounded-full shadow-md"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.section>

        {/* Contact */}
        <div className="text-center mt-8">
          <p className="text-gray-400 mb-4">
            Interested in working together? Let's talk!
          </p>
          <Link
            to="/contact"
            className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg text-white shadow-lg"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  );
}
