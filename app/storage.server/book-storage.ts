import { createFeatureStorage } from './storage-utils';
import { Book } from '~/models/book';
import { Comment } from '~/models/book';


// Create the storage with a unique name for books
const bookStorage = createFeatureStorage<Book>('book');


//  Retrieve all books
export const getAllBooks = () => {
  return bookStorage.getAll();
};

// Retrieve book with ID
export const getBookById = (id: string) => {
  return bookStorage.getById(id);
};


// Update a book
export const updateBook = async (id: string, book: Partial<Book>) => {
  return bookStorage.update({ id: id, ...book });
};


// Add Comments to book
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