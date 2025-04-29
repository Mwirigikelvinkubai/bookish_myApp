import React, { useState } from 'react';
import GenreButton from '../components/GenreButton';
import useFetchBooks from '../hooks/UseFetch';
import BookCard from '../components/BookCard'; // Import BookCard component

// Genres array
const genres = [
  'Action','Adventure','Animation','Biography','Comedy','Crime','Documentary',
  'Drama','Fantasy','Horror','Mystery','Romance','Sci-Fi','Thriller','Western','Fairy-Tale',
];

const Genre = () => {
  const [selectedGenre, setSelectedGenre] = useState(null);
  const { books, isLoading, error } = useFetchBooks(
    selectedGenre ? `subject=${selectedGenre}` : null
  );

  const handleGenreSelect = (genre) => {
    setSelectedGenre(genre);
  };

  const renderGenres = () => (
    <div className="flex flex-wrap gap-4 justify-center my-6">
      {genres.map((genre) => (
        <GenreButton
          key={genre}
          genre={genre}
          onClick={() => handleGenreSelect(genre)}
          className="bg-gray-800 text-white rounded-full px-6 py-2 hover:bg-red-600"
        />
      ))}
    </div>
  );

  const renderBooks = () => (
    <div className="mt-8">
      <h3 className="text-2xl font-bold text-center mb-6">{selectedGenre} Books</h3>

      {isLoading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {books.length > 0 ? (
          books.map((book) => (
            <BookCard key={book.key} book={book} />
          ))
        ) : (
          <p className="text-center text-gray-600">No books found in this genre.</p>
        )}
      </div>
    </div>
  );

  return (
    <div className="px-4 py-8 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Explore Genres</h2>
      {renderGenres()}
      {selectedGenre && renderBooks()}
    </div>
  );
};

export default Genre;

