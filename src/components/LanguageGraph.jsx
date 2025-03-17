// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function LanguageGraph({ repos }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current || repos.length === 0) return;

    // Count languages
    const languages = {};
    repos.forEach((repo) => {
      if (repo.language) {
        languages[repo.language] = (languages[repo.language] || 0) + 1;
      }
    });

    // Sort by count
    const sortedLanguages = Object.entries(languages)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 6);

    const total = sortedLanguages.reduce((sum, [_, count]) => sum + count, 0);

    // Colors for languages
    const colors = {
      JavaScript: "#f7df1e",
      TypeScript: "#3178c6",
      HTML: "#e34c26",
      CSS: "#563d7c",
      Python: "#3572A5",
      Java: "#b07219",
      PHP: "#4F5D95",
      Ruby: "#701516",
      Go: "#00ADD8",
      Rust: "#dea584",
      // Default colors for other languages
      default: "#6366f1",
    };

    // Draw the pie chart
    const ctx = canvasRef.current.getContext("2d");
    if (!ctx) return;

    const width = canvasRef.current.width;
    const height = canvasRef.current.height;
    const radius = (Math.min(width, height) / 2) * 0.8;

    ctx.clearRect(0, 0, width, height);

    let startAngle = 0;
    sortedLanguages.forEach(([language, count], index) => {
      const sliceAngle = (count / total) * 2 * Math.PI;

      ctx.beginPath();
      ctx.moveTo(width / 2, height / 2);
      ctx.arc(
        width / 2,
        height / 2,
        radius,
        startAngle,
        startAngle + sliceAngle
      );
      ctx.closePath();

      ctx.fillStyle = colors[language] || colors.default;
      ctx.fill();

      // Draw label line
      const midAngle = startAngle + sliceAngle / 2;
      const labelRadius = radius * 1.2;
      const labelX = width / 2 + Math.cos(midAngle) * labelRadius;
      const labelY = height / 2 + Math.sin(midAngle) * labelRadius;

      startAngle += sliceAngle;
    });
  }, [repos]);

  // Create legend from the same data
  const languageCounts = {};
  repos.forEach((repo) => {
    if (repo.language) {
      languageCounts[repo.language] = (languageCounts[repo.language] || 0) + 1;
    }
  });

  const sortedLanguages = Object.entries(languageCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6);

  const total = sortedLanguages.reduce((sum, [_, count]) => sum + count, 0);

  // Colors for languages
  const colors = {
    JavaScript: "#f7df1e",
    TypeScript: "#3178c6",
    HTML: "#e34c26",
    CSS: "#563d7c",
    Python: "#3572A5",
    Java: "#b07219",
    PHP: "#4F5D95",
    Ruby: "#701516",
    Go: "#00ADD8",
    Rust: "#dea584",
    // Default color for other languages
    default: "#6366f1",
  };

  return (
    <div className="flex flex-col md:flex-row items-center">
      <div className="relative w-48 h-48">
        <canvas ref={canvasRef} width={200} height={200}></canvas>
      </div>
      <div className="mt-4 md:mt-0 md:ml-6 flex-grow">
        {sortedLanguages.map(([language, count], index) => (
          <motion.div
            key={language}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="mb-2 last:mb-0"
          >
            <div className="flex items-center">
              <div
                className="w-3 h-3 rounded-full mr-2"
                style={{ backgroundColor: colors[language] || colors.default }}
              ></div>
              <span className="text-sm">{language}</span>
              <span className="ml-auto text-sm text-gray-400">
                {((count / total) * 100).toFixed(1)}%
              </span>
            </div>
            <div className="w-full bg-gray-700 h-1.5 mt-1 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{
                  width: `${(count / total) * 100}%`,
                  backgroundColor: colors[language] || colors.default,
                }}
              ></div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
