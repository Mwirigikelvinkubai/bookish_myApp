// Displays book title, authors, and publish year
const BookInfo = ({ title, authors, year }) => {
    return (
      <>
        <h3>{title}</h3>
        <p>{authors ? authors.join(", ") : "Author not available"}</p>
        <p>{year || "Published date not available"}</p>
      </>
    );
  };
  
  export default BookInfo;
  