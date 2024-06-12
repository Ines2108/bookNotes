import { z } from 'zod';

// Schema für ein Buch
const bookSchema = z.object({
  id: z.string(),
  title: z.string(),
  author: z.string(),
  coverUrl: z.string().url(),
  starRating: z.number().min(1).max(5),
  ratingComment: z.string(),
});

// Schema für detaillierte Buchdaten (ohne zusätzliche Felder in diesem Fall)
const bookDetailSchema = bookSchema;

// Schema für ein Array von Büchern
const booksSchema = z.array(bookSchema);

// Funktion zum Abrufen der Bücherliste
export async function fetchBooks() {
  const response = await fetch('https://book-api-gold.vercel.app/api/books');
  const books = await response.json();

  const parsedBooks = booksSchema.parse(books);
  return parsedBooks;
}

// Funktion zum Abrufen eines Buchs anhand der ID
export async function fetchBookById(bookId: string) {
  const response = await fetch(`https://book-api-gold.vercel.app/api/books/`);
  if (!response.ok) {
    throw new Error('Failed to fetch books');
  }

  const books = await response.json();
  const book = books.find((book: { id: string }) => book.id === bookId);

  if (!book) {
    throw new Error(`Book with ID ${bookId} not found`);
  }

  const parsedBook = bookDetailSchema.parse(book);
  return parsedBook;
}