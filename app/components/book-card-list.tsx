import { Book } from '~/models/book'; // Annahme: Du hast ein Book-Modell definiert
import { BookCard } from './book-card'; // Annahme: Du hast ein BookCard-Component

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
