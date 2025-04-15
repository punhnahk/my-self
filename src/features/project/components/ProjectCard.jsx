// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useState } from "react";

const projectImages = {
  chuctet2025:
    "https://gomsuhcm.com/wp-content/uploads/2023/11/background-thiep-tet-13.jpg",
  noel: "https://cdn-media.sforum.vn/storage/app/media/ctv_seo10/background-noel-48.jpg",
  final:
    "https://www.shutterstock.com/image-vector/super-sale-header-banner-design-260nw-1663164736.jpg",
  DevPlus_QuizWebsiteAI: "/quiz.png",
  ngocanh: "../../../../public/ngocanh.png",
};

export default function ProjectCard({ project }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      whileHover={{ y: -5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="bg-gradient-to-b from-gray-900 to-gray-800 rounded-2xl overflow-hidden shadow-md border border-gray-700 h-full flex flex-col transition-all hover:shadow-xl"
    >
      {/* Project Image */}
      <div className="relative">
        <img
          src={projectImages[project.name]}
          alt={project.name}
          className="w-full h-44 object-cover rounded-t-2xl"
          onError={(e) => {
            e.currentTarget.src =
              "https://v0.dev/placeholder.svg?height=200&width=400";
          }}
        />
        <div
          className={`absolute inset-0 bg-black opacity-60 transition-opacity ${
            isHovered ? "opacity-80" : "opacity-60"
          }`}
        ></div>
        <div className="absolute bottom-2 left-3 flex items-center gap-2">
          <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-lg shadow">
            {project.language || "JavaScript"}
          </span>
          <div className="flex items-center text-gray-300 text-xs space-x-3">
            <div className="flex items-center">⭐ {project.stars || 0}</div>
            <div className="flex items-center">🔀 {project.forks || 0}</div>
          </div>
        </div>
      </div>

      {/* Project Details */}
      <div className="p-5 flex-grow">
        <h3 className="text-lg font-semibold text-white">{project.name}</h3>
        <p className="text-gray-400 text-sm mt-1 line-clamp-3">
          {project.description || "No description available."}
        </p>

        {/* Topics */}
        <div className="flex flex-wrap gap-2 mt-3">
          {project.topics?.slice(0, 3).map((topic, i) => (
            <span
              key={i}
              className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded-md"
            >
              {topic}
            </span>
          ))}
        </div>
      </div>

      {/* Buttons */}
      <div className="px-5 pb-5">
        <div className="flex space-x-2">
          <a
            href={project.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-gray-700 hover:bg-gray-600 text-center py-2 rounded-lg transition text-sm text-white"
          >
            View Repo
          </a>
          {project.homepage && (
            <a
              href={project.homepage}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-blue-600 hover:bg-blue-500 text-center py-2 rounded-lg transition text-sm text-white"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
