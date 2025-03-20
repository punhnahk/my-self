import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import ava from "../shared/assets/avatar.jpg";

export default function About() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const skills = [
    {
      category: "Frontend",
      items: ["React", "JavaScript", "TailwindCSS", "HTML/CSS", "Vite"],
    },
    { category: "Backend", items: ["Node.js", "Express", "MongoDB"] },
    { category: "Tools", items: ["Git", "GitHub", "VS Code", "Figma"] },
    { category: "Other", items: ["Responsive Design", "Agile/Scrum"] },
  ];

  return (
    <div className="py-12 px-6 sm:px-12 lg:px-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-extrabold text-center text-blue-400"
        >
          About Me
        </motion.h1>

        {/* Introduction */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-300 text-justify mt-4 max-w-5xl mx-auto leading-relaxed"
        >
          As an IT senior student at the University of Greenwich Vietnam, I have
          expertise in C#, .NET Core, ASP.NET, and ReactJS, with experience in
          building scalable, user-friendly web applications, focusing on
          innovation, performance, and quality. I am committed to applying my
          technical skills during my internship to solve real-world problems,
          continuously improving my knowledge, and contributing to impactful
          software solutions while aligning with current industry standards.
        </motion.p>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
          {/* Profile Section */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="show"
            className="flex flex-col items-center"
          >
            <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-blue-400 shadow-lg">
              <img
                src={ava}
                alt="Profile"
                className="w-full h-full object-cover"
                onError={(e) =>
                  (e.currentTarget.src =
                    "https://v0.dev/placeholder.svg?height=300&width=300")
                }
              />
            </div>
            <h2 className="text-2xl font-bold mt-4">Phung Khanh</h2>
            <p className="text-gray-300">Frontend Developer</p>

            {/* Social Links */}
            <div className="flex space-x-6 mt-4">
              <a
                href="https://github.com/punhnahk"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-gray-300 text-2xl hover:text-blue-400 transition duration-300" />
              </a>
              <a
                href="https://linkedin.com/in/noelisme"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-gray-300 text-2xl hover:text-blue-400 transition duration-300" />
              </a>
            </div>
          </motion.div>

          {/* Skills & Contact */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="show"
            className="space-y-6"
          >
            {/* Skills */}
            <div className="bg-gray-900 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-blue-400">
                Skills
              </h3>
              <div className="grid grid-cols-2 gap-4 text-sm text-gray-300">
                {skills.map(({ category, items }, index) => (
                  <div key={index}>
                    <p className="font-semibold text-white">{category}</p>
                    <ul className="list-disc list-inside">
                      {items.map((item, i) => (
                        <li key={i} className="text-gray-400">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-gray-900 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-blue-400">
                Contact
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <i className="fas fa-envelope text-blue-400"></i>{" "}
                  im.hnahk@gmail.com
                </li>
                <li className="flex items-center gap-2">
                  <i className="fas fa-map-marker-alt text-blue-400"></i> Da
                  Nang, Vietnam
                </li>
                <li className="flex items-center gap-2">
                  <i className="fas fa-phone text-blue-400"></i> +84 879 321 400
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
