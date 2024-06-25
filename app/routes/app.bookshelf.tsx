// app.bookshelf.tsx
import { Book } from '~/models/book';
import { BookCardList } from '~/components/book-card-list';
import { useAppSelector } from '~/store.client/store';



export default function Bookshelf() {
    const favoriteBooks = useAppSelector((state) => state.favorite.favoriteBooks); // Retrieve the list of favorite books from the Store

    return (
        <>
            <h1>Personal Bookshelf</h1>
            <p className="text-muted-foreground text-sm">Explore all the books you've been eager to read. Build your personal bookshelf with the stories that captivate you the most. Happy reading!</p>

            <div className="mt-5">
                {/*// Transferring the list of favorite books to the BookCardList*/}
                <BookCardList books={favoriteBooks}></BookCardList> {}
            </div>
        </>
    );
}
