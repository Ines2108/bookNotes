// app.books.$id.tsx

import { useEffect, useState } from 'react';
import { useParams, Link } from '@remix-run/react';
import { fetchBookById } from '~/apis/book-api';
import { Book, Comment } from '~/models/book';

export default function BookDetailPage() {
    const { id } = useParams<{ id: string }>();
    const [bookDetails, setBookDetails] = useState<Book | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (id) {
            fetchBookById(id)
                .then((book) => {
                    setBookDetails(book);
                    setLoading(false);
                })
                .catch((error) => {
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

            {bookDetails.comments.length > 0 && (
                <div>
                    <h2>Comments</h2>
                    <ul>
                        {bookDetails.comments.map((comment: Comment) => (
                            <li key={comment.commentId} className="mt-3">
                                <p>{comment.text}</p>
                                <small>{new Date(comment.createdAt).toLocaleString()}</small>
                            </li>
                        ))}
                    </ul>
                    <br />
                </div>

            )}
            <Link to="/app">Back to Book Library</Link>
        </div>
    );
}
