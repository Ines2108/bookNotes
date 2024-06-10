import { LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { fetchBooks } from '~/apis/book-api'; // Annahme: Du hast eine Funktion fetchBooks, um Bücher abzurufen
import { BookCardList } from '~/components/book-card-list'; // Annahme: Du hast ein Component BookCardList, um Bücher anzuzeigen

export async function loader({ request }: LoaderFunctionArgs) {
    const books = await fetchBooks();
    return { books };
}

export default function Library() {
    const data = useLoaderData<typeof loader>();
    const books = data.books;

    return (
        <>
            <h1>Library</h1>
            <p className="text-muted-foreground text-sm">Your Books. Your library.</p>

            <BookCardList books={books}></BookCardList>
        </>
    );
}
