// read-reducer.tsx
import { createAction, createReducer } from '@reduxjs/toolkit';
import { Book } from '~/models/book';
import { loadReadBooksFromLocalStorage, saveReadBooksToLocalStorage } from '~/storage.server/localStorage';

type ReadState = {
    readBooks: Book[];
};

export const readAction = createAction<{ book: Book }>('read/read');
export const notReadAction = createAction<{ bookId: string }>('read/notRead');

const initialState: ReadState = {
    readBooks: loadReadBooksFromLocalStorage(),
};

const readReducer = createReducer(initialState, (builder) => {
    builder.addCase(readAction, (state, action) => {
        state.readBooks.push(action.payload.book);
        saveReadBooksToLocalStorage(state.readBooks);
    });

    builder.addCase(notReadAction, (state, action) => {
        state.readBooks = state.readBooks.filter(book => book.id !== action.payload.bookId);
        saveReadBooksToLocalStorage(state.readBooks);
    });
});

export default readReducer;
