import WishlistButton from './WishlistButton';

const BookCard = ({ book }) => {

  const coverImageUrl = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
    : 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/495px-No-Image-Placeholder.svg.png?20200912122019'; // Default placeholder if no cover image

  return (
    <div className="book-card">
      <img src={coverImageUrl} alt={book.title} style={{ width: '150px', height: '200px' }} />

      <h3>{book.title}</h3>
      <p>{book.author_name ? book.author_name.join(', ') : 'Author not available'}</p>
      <p>{book.first_publish_year || 'Published date not available'}</p>
      <WishlistButton book={book} />
    </div>
  );
};

export default BookCard;
