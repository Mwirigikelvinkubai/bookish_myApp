// BookCard component that displays book information including cover, title, authors,
// languages, subjects, and a wishlist button

import BookCover from "./BookCover";
import BookInfo from "./BookInfo";
import BookLanguages from "./BookLanguages";
import BookSubjects from "./BookSubjects";
import WishlistButton from "./WishlistButton";

const BookCard = ({ book }) => {
  return (
    <div className="book-card">
      <BookCover coverId={book.cover_i} title={book.title} />
      <BookInfo
        title={book.title}
        authors={book.author_name}
        year={book.first_publish_year}
      />
      <BookLanguages languages={book.language} />
      <BookSubjects subjects={book.subject} />
      <WishlistButton book={book} />
    </div>
  );
};

export default BookCard;
