// localStorage.ts
import { Book } from '~/models/book';
import { Theme } from '~/store.client/theme-reducer';

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

export const loadThemeFromLocalStorage = (): Theme | null => {
    if (typeof window !== 'undefined') {
        const themeJson = localStorage.getItem('theme');
        if (themeJson) {
            return JSON.parse(themeJson);
        }
    }
    return null;
};

export const saveThemeToLocalStorage = (theme: Theme) => {
    if (typeof window !== 'undefined') {
        localStorage.setItem('theme', JSON.stringify(theme));
    }
};
