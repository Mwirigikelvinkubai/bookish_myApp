import { useBookContext } from "../context/BookContext";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const AddBookForm = () => {
  const { setBooks } = useBookContext();

  const initialValues = {
    title: "",
    author: "",
  };

  const validationSchema = Yup.object({
    title: Yup.string().required("Title is required"),
    author: Yup.string().required("Author is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    const newBook = { id: Date.now(), title: values.title, author: values.author };
    setBooks((prev) => [...prev, newBook]);
    resetForm();
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-gray-800 rounded-lg shadow-md text-white">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className="space-y-4">
            <div>
              <Field
                name="title"
                type="text"
                placeholder="Title"
                className="w-full p-2 rounded bg-gray-700 text-white"
              />
              <ErrorMessage name="title" component="div" className="text-red-400 text-sm mt-1" />
            </div>

            <div>
              <Field
                name="author"
                type="text"
                placeholder="Author"
                className="w-full p-2 rounded bg-gray-700 text-white"
              />
              <ErrorMessage name="author" component="div" className="text-red-400 text-sm mt-1" />
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 py-2 rounded-lg font-semibold"
            >
              Add Book
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddBookForm;
