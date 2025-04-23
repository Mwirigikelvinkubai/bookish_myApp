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
    <div>
      <strong>Language:</strong>{" "}
      {sortedLangs.length > 0 ? (
        <select
          value={selectedLang}
          onChange={(e) => setSelectedLang(e.target.value)}
        >
          {sortedLangs.map((lang, index) => (
            <option key={index} value={lang}>
              {lang.toUpperCase()}
            </option>
          ))}
        </select>
      ) : (
        "Not specified"
      )}
    </div>
  );
};

export default BookLanguages;
