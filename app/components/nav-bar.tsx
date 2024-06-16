import { Link } from '@remix-run/react';
import logo from '../src/img/logo2.png';

export function NavBar() {
  return (
    <header className="border-b items-baseline py-4 px-5 text-white bg-gradient-to-r from-[#8290B6] to-[#D3D9E9] shadow-inner">
      <nav className="flex gap-3 text-md flex-col items-center ">
        <Link to="/" className="px-3 py-1 font-bold hover:bg-[#98A5C8] rounded-lg tracking-tight uppercase">
          <img src={logo} alt="logo" className="w-20"/>
        </Link>


        <Link to="/about" className="px-3 py-1 font-medium hover:bg-[#98A5C8] rounded-lg uppercase">
          About BookNotes
        </Link>
      </nav>
    </header>
  );
}
