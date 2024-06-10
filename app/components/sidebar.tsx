import { Home, LayoutGrid, ListMusic } from 'lucide-react';
import { Link } from '@remix-run/react';

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

          <Link to="/app/library" className="sidebar_link">
            <LayoutGrid />
            Personal Bookshelf
          </Link>

          <Link to="/app/playlists" className="sidebar_link">
            <ListMusic />
            Read Books
          </Link>
        </div>
      </section>

    </div>
  );
}
