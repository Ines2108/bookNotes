// book-card.tsx
import { Heart, HeartOff } from 'lucide-react';
import { Book } from '~/models/book';
import { favAction, notFavAction } from '~/store.client/favorite-reducer';
import { useAppDispatch, useAppSelector } from '~/store.client/store';
import {Link} from "@remix-run/react";


type BookCardProps = { book: Book };

export function BookCard({ book }: BookCardProps) {
    const dispatch = useAppDispatch();
    const favoriteBooks = useAppSelector((state) => state.favorite.favoriteBooks);
    const isFavorite = favoriteBooks.some(favoriteBook => favoriteBook.id === book.id);

    const onFavoriteButtonClicked = () => {
        if (isFavorite) {
            dispatch(notFavAction({ bookId: book.id }));
        } else {
            dispatch(favAction({ book: book }));
        }
    };

    return (
        <section className="card">
            <Link to={`/app/books/${book.id}`} className="card_link">
                <div className="card_cover">
                    <img alt={'Cover image of ' + book.title} src={book.coverUrl} className="card_cover-img" />
                </div>
            </Link>

            <div className="card_body">
                <div className="flex-none">
                    <FavoriteButton isFavorite={isFavorite} onClick={onFavoriteButtonClicked}></FavoriteButton>
                </div>
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
