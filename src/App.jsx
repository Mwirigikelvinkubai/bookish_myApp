import React, { useState } from 'react';
import NavBar from "./components/Navbar";
import AppRouter from "./router/AppRouter";
import { BookProvider } from "./context/BookContext";
import useFetchBooks from "./hooks/UseFetch"; 
import './components/App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [query, setQuery] = useState("");  // Query state for searching books
  const { books, isLoading, error } = useFetchBooks(query);  // Using the hook to fetch books based on the query

  return (
    <BookProvider>
      <NavBar />
      <main>
        <AppRouter 
          query={query} 
          setQuery={setQuery} 
          books={books} 
          isLoading={isLoading} 
          error={error} 
        />
      </main>
      <ToastContainer  hideProgressBar={true} theme="dark"   />
    </BookProvider>
  );
}

export default App;
