import { useState, useEffect } from "react";

// Handles rendering a dropdown of book languages
const BookLanguages = ({ languages }) => {
  const [selectedLang, setSelectedLang] = useState("");

  const sortedLangs = languages
    ? [...languages].sort((a, b) => (a === "eng" ? -1 : b === "eng" ? 1 : 0))
    : [];

  useEffect(() => {
    if (sortedLangs.length > 0) {
      setSelectedLang(sortedLangs[0]);
    }
  }, [languages]);

  return (
    <div className="text-white">
      <strong>Language:</strong>{" "}
      {sortedLangs.length > 0 ? (
        <select
          value={selectedLang}
          onChange={(e) => setSelectedLang(e.target.value)}
          className="bg-gray-800 text-white border border-gray-600 rounded-lg p-2 mt-2"
        >
          {sortedLangs.map((lang, index) => (
            <option key={index} value={lang} className="bg-gray-800">
              {lang.toUpperCase()}
            </option>
          ))}
        </select>
      ) : (
        <span>Not specified</span>
      )}
    </div>
  );
};

export default BookLanguages;

