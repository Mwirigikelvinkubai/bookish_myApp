import { useContext } from 'react';
// import { BookContext } from '../context/BookContext';
import BookCard from '../components/BookCard'; // assuming you have a reusable card

const Wishlist = () => {
  const { wishlist } = useContext(BookContext);

  if (wishlist.length === 0) {
    return <p style={{ padding: '1rem' }}>Your wishlist is empty 💔</p>;
  }

  return (
    <div style={{ padding: '1rem' }}>
      <h2>📚 Your Wishlist</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {wishlist.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
