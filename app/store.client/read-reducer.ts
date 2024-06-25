// read-reducer.tsx
import { createAction, createReducer } from '@reduxjs/toolkit';
import { Book } from '~/models/book';
import { loadReadBooksFromLocalStorage, saveReadBooksToLocalStorage } from '~/storage.server/localStorage';

type ReadState = {
    readBooks: Book[];
};

export const readAction = createAction<{ book: Book }>('read/read'); // Action to add a book to readBooks
export const notReadAction = createAction<{ bookId: string }>('read/notRead'); // Action to remove a book from readBooks

const initialState: ReadState = {
    readBooks: loadReadBooksFromLocalStorage(),
};

// Remove and add to readBooks array
const readReducer = createReducer(initialState, (builder) => {
    builder.addCase(readAction, (state, action) => {
        state.readBooks.push(action.payload.book); // Push the read book to the readBook array
        saveReadBooksToLocalStorage(state.readBooks);
    });

    builder.addCase(notReadAction, (state, action) => {
        state.readBooks = state.readBooks.filter(book => book.id !== action.payload.bookId); // Remove the read book from the array
        saveReadBooksToLocalStorage(state.readBooks);
    });
});

export default readReducer;
