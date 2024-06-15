import { z } from 'zod';
import {Book, Comment} from "~/models/book";

// Schema für ein Buch
const bookSchema = z.object({
  id: z.string(),
  title: z.string(),
  author: z.string(),
  coverUrl: z.string().url(),
  starRating: z.number().min(1).max(5),
  comments: z.array(z.object({
    commentId: z.string(),
    text: z.string(),
    createdAt: z.string()
  })),
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
export async function fetchBookById(bookId: string): Promise<Book> {
  const response = await fetch('https://book-api-gold.vercel.app/api/books');
  if (!response.ok) {
    throw new Error('Failed to fetch books');
  }

  const books = await response.json();
  const book = books.find((book: { id: string }) => book.id === bookId);

  if (!book) {
    throw new Error(`Book with ID ${bookId} not found`);
  }

  const parsedBook = bookDetailSchema.parse(book);

  // Anpassen der Datenstruktur, um dem Book-Typ zu entsprechen
  const formattedBook: Book = {
    id: parsedBook.id,
    title: parsedBook.title,
    author: parsedBook.author,
    coverUrl: parsedBook.coverUrl,
    starRating: parsedBook.starRating,
    comments: parsedBook.comments.map((comment: any) => ({
      commentId: comment.commentId,
      text: comment.text,
      createdAt: comment.createdAt,
    })),
  };

  return formattedBook;
}