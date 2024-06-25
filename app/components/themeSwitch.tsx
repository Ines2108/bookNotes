import React from 'react';
import { useAppDispatch, useAppSelector } from '~/store.client/store';
import { setThemeAction } from '~/store.client/theme-reducer';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeSwitch: React.FC = () => {
    const dispatch = useAppDispatch();
    const currentTheme = useAppSelector((state) => state.theme.theme);

    const handleThemeChange = () => {
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        dispatch(setThemeAction(newTheme));
    };

    return (
        <div
            onClick={handleThemeChange}
            className={`relative w-14 h-8 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer transition-colors duration-300 ${currentTheme === 'dark' ? 'bg-gray-700' : ''}`}
        >
            <div className="absolute left-2 flex items-center justify-center h-full">
                <FaSun className="text-yellow-500 w-4 h-4" />
            </div>

            <div
                className={`absolute bg-white w-6 h-6 rounded-full shadow-md transition-transform duration-300 z-10 ${currentTheme === 'dark' ? 'transform translate-x-full' : 'transform translate-x-0'}`}
                style={{ left: currentTheme === 'dark' ? 'calc(100% - 52px)' : '5px' }}
            ></div>

            <div className="absolute right-2 flex items-center justify-center h-full">
                <FaMoon className="text-gray-500 w-4 h-4" />
            </div>
        </div>
    );
};

export default ThemeSwitch;
