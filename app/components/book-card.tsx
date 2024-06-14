// book-card.tsx
import { BookIcon, BookOpen, Heart, HeartOff } from 'lucide-react';
import { Book } from '~/models/book';
import { favAction, notFavAction } from '~/store.client/favorite-reducer';
import { readAction, notReadAction } from '~/store.client/read-reducer';
import { useAppDispatch, useAppSelector } from '~/store.client/store';
import { Link } from "@remix-run/react";

type BookCardProps = { book: Book };

export function BookCard({ book }: BookCardProps) {
    const dispatch = useAppDispatch();
    const favoriteBooks = useAppSelector((state) => state.favorite.favoriteBooks);
    const isFavorite = favoriteBooks.some(favoriteBook => favoriteBook.id === book.id);

    // Mark books as read
    const readBooks = useAppSelector((state) => state.read.readBooks);
    const isRead = readBooks.some(readBook => readBook.id === book.id);

    const onFavoriteButtonClicked = () => {
        dispatch(isFavorite ? notFavAction({ bookId: book.id }) : favAction({ book }));
    };

    // Mark books as read
    const onReadButtonClicked = () => {
        dispatch(isRead ? notReadAction({ bookId: book.id }) : readAction({ book }));
    };

    return (
        <section className="card">
            <Link to={`/app/books/${book.id}`} className="card_link">
                <div className="card_cover">
                    <img alt={'Cover image of ' + book.title} src={book.coverUrl} className="card_cover-img" />
                </div>
            </Link>

            <div className="card_body">

                {/*readButton is only shown when Book has state fav*/}
                {!isRead && (
                    <FavoriteButton isFavorite={isFavorite} onClick={onFavoriteButtonClicked} />
                )}


                {/*readButton is not shown when Book has state read*/}
                {isFavorite && (
                    <div className="flex-none">
                        <ReadButton isRead={isRead} onClick={onReadButtonClicked}></ReadButton>
                    </div>
                )}

                <div className="flex-auto">
                    <h3 className="card_title">{book.title}</h3>
                    <div>{book.author}</div>
                </div>
            </div>
        </section>
    );
}

type FavoriteButtonProps = { isFavorite: boolean; onClick?: () => void };
function FavoriteButton({ isFavorite = false, onClick }: FavoriteButtonProps) {
    return (
        <button type="button" className="icon-button" onClick={onClick}>
            {isFavorite ? <Heart strokeWidth={1.5} /> : <HeartOff strokeWidth={1.5} />}
        </button>
    );
}

// Mark as read
type ReadButtonProps = { isRead: boolean; onClick?: () => void };
function ReadButton({ isRead = false, onClick }: ReadButtonProps) {
    return (
        <button type="button" className="icon-button" onClick={onClick}>
            {isRead ? <BookOpen strokeWidth={1.5} /> : <BookIcon strokeWidth={1.5} />}
        </button>
    );
}
