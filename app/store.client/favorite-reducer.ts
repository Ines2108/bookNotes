// favorite-reducer.tsx
import { createAction, createReducer } from '@reduxjs/toolkit';

type BookState = 'fav' | 'notFav';
type FavoriteState = {
    favoriteBooks: number[]; // Liste der favorisierten Buch-IDs
};

export const favAction = createAction<{ bookId: number }>('favorites/fav');
export const notFavAction = createAction<{ bookId: number }>('favorites/notFav');

const initialState = {
    favoriteBooks: [],
} as FavoriteState;

const favoriteReducer = createReducer(initialState, (builder) => {
    builder.addCase(favAction, (state, action) => {
        state.favoriteBooks.push(action.payload.bookId); // Füge die Buch-ID zur Liste der favorisierten Bücher hinzu
    });
    builder.addCase(notFavAction, (state, action) => {
        state.favoriteBooks = state.favoriteBooks.filter(bookId => bookId !== action.payload.bookId); // Entferne die Buch-ID aus der Liste der favorisierten Bücher
    });
});

export default favoriteReducer;
