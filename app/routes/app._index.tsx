import { LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { fetchBooks } from '~/apis/book-api';
import { BookCardList } from '~/components/book-card-list';

export async function loader({ request }: LoaderFunctionArgs) {
    const books = await fetchBooks();
    return { books };
}

export default function Library() {
    const data = useLoaderData<typeof loader>();
    const books = data.books;

    return (
        <>
            <h1>Book Library</h1>
            <p className="text-muted-foreground text-sm mb-2">Below, you can discover amazing books ranging from magic and fairies to programming and beyond. Dive into captivating worlds by saving the most intriguing books to your personal bookshelf today!</p>

            <BookCardList books={books}></BookCardList>
        </>
    );
}
