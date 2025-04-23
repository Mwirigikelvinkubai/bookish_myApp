// Renders the book cover image or a placeholder if unavailable
const BookCover = ({ coverId, title }) => {
    const imageUrl = coverId
      ? `https://covers.openlibrary.org/b/id/${coverId}-L.jpg`
      : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/495px-No-Image-Placeholder.svg.png?20200912122019";
  
    return (
      <img
        src={imageUrl}
        alt={title}
        style={{ width: "150px", height: "200px" }}
      />
    );
  };
  
  export default BookCover;
  