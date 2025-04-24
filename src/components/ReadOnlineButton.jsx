const ReadOnlineButton = ({ book }) => {
    // Check if the book has a valid key for Open Library link
    const openLibraryLink = book.key
      ? `https://openlibrary.org${book.key}`
      : null;
  
    return (
      <div>
        {openLibraryLink ? (
          <a href={openLibraryLink} target="_blank" rel="noopener noreferrer">
            <button className="read-online-button">Read Online</button>
          </a>
        ) : (
          <p>Sorry, this book is not available for online reading.</p>
        )}
      </div>
    );
  };
  
  export default ReadOnlineButton;
  