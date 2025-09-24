import { Link } from '@tanstack/react-router';
import { ListTodo, Home } from 'lucide-react';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 flex items-center">
          <Link to="/" className="mr-6 flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <ListTodo className="h-5 w-5 text-white" />
            </div>
            <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              TodoApp
            </span>
          </Link>
          <nav className="flex items-center gap-6 text-sm">
            <Link
              to="/"
              className="transition-colors hover:text-foreground/80 text-foreground/60 flex items-center gap-1"
              activeProps={{ className: 'text-foreground font-semibold' }}
            >
              <Home className="h-4 w-4" />
              Home
            </Link>
            <Link
              to="/todo"
              className="transition-colors hover:text-foreground/80 text-foreground/60 flex items-center gap-1"
              activeProps={{ className: 'text-foreground font-semibold' }}
            >
              <ListTodo className="h-4 w-4" />
              To-Do List
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;