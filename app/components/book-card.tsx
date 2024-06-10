import { Heart } from 'lucide-react'; // Annahme: Du verwendest das Heart-Icon von Lucide
import { Book } from '~/models/book';
import { useDispatch, useSelector } from 'react-redux'; // Annahme: Du verwendest Redux
/*import { toggleFavorite } from '~/store.client/favorite-reducer'; // Annahme: Du hast eine Funktion zum Umschalten der Favoriten im Redux-Store*/

type BookCardProps = { book: Book };

export function BookCard({ book }: BookCardProps) {
/*    const dispatch = useDispatch();
    const favorites = useSelector((state) => state.favorites);

    const isFavorite = favorites.includes(book.id);

    const onFavoriteButtonClicked = () => {
        dispatch(toggleFavorite(book.id));
    };*/

    return (
        <section className="card">
            <div className="card_cover">
                <img alt={'Cover image of ' + book.title} src={book.coverUrl} className="card_cover-img" />
            </div>

            <div className="card_body">
{/*                <div className="flex-none">
                    <FavoriteButton isFavorite={isFavorite} onClick={onFavoriteButtonClicked}></FavoriteButton>
                </div>*/}
                <div className="flex-auto">
                    <h3 className="card_title">{book.title}</h3>
                    <div>{book.author}</div>
                    <div>({book.id})</div>
                </div>
            </div>
        </section>
    );
}

/*type FavoriteButtonProps = { isFavorite: boolean; onClick?: () => void };
function FavoriteButton({ isFavorite = false, onClick }: FavoriteButtonProps) {
    return (
        <button type="button" className="icon-button" onClick={onClick}>
            <Heart strokeWidth={1.5} color={isFavorite ? '#FF0000' : '#000000'} />
        </button>
    );
}*/
