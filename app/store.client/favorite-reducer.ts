// favorite-reducer.tsx
import { createAction, createReducer } from '@reduxjs/toolkit';
import { Book } from '~/models/book';
import { loadFavoritesFromLocalStorage, saveFavoritesToLocalStorage } from '~/storage.server/localStorage';

type FavoriteState = {
    favoriteBooks: Book[];
};

export const favAction = createAction<{ book: Book }>('favorites/fav');  // Action to add a book to favorites
export const notFavAction = createAction<{ bookId: string }>('favorites/notFav'); // Action to remove a book from favorites

const initialState: FavoriteState = {
    favoriteBooks: loadFavoritesFromLocalStorage(),
};

// Remove and add to favoriteBooks array
const favoriteReducer = createReducer(initialState, (builder) => {
    builder.addCase(favAction, (state, action) => {
        state.favoriteBooks.push(action.payload.book);  // Push the new favorite book to the favoriteBooks array
        saveFavoritesToLocalStorage(state.favoriteBooks);  // Save updated favoriteBooks array to LocalStorage
    });

    builder.addCase(notFavAction, (state, action) => {
        state.favoriteBooks = state.favoriteBooks.filter(book => book.id !== action.payload.bookId);  // Remove the book with matching ID from favoriteBooks array
        saveFavoritesToLocalStorage(state.favoriteBooks); // Save updated favoriteBooks array to LocalStorage
    });
});

export default favoriteReducer;
