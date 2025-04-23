import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useFetch } from "../hooks/useFetch";  
import { useBookContext } from "../context/BookContext"; 

// Validation schema using Yup
const validationSchema = Yup.object({
  title: Yup.string().required("Title is required"),
  author: Yup.string().required("Author is required"),
  genre: Yup.string().optional(),
  coverImage: Yup.string().url("Must be a valid URL").optional(),
});

function AddBookForm() {
  const { setBooks } = useBookContext(); // Get the setBooks function from context
  const { postData, loading, error } = useFetch("http://localhost:3000/books"); // Replace with actual API endpoint

  // Formik initialization
  const formik = useFormik({
    initialValues: {
      title: "",
      author: "",
      genre: "",
      coverImage: "",
    },
    validationSchema, // Yup validation schema
    onSubmit: (values, { resetForm }) => {
      // Perform the POST request via the useFetch hook
      postData(values).then((newBook) => {
        if (newBook) {
          // On success, update the global books state
          setBooks((prev) => [...prev, newBook]);
          resetForm(); // Clear the form after submission
        }
      });
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="add-book-form">
      {/* Title Input */}
      <div>
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          name="title"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.title}
        />
        {formik.touched.title && formik.errors.title && (
          <div className="error">{formik.errors.title}</div>
        )}
      </div>

      {/* Author Input */}
      <div>
        <label htmlFor="author">Author:</label>
        <input
          id="author"
          name="author"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.author}
        />
        {formik.touched.author && formik.errors.author && (
          <div className="error">{formik.errors.author}</div>
        )}
      </div>

      {/* Genre Input */}
      <div>
        <label htmlFor="genre">Genre:</label>
        <input
          id="genre"
          name="genre"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.genre}
        />
      </div>

      {/* Cover Image Input */}
      <div>
        <label htmlFor="coverImage">Cover Image URL:</label>
        <input
          id="coverImage"
          name="coverImage"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.coverImage}
        />
        {formik.touched.coverImage && formik.errors.coverImage && (
          <div className="error">{formik.errors.coverImage}</div>
        )}
      </div>

      {/* Submit Button */}
      <button type="submit" disabled={loading}>
        {loading ? "Adding..." : "Add Book"}
      </button>

      {/* Displaying error message if there's a submission error */}
      {error && <div className="error">Something went wrong. Please try again!</div>}
    </form>
  );
}

export default AddBookForm;
