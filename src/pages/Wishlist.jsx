import { useContext } from 'react';
import { BookContext } from '../context/BookContext';
import BookCard from '../components/BookCard';
import { useUser } from '../context/UserContext';

const Wishlist = () => {
  const { wishlist } = useContext(BookContext);
  const { user } = useUser(); 

  // If not logged in
  if (!user) {
    return <p style={{ padding: '1rem' }}>Please sign in to view your wishlist 🔒</p>;
  }

  // If logged in but wishlist is empty
  if (wishlist.length === 0) {
    return <p style={{ padding: '1rem' }}>Your wishlist is empty 💔</p>;
  }

  // Logged in + wishlist has items
  return (
    <div style={{ padding: '1rem' }}>
      <h2>📚 Your Wishlist</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {wishlist.map((book) => (
          <BookCard key={book.key} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
