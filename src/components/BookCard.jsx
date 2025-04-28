import BookCover from "./BookCover";
import BookInfo from "./BookInfo";
import BookLanguages from "./BookLanguages";
import WishlistButton from "./WishlistButton";
import ReadOnlineButton from "./ReadOnlineButton";

const BookCard = ({ book }) => {
  return (
    <div className="relative w-48 h-72 rounded-2xl overflow-hidden shadow-lg group cursor-pointer transform hover:scale-110 hover:z-20 transition-all duration-500 bg-gray-900">
      
      {/* Cover Image */}
      <BookCover coverId={book.cover_i} title={book.title} />

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4">
        <div>
          <h3 className="text-lg font-semibold text-white truncate">{book.title}</h3>
          <p className="text-sm text-gray-300 truncate">{book.author_name?.join(", ")}</p>
          <p className="text-xs text-gray-400 italic">{book.first_publish_year}</p>
        </div>

        <div className="flex items-center justify-between gap-2 mt-4">
          <WishlistButton book={book} />
          <ReadOnlineButton book={book} />
        </div>
      </div>

      {/* Info under the card */}
      <div className="bg-gray-800 p-2 space-y-1">
        <BookInfo
          title={book.title}
          authors={book.author_name}
          year={book.first_publish_year}
        />
        <BookLanguages languages={book.language} />
      </div>
    </div>
  );
};

export default BookCard;
