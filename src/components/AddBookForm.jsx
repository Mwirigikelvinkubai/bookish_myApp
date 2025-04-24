import { useState } from "react";
import { useBookContext } from "../context/BookContext";

function AddBookForm() {
  const { setBooks } = useBookContext();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !author) return;
    const newBook = { id: Date.now(), title, author };
    setBooks((prev) => [...prev, newBook]);
    setTitle("");
    setAuthor("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text" placeholder="Title"
        value={title} onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text" placeholder="Author"
        value={author} onChange={(e) => setAuthor(e.target.value)}
      />
      <button type="submit">Add Book</button>
    </form>
  );
}

export default AddBookForm;

