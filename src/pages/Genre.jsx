import React, { useState } from 'react';
import GenreButton from '../components/GenreButton';
import useFetchBooks from '../hooks/UseFetch';
import BookInfo from '../components/BookInfo';
import BookLanguages from '../components/BookLanguages';
import ReadOnlineButton from '../components/ReadOnlineButton';
import WishlistButton from '../components/WishlistButton';

const genres = [
  { label: 'Action', subject: 'Action' },
  { label: 'Adventure', subject: 'Adventure' },
  { label: 'Animation', subject: 'Animation' },
  { label: 'Biography', subject: 'Biography' },
  { label: 'Comedy', subject: 'Comedy' },
  { label: 'Crime', subject: 'Crime' },
  { label: 'Documentary', subject: 'Documentary' },
  { label: 'Drama', subject: 'Drama' },
  { label: 'Fantasy', subject: 'Fantasy' },
  { label: 'Horror', subject: 'Horror' },
  { label: 'Mystery', subject: 'Mystery' },
  { label: 'Romance', subject: 'Romance' },
  { label: 'Sci-Fi', subject: 'Science fiction' },
  { label: 'Thriller', subject: 'Thriller' },
  { label: 'Western', subject: 'Western' },
  { label: 'Fairy-Tale', subject: 'Fairy tales' },
];

const Genre = () => {
  const [selectedGenre, setSelectedGenre] = useState(null);
  const { books, isLoading, error } = useFetchBooks(
    selectedGenre ? `subject=${selectedGenre}` : null
  );

  const handleGenreSelect = (subject) => {
    setSelectedGenre(subject);
  };

  const renderGenres = () => (
    <div className="flex flex-wrap gap-4 justify-center my-6">
      {genres.map(({ label, subject }) => (
        <GenreButton
          key={subject}
          genre={label}
          onClick={() => handleGenreSelect(subject)}
          className="bg-gray-800 text-white rounded-full px-6 py-2 hover:bg-red-600 transition-colors duration-300"
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
            <div
              key={book.key}
              className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center p-4 transition-transform hover:scale-105"
            >
              {book.cover_i ? (
                <img
                  src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                  alt={book.title}
                  className="w-full h-60 object-cover mb-4"
                />
              ) : (
                <div className="w-full h-60 bg-gray-300 flex items-center justify-center text-gray-700 mb-4">
                  No Image
                </div>
              )}

              <BookInfo 
                title={book.title} 
                authors={book.author_name} 
                year={book.first_publish_year} 
              />

              <BookLanguages languages={book.language} />

              <div className="flex gap-2 mt-4">
                <ReadOnlineButton book={book} />
                <WishlistButton book={book} />
              </div>
            </div>
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
