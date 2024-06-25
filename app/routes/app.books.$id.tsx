// app.books.$id.tsx

import { useEffect, useState } from 'react';
import { useParams, Link } from '@remix-run/react';
import { fetchBookById } from '~/apis/book-api';
import { Book, Comment } from '~/models/book';
import { addCommentToBook } from '~/storage.server/book-storage';
import { RootState } from '~/store.client/store';
import { RiStarSLine } from "react-icons/ri";
import { IoStarSharp } from "react-icons/io5";

export default function BookDetailPage() {
    const { id } = useParams<{ id: string }>();
    const [bookDetails, setBookDetails] = useState<Book | null>(null);
    const [loading, setLoading] = useState(true);

    // useEffect Hook to retrieve the book details when the ID is changed
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
        return <div>Loading 📖...</div>;
    }

    if (!bookDetails) {
        return <div>Error: Book not found</div>;
    }

    const starRating = bookDetails.starRating;
    const totalStars = 5;

    // Calculates the number of filled stars and empty stars
    const filledStars = Math.floor(starRating);
    const emptyStars = totalStars - filledStars;

    return (
        <div>
            <h1>{bookDetails.title}</h1>
            <p className="my-2">Author: {bookDetails.author}</p>
            <img  className="rounded-lg" src={bookDetails.coverUrl} alt={`Cover of ${bookDetails.title}`} />
            <div className="flex pt-5">
                {Array(filledStars).fill(<IoStarSharp key="filled-star" />)} //Array with length filledStars
                {Array(emptyStars).fill(<RiStarSLine key="empty-star" />)}
            </div>
            <p className="pb-5 text-xs">({bookDetails.starRating}/5)</p>


            {bookDetails.comments.length > 0 && (
                <div>
                    <h2>Comments</h2>
                    <ul>
                        {bookDetails.comments.map((comment: Comment) => (
                            <li key={comment.commentId} className="bg-[#FAF8F4] rounded-lg mt-3 p-2">
                                <p>{comment.text}</p>
                                <small>{new Date(comment.createdAt).toLocaleString()}</small>
                            </li>
                        ))}
                    </ul>
                    <br />
                </div>

            )}
            <Link to="/app" className="rounded-lg bg-[#8290B6] text-[#fff] p-1 hover:bg-[#98A5C8] ">Back to Book Library</Link>
        </div>
    );
}
