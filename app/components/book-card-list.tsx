import { Book } from '~/models/book';
import { BookCard } from './book-card';

type BookCardListProps = {
    books: Book[]
};

export function BookCardList({ books }: BookCardListProps) {
    return (
        <ul className="card-list">
            {books.map((book) => (
                <li key={book.id}>
                    <BookCard book={book}></BookCard>
                </li>
            ))}
        </ul>
    );
}
