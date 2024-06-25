
import { Book } from '~/models/book';
import { Theme } from '~/store.client/theme-reducer';

export const loadFavoritesFromLocalStorage = (): Book[] => {
    if (typeof window !== 'undefined') {
        const favoriteJson = localStorage.getItem('favorites');
        if (favoriteJson) {
            return JSON.parse(favoriteJson);
        }
    }
    return [];
};

// Function to save favorites to LocalStorage
export const saveFavoritesToLocalStorage = (favorites: Book[]) => {
    if (typeof window !== 'undefined') { // Check if localStorage is running
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }
};

// Function to load read books from LocalStorage
export const loadReadBooksFromLocalStorage = (): Book[] => {
    if (typeof window !== 'undefined') {
        const readBooksJson = localStorage.getItem('readBooks');
        if (readBooksJson) {
            return JSON.parse(readBooksJson);
        }
    }
    return [];
};

// Function to save read books to LocalStorage
export const saveReadBooksToLocalStorage = (readBooks: Book[]) => {
    if (typeof window !== 'undefined') {
        localStorage.setItem('readBooks', JSON.stringify(readBooks));
    }
};

// Function to load theme from LocalStorage
export const loadThemeFromLocalStorage = (): Theme | null => {
    if (typeof window !== 'undefined') {
        const themeJson = localStorage.getItem('theme');
        if (themeJson) {
            return JSON.parse(themeJson);
        }
    }
    return null;
};

// Function to save theme to LocalStorage
export const saveThemeToLocalStorage = (theme: Theme) => {
    if (typeof window !== 'undefined') {
        localStorage.setItem('theme', JSON.stringify(theme));
    }
};
