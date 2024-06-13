import { useAppSelector } from '~/store.client/store';
import { BookCardList } from '~/components/book-card-list';

export default function ReadBooks() {
    const readBooks = useAppSelector((state) => state.read.readBooks); // Bücher aus dem Redux-Store selektieren

    return (
        <>
            <h1>The books you read</h1>
            <p className="text-muted-foreground text-sm">Your shelf. Your books.</p>

            <div className="mt-5">
                <BookCardList books={readBooks}  ></BookCardList> {/* Übergeben der Liste der gelesenen Bücher an die BookCardList */}
            </div>
        </>
    );
}
