// localStorage.ts
import { Book } from '~/models/book';

// Favoriten-Funktionen
export const loadFavoritesFromLocalStorage = (): Book[] => {
    if (typeof window !== 'undefined') {
        const favoriteJson = localStorage.getItem('favorites');
        if (favoriteJson) {
            return JSON.parse(favoriteJson);
        }
    }
    return [];
};

export const saveFavoritesToLocalStorage = (favorites: Book[]) => {
    if (typeof window !== 'undefined') {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }
};

export const deleteFavoritesFromLocalStorage = async (id: string) => {
    if (typeof window !== 'undefined') {
        let favorites = loadFavoritesFromLocalStorage();
        favorites = favorites.filter(book => book.id !== id);
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }
};

// Gelesene Bücher-Funktionen
export const loadReadBooksFromLocalStorage = (): Book[] => {
    if (typeof window !== 'undefined') {
        const readBooksJson = localStorage.getItem('readBooks');
        if (readBooksJson) {
            return JSON.parse(readBooksJson);
        }
    }
    return [];
};

export const saveReadBooksToLocalStorage = (readBooks: Book[]) => {
    if (typeof window !== 'undefined') {
        localStorage.setItem('readBooks', JSON.stringify(readBooks));
    }
};
