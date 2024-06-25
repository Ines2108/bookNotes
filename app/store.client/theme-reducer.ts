// theme-reducer.ts
import { createAction, createReducer } from '@reduxjs/toolkit';

export type Theme = 'dark' | 'light';

export const setThemeAction = createAction<Theme>('theme/set');

import { loadThemeFromLocalStorage, saveThemeToLocalStorage } from '~/storage.server/localStorage';

type ThemeState = {
    theme: Theme;
};

const initialState: ThemeState = {
    theme: loadThemeFromLocalStorage() || 'light',
};

const themeReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(setThemeAction, (state, action) => {
            state.theme = action.payload;
            saveThemeToLocalStorage(state.theme);
        })
        .addDefaultCase((state) => {
            const loadedTheme = loadThemeFromLocalStorage();
            if (loadedTheme) {
                state.theme = loadedTheme;
            }
        });
});

export default themeReducer;
