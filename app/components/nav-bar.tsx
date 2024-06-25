import { Link } from '@remix-run/react';
import logo from '../src/img/logo2.png';
import ThemeSwitch from '~/components/themeSwitch';
import { useAppSelector } from '~/store.client/store';

export function NavBar() {
    const currentTheme = useAppSelector((state) => state.theme.theme);

    return (
        <header className={`border-b items-baseline py-4 px-5 text-white shadow-inner ${currentTheme === 'dark' ? 'bg-gradient-to-r from-[#3D4253] to-[#7A839C]' : 'bg-gradient-to-r from-[#8290B6] to-[#D3D9E9]'}`}>
            <nav className="flex gap-3 text-md flex-col items-center">
                <Link to="/" className="px-3 py-1 font-bold hover:bg-[#98A5C8] rounded-lg tracking-tight uppercase">
                    <img src={logo} alt="logo" className="w-20"/>
                </Link>
                <Link to="/about" className="px-3 py-1 font-medium hover:bg-[#98A5C8] rounded-lg uppercase">
                    About BookNotes
                </Link>
                <ThemeSwitch />
            </nav>
        </header>
    );
}
