// read-reducer.tsx
import { createAction, createReducer } from '@reduxjs/toolkit';
import { Book } from '~/models/book'; // Annahme: Das Book-Modell wurde definiert

type BookState = 'read' | 'notRead';

type ReadState = {
    readBooks: Book[]; // Liste der gelesenen Bücher
};

export const readAction = createAction<{ book: Book }>('read/read');
export const notReadAction = createAction<{ bookId: string }>('read/notRead');

const initialState = {
    readBooks: [],
} as ReadState;

const readReducer = createReducer(initialState, (builder) => {
    builder.addCase(readAction, (state, action) => {
        state.readBooks.push(action.payload.book); // Füge das Buch zur Liste der favorisierten Bücher hinzu
    });
    builder.addCase(notReadAction, (state, action) => {
        state.readBooks = state.readBooks.filter(book => book.id.toString() !== action.payload.bookId);
    });

});

export default readReducer;
