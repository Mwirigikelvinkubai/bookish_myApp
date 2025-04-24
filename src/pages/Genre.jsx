import React, { useState } from 'react';
import GenreButton from '../components/GenreButton';
import useFetchBooks from '../hooks/UseFetch';


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
      <div className="genre-buttons">
      {genres.map(({ label, subject }) => (
  <GenreButton
    key={subject}
    genre={label}
    onClick={() => setSelectedGenre(subject)}
  />
))}
      </div>

      {selectedGenre && (
        <div>
          <h3>{selectedGenre} Books</h3>
          {isLoading && <p>Loading...</p>}
          {error && <p style={{ color: 'red' }}>{error}</p>}
          {books.length > 0 ? (
            books.map((book) => (
              <div key={book.key}>
                {book.cover_i && (
                  <img
                    src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                    alt={book.title}
                  />
                )}
                <h3>{book.title}</h3>
                <p>{book.author_name?.join(', ')}</p>
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
