//custom hook to handle book addition via form
//Manage error/success outcomes
//manage form clearing
import { useState } from "react";

const usePostBook = () => {
    const [isPosting, setIsPosting] = useState(false)
    const [errorOnPost, setErrorOnPost] = useState(null)
    const [successMsg, setSuccessMsg] = useState("")

    const postBook = async(addedBook) => {
        setIsPosting(true)
        setErrorOnPost(null)
        setSuccessMsg("")

        try {
            const res = await fetch("http://localhost:3001/books", {
               method: "POST",
               headers: {"Content-Type": "application/json"},
               body: JSON.stringify(addedBook)
            })

            if(!res.ok) throw new Error("Failed to add new book.")
            
                const data = await res.json()
                setSuccessMsg("successfully added the book!")
                return data
        } catch(err) {
            setErrorOnPost(err.message)
        } finally {
            setIsPosting(false)
        }
    }
    return {postBook, isPosting, errorOnPost, successMsg}
}

export default usePostBook