import GitHubCalendar from "react-github-calendar";

const CommitCalendar = ({ username }) => {
  return (
    <div className="p-4 bg-gray-900 rounded-lg flex flex-col items-center">
      <h2 className="text-lg text-white mb-4">GitHub Contributions</h2>
      <div className="w-full overflow-x-auto flex justify-center">
        <div className="min-w-[300px] max-w-full">
          <GitHubCalendar username={username} />
        </div>
      </div>
    </div>
  );
};
export default CommitCalendar;
