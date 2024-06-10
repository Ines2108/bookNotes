import {
  BookHeadphones,
  BookMarked,
  BookOpen,
  BookOpenIcon,
  FileArchive,
  FileText,
  Home,
  LayoutGrid,
  ListMusic
} from 'lucide-react';
import { Link } from '@remix-run/react';
import Bookshelf from "~/routes/app.bookshelf";

export function Sidebar() {
  return (
    <div className="sidebar">
      <section>
        <h2 className="mb-2">Discover</h2>

        <div className="space-y-1">
          <Link to="/app" className="sidebar_link">
            <Home />
            Book Library
          </Link>

          <Link to="/app/bookshelf" className="sidebar_link">
            <BookOpen />
            Personal Bookshelf
          </Link>

          <Link to="/app/readBooks" className="sidebar_link">
            <BookMarked />
            Read Books
          </Link>
        </div>
      </section>

    </div>
  );
}
