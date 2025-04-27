import React from 'react';
import NavBar from "./components/Navbar";
import AppRouter from "./router/AppRouter";
import { BookProvider } from "./context/BookContext";
import { UserProvider } from './context/UserContext';

function App() {
 
  return (
    <UserProvider>
      <BookProvider>
        <NavBar />
        <main>
          <AppRouter />
        </main>
      </BookProvider>
    </UserProvider>
  );
}

export default App;
