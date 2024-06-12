
import { fetchBookById } from '~/apis/book-api';
import { useEffect, useState } from 'react';
import { Book } from '~/models/book';
import {useParams} from "react-router";
import {Link} from "@remix-run/react";



export default function BookDetailPage() {
    const { id } = useParams<{ id: string }>(); // Typdefinition für useParams
    const [bookDetails, setBookDetails] = useState<Book | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (id) {
            const bookId = parseInt(id, 10); // ID in Zahl umwandeln
            fetchBookById(bookId).then((book) => {
                setBookDetails(book);
                setLoading(false);
            }).catch((error) => {
                console.error(error);
                setLoading(false);
            });
        }
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!bookDetails) {
        return <div>Error: Book not found</div>;
    }

    return (
        <div>
            <h1>{bookDetails.title}</h1>
            <p>Author: {bookDetails.author}</p>
            <img src={bookDetails.coverUrl} alt={`Cover of ${bookDetails.title}`} />
            <p>Star Rating: {bookDetails.starRating}</p>
            <p>Rating Comment: {bookDetails.ratingComment}</p>
            <Link to="/app">Back to Book Library</Link>
        </div>
    );
}
