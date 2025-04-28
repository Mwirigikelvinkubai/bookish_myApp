import React from 'react';

const BookGrid = ({ children }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 px-6 py-10 bg-gray-900">
      {children}
    </div>
  );
};

export default BookGrid;

