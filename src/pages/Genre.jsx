import React, { useState } from 'react';
import GenreButton from '../components/GenreButton';
import useFetchBooks from '../hooks/UseFetch';
import ReadOnlineButton from '../components/ReadOnlineButton'; // Import ReadOnlineButton
import WishlistButton from '../components/WishlistButton'; // Import WishlistButton
import BookInfo from '../components/BookInfo'; // Import BookInfo
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
  
  const { books, isLoading, error } = useFetchBooks(
    selectedGenre ? `subject=${selectedGenre}` : null
  );

  return (
    <div className="genre-container">
      <h2>Genres</h2>
      <div className="genre-buttons flex flex-wrap gap-4">
        {genres.map(({ label, subject }) => (
          <GenreButton
            key={subject}
            genre={label}
            onClick={() => setSelectedGenre(subject)}
            className="bg-gray-800 text-white rounded-full px-6 py-2 hover:bg-red-600 transition-colors duration-300"
          />
        ))}
      </div>

      {selectedGenre && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6rem' }}>
          <h3>{selectedGenre} Books</h3>
          {isLoading && <p>Loading...</p>}
          {error && <p style={{ color: 'red' }}>{error}</p>}
          {books.length > 0 ? (
            books.map((book) => (
              <div key={book.key} className="book-card">
                {book.cover_i && (
                  <img
                    src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                    alt={book.title}
                    className="book-cover"
                  />
                )}

                {/* Use the BookInfo component here */}
                <BookInfo 
                  title={book.title} 
                  authors={book.author_name} 
                  year={book.first_publish_year}
                />
                <BookLanguages languages={book.language} />
                {/* Add Read Online Button */}
                <ReadOnlineButton book={book} />

                {/* Add Wishlist Button */}
                <WishlistButton book={book} />
              </div>
            ))
          ) : (
            <p>No books found in this genre.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Genre;