// App.tsx
import styles from '~/styles/style.css?url';
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';
import { QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import { NavBar } from './components/nav-bar';
import { store } from './store.client/store';
import { queryClient } from './lib/clientQueryClient';
import { useAppSelector } from '~/store.client/store';
import React, { useEffect } from 'react';

export const links = () => {
    return [{ rel: 'stylesheet', href: styles }];
};

export function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <Meta />
            <Links />
        </head>
        <body>
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>{children}</Provider>
        </QueryClientProvider>
        <ScrollRestoration />
        <Scripts />
        </body>
        </html>
    );
}

// This is the base layout, feel free to adapt
export default function App() {
    const theme = useAppSelector((state) => state.theme.theme);

    useEffect(() => {
        const root = document.documentElement;
        root.classList.toggle('dark', theme === 'dark');
    }, [theme]);

    return (
        <Layout>
            <NavBar />
            <Outlet />
        </Layout>
    );
}
