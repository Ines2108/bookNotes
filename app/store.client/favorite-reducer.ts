// favorite-reducer.tsx
import { createAction, createReducer } from '@reduxjs/toolkit';
import { Book } from '~/models/book'; // Annahme: Das Book-Modell wurde definiert

type BookState = 'fav' | 'notFav';
type FavoriteState = {
    favoriteBooks: Book[]; // Liste der favorisierten Bücher
};

export const favAction = createAction<{ book: Book }>('favorites/fav');
export const notFavAction = createAction<{ bookId: string }>('favorites/notFav');

const initialState = {
    favoriteBooks: [],
} as FavoriteState;

const favoriteReducer = createReducer(initialState, (builder) => {
    builder.addCase(favAction, (state, action) => {
        state.favoriteBooks.push(action.payload.book); // Füge das Buch zur Liste der favorisierten Bücher hinzu
    });
    builder.addCase(notFavAction, (state, action) => {
        state.favoriteBooks = state.favoriteBooks.filter(book => book.id.toString() !== action.payload.bookId);
    });

});

export default favoriteReducer;
