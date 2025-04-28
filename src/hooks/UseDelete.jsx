//Remove a book from UI via DELETE request
//manage errors and loading states
import { useState } from "react";

const useDeleteBook = () => {
    const [isDeleting, setIsDeleting] = useState(false)
    const [errorDelete, setErrorDelete] = useState(null)

    const deleteBook = async(id) => {
        setIsDeleting(true)
        setErrorDelete(null)

        try {
            const res = await fetch(`http://localhost:3001/books/${id}`, {
                method: "DELETE",
            })

            if(!res.ok) {
                throw new Error("Failed to delete the book.")
            }
            return true //indicate a successful action
        } catch(err) {
            setErrorDelete(err.message)
            return false
        } finally{
            setIsDeleting(false)
        }
    }
    return {deleteBook, isDeleting, errorDelete}
}

export default useDeleteBook
