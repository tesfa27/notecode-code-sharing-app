import ShareIcon from "../assets/Share.svg";

const Toolbar = ({
  language,
  setLanguage,
  theme,
  setTheme,
  onShare,
  canShare,
  className = "",
}) => {
  return (
    <div className={`flex items-center gap-3 p-3 bg-gray-50 ${className}`}>
      {/* Left-start group */}
      <div className="flex items-center gap-2 justify-start">
        <label className="sr-only">Language</label>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="px-2 py-1 border rounded-md text-sm"
        >
          <option value="html">HTML</option>
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
        </select>

        <label className="sr-only">Theme</label>
        <select
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
          className="px-2 py-1 border rounded-md text-sm"
        >
          <option value="light">Light</option>
          <option value="vs-dark">Dark</option>
        </select>
      </div>

      {/* Push share button to the far right */}
      <div className="ml-auto">
        <button
          onClick={onShare}
          disabled={!canShare}
          className={`flex items-center px-3 py-1 bg-blue-600 text-white rounded-md text-sm ${!canShare ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"}`}
        >
          <img src={ShareIcon} alt="Share" className="w-4 h-4 mr-2" />
          <span>Share</span>
        </button>
      </div>
    </div>
  );
};

export default Toolbar;
