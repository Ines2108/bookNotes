// favorite-reducer.tsx
import { createAction, createReducer } from '@reduxjs/toolkit';
import { Book } from '~/models/book';
import { loadFavoritesFromLocalStorage, saveFavoritesToLocalStorage } from '~/storage.server/localStorage';

type FavoriteState = {
    favoriteBooks: Book[];
};

export const favAction = createAction<{ book: Book }>('favorites/fav');
export const notFavAction = createAction<{ bookId: string }>('favorites/notFav');

const initialState: FavoriteState = {
    favoriteBooks: loadFavoritesFromLocalStorage(),
};

const favoriteReducer = createReducer(initialState, (builder) => {
    builder.addCase(favAction, (state, action) => {
        state.favoriteBooks.push(action.payload.book);
        saveFavoritesToLocalStorage(state.favoriteBooks);
    });

    builder.addCase(notFavAction, (state, action) => {
        state.favoriteBooks = state.favoriteBooks.filter(book => book.id !== action.payload.bookId);
        saveFavoritesToLocalStorage(state.favoriteBooks);
    });
});

export default favoriteReducer;
