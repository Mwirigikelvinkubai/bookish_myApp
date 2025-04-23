import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import BookList from './components/BookList.jsx';
import BookModal from './components/BookModal.jsx';
import BookSearch from './components/BookSearch.jsx';
import GenreFilter from './components/GenreFilter.jsx';
import WishlistButton from './components/WishlistButton.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<BookList />} />
        <Route path="search" element={<BookSearch />} />
        <Route path="filter" element={<GenreFilter />} />
        <Route path="wishlist" element={<WishlistButton />} />
        <Route path="book/:id" element={<BookModal />} />
      </Route>
    </Routes>
  </BrowserRouter>
);