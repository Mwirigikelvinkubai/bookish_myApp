import WishlistButton from './WishlistButton';

const BookCard = ({ book }) => {
  return (
    <div className="book-card">
      <h3>{book.title}</h3>
      <p>{book.author}</p>
      {/* other book details */}
      <WishlistButton book={book} />
    </div>
  );
};

export default BookCard;