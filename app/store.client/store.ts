import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import favoriteReducer from "~/store.client/favorite-reducer";
import readReducer from "~/store.client/read-reducer";
import themeReducer from "~/store.client/theme-reducer";

// Configure Reducer to manage the states
export const store = configureStore({
  reducer: {
    favorite: favoriteReducer,
    read: readReducer,
    theme: themeReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Export custom hooks to use the dispatch and select function with the correct types
export const useAppDispatch = useDispatch.withTypes<AppDispatch>(); //custom hook to change the state of the store
export const useAppSelector = useSelector.withTypes<RootState>(); //custom hook to select the state of the store

export default store;
