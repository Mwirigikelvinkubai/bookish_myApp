import React, { useState } from 'react';
import GenreButton from '../components/GenreButton';
import useFetchBooks from '../hooks/UseFetch';
import ReadOnlineButton from '../components/ReadOnlineButton';
import WishlistButton from '../components/WishlistButton';
import BookInfo from '../components/BookInfo';
import BookLanguages from '../components/BookLanguages';

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
  
  const { books, isLoading, error } = useFetchBooks(selectedGenre || null);

  return (
    <div className="p-6 min-h-screen bg-gray-900 text-white">
      <h2 className="text-3xl font-bold mb-6">Genres</h2>

      <div className="flex flex-wrap gap-9 mb-8">
        {genres.map(({ label, subject }) => (
          <GenreButton
            key={subject}
            genre={label}
            onClick={() => setSelectedGenre(subject)}
            className="bg-gray-700 hover:bg-red-600 text-white rounded-full px-6 py-2 transition-all duration-300"
          />
        ))}
      </div>

      {selectedGenre && (
        <>
          <h3 className="text-2xl font-semibold mb-4">{selectedGenre} Books</h3>

          {isLoading && <p className="text-center text-gray-400">Loading...</p>}
          {error && <p className="text-center text-red-500">{error}</p>}

          <div style={{ display: "flex", flexWrap: "wrap", gap: "5rem" }}>
            {books.length > 0 ? (
              books.map((book) => (
                <div
                  key={book.key}
                  className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center"
                >
                  {book.cover_i && (
                    <img
                      src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                      alt={book.title}
                      className="h-48 w-auto rounded-md mb-4"
                    />
                  )}

                  <BookInfo title={book.title} authors={book.author_name} year={book.first_publish_year} />
                  <BookLanguages languages={book.language} />

                  <div className="flex gap-2 mt-4">
                    <ReadOnlineButton book={book} />
                    <WishlistButton book={book} />
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-400">No books found in this genre.</p>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Genre;
