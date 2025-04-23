//defining a 'shareable' hook for all components
//to manage all book fetching, state loadings, and error msg

import { useState, useEffect } from "react";

const useFetchBooks = (query) => {
    const [books, setBooks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    //watch query, if a change happens, trigger fetchbooks function
    useEffect(() => {
        let url = "http://localhost:3001/books"
        if(query) {
            url += `?q=${query}`
        }

        const fetchBooks = async() => {
            setIsLoading(true)
            try {
                const res = await fetch(url)
                const data = await res.json()
                setBooks(data)
                setError(null)
            } catch(err) {
                setError("failed to fetch books")
                setBooks([])
            } finally {
                setIsLoading(false)
            }
        }
        fetchBooks()
    }, [query])

    //finally return variables common to all components calling hook 
    return {books, isLoading, error}

}

export default useFetchBooks