import { createFeatureStorage } from './storage-utils';
import { Book } from '~/models/book';
import { Comment } from '~/models/book';


// Create the storage with a unique name for books
const bookStorage = createFeatureStorage<Book>('book');


// Alle Bücher abrufen
export const getAllBooks = () => {
  return bookStorage.getAll();
};

// Ein Buch anhand der ID abrufen
export const getBookById = (id: string) => {
  return bookStorage.getById(id);
};


// Ein Buch aktualisieren
export const updateBook = async (id: string, book: Partial<Book>) => {
  return bookStorage.update({ id: id, ...book });
};


// Einen Kommentar zu einem Buch hinzufügen
export const addCommentToBook = async (bookId: string, commentText: string): Promise<Book> => {
  const book = await getBookById(bookId);
  if (!book) {
    throw new Error(`Book with ID ${bookId} not found`);
  }

  const newComment: Comment = {
    commentId: crypto.randomUUID(),
    text: commentText,
    createdAt: new Date().toISOString(),
  };

  const updatedBook: Book = {
    ...book,
    comments: [...book.comments, newComment],
  };

  await updateBook(bookId, updatedBook);
  return updatedBook;
};