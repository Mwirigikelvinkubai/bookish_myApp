
import React from 'react';

const GenreButton = ({ genre, onClick }) => {
  return (
    <button className="genre-button" onClick={onClick}>
      {genre}
    </button>
  );
};

export default GenreButton;
