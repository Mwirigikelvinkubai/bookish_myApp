import NavBar from "./components/Navbar"
import AppRouter from "./router/AppRouter"
import {BookProvider} from "./context/BookContext"

function App() {
  return (
   <BookProvider>
    <NavBar />
    <main>
      <AppRouter />
    </main>
   </BookProvider>
  );
}

export default App;
