// Displays a few subjects related to the book
const BookSubjects = ({ subjects }) => {
    return (
      <p>
        <strong>Subjects:</strong>{" "}
        {subjects && subjects.length > 0
          ? subjects.slice(0, 3).join(", ")
          : "No subjects listed"}
      </p>
    );
  };
  
  export default BookSubjects;
  