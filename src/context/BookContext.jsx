//Defining BookContext -> main place containing all shared states
import { createContext, useState, useContext } from "react";

//shared storage available to different components
const BookContext = createContext()

//Providing 'shareable' state variables and setter functions for components
export const BookProvider = ({children}) => {
    const [wishList, setWishList] = useState([])
    const [chosenBook, setChosenBook] = useState(null)

    const addBookToWishList = (book) => {
        setWishList((prev) => [...prev, book])
    }

    const dischargeFromWishList = (id) => {
        setWishList((prev) => prev.filter(book => book.id !== id))
    }

    //defining what will be shared globally 
    return (
        <BookContext.Provider 
            value={{
                wishList, addBookToWishList,
                dischargeFromWishList, chosenBook, setChosenBook
                }}>
            {children}
        </BookContext.Provider>
    )
}

//the custom hook to be used without calling props.
export const useBookContext = () => useContext(BookContext)

