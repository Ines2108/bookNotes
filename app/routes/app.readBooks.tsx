import { useAppSelector } from '~/store.client/store';
import { BookCardList } from '~/components/book-card-list';

export default function ReadBooks() {
    const readBooks = useAppSelector((state) => state.read.readBooks); // select read books from store

    return (
        <>
            <h1>The books you read</h1>
            <p className="text-muted-foreground text-sm">Your personal shelf filled with the books you've read and loved. Enjoy revisiting your favorite stories anytime!</p>

            <div className="mt-5">
                {/*// Transferring the list of books read to the BookCardList*/}
                <BookCardList books={readBooks}  ></BookCardList> {}
            </div>
        </>
    );
}
