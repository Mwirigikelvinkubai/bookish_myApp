import React, { useState } from "react";
import useFetchBooks from "../hooks/UseFetch"; 

const Home = () => {
    const [query, setQuery] = useState("");
    const { books, isLoading, error } = useFetchBooks(query);

    return (
        <div>
            <h1>Search for Books</h1>
            <input
                type="text"
                placeholder="Search for a book..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />

            {isLoading && <p>Loading...</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}

            <div>
                {books.length > 0 ? (
                    books.map((book) => (
                        <div key={book.key}>
                            <h3>{book.title}</h3>
                            <p>{book.author_name?.join(", ")}</p>
                        </div>
                    ))
                ) : (
                    <p>No books found.</p>
                )}
            </div>
        </div>
    );
};

export default Home;
