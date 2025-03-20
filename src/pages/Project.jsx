// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FaChartPie, FaProjectDiagram } from "react-icons/fa";
import LanguageGraph from "../features/home/components/LanguageGraph";
import CommitCalendar from "../features/project/components/CommitCalendar";
import GitHubStats from "../features/project/components/GitHubStatus";
import ProjectCard from "../features/project/components/ProjectCard";
import { fetchAllRepositories } from "../shared/api/github";

export const fetchOrg = async (orgs) => {
  const res = await fetch(`https://api.github.com/orgs/${orgs}/repos`);
  const repositories = await res.json();

  return repositories; // Return the array directly instead of wrapping in { props: { repositories } }
};

export default function Projects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("projects");

  const selectedRepos = [
    "DevPlus_QuizWebsiteAI",
    "final",
    "chuctet2025",
    "noel",
  ];

  useEffect(() => {
    const loadRepos = async () => {
      try {
        // Pass queryKey as an array
        const personalRepos = await fetchAllRepositories({
          queryKey: [null, "punhnahk"],
        });
        const orgRepos = await fetchOrg("Team1-DevPlus");

        if (!Array.isArray(orgRepos)) {
          console.error(
            "Error: Expected an array for orgRepos, but received:",
            orgRepos
          );
          return;
        }

        const allRepos = [...personalRepos, ...orgRepos];
        const filteredRepos = allRepos.filter((repo) =>
          selectedRepos.includes(repo.name)
        );

        setRepos(filteredRepos);
      } catch (error) {
        console.error("Error fetching repos:", error);
      } finally {
        setLoading(false);
      }
    };

    loadRepos();
  }, []);

  return (
    <div className="py-12 px-6 sm:px-10 lg:px-12 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h1 className="text-4xl font-extrabold text-blue-400">My Projects</h1>
          <p className="text-lg text-gray-400">
            A collection of my work, experiments, and open-source contributions.
          </p>
        </motion.div>

        {/* Tabs Navigation */}
        <div className="flex justify-center gap-6 mb-10 border-b border-gray-700">
          <button
            onClick={() => setActiveTab("projects")}
            className={`flex items-center gap-2 px-6 py-3 text-lg font-semibold rounded-t-lg ${
              activeTab === "projects"
                ? "border-b-2 border-blue-500 text-blue-400"
                : "text-gray-400 hover:text-white"
            }`}
          >
            <FaProjectDiagram className="text-xl" />
            Projects
          </button>

          <button
            onClick={() => setActiveTab("stats")}
            className={`flex items-center gap-2 px-6 py-3 text-lg font-semibold rounded-t-lg ${
              activeTab === "stats"
                ? "border-b-2 border-blue-500 text-blue-400"
                : "text-gray-400 hover:text-white"
            }`}
          >
            <FaChartPie className="text-xl" />
            GitHub Stats
          </button>
        </div>

        {/* Main Content */}
        {activeTab === "projects" ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {loading
              ? Array(6)
                  .fill(0)
                  .map((_, index) => (
                    <motion.div
                      key={index}
                      className="bg-gray-800 animate-pulse rounded-lg h-80 flex items-center justify-center"
                    >
                      <AiOutlineLoading3Quarters className="text-3xl text-gray-400 animate-spin" />
                    </motion.div>
                  ))
              : repos.map((repo) => (
                  <motion.div key={repo.id}>
                    <ProjectCard project={repo} />
                  </motion.div>
                ))}
          </motion.div>
        ) : (
          <div className="space-y-10">
            {/* Contribution Activity */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-semibold mb-4">
                Contribution Activity
              </h2>
              <div className="bg-gray-800 p-6 rounded-lg">
                <CommitCalendar username="punhnahk" />
              </div>
            </motion.div>

            {/* Stats and Language Distribution */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <div className="flex flex-col h-full">
                <h2 className="text-2xl font-semibold mb-4">
                  Language Distribution
                </h2>
                <div className="bg-gray-800 p-6 rounded-lg flex-1">
                  <LanguageGraph repos={repos} />
                </div>
              </div>

              <div className="flex flex-col h-full">
                <h2 className="text-2xl font-semibold mb-4">GitHub Stats</h2>
                <div className="bg-gray-800 p-6 rounded-lg flex-1 flex items-center justify-center">
                  <GitHubStats username="punhnahk" />
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}
