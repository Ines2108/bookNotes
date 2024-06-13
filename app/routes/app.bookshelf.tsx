// app.bookshelf.tsx
import { Book } from '~/models/book';
import { BookCardList } from '~/components/book-card-list';
import { useAppSelector } from '~/store.client/store';



export default function Bookshelf() {
    const favoriteBooks = useAppSelector((state) => state.favorite.favoriteBooks); // Abrufen der Liste der favorisierten Bücher aus dem Redux-Store

    return (
        <>
            <h1>Personal Bookshelf</h1>
            <p className="text-muted-foreground text-sm">All the books you want to read</p>

            <div className="mt-5">
                <BookCardList books={favoriteBooks}></BookCardList> {/* Übergeben der Liste der favorisierten Bücher an die BookCardList */}
            </div>
        </>
    );
}
