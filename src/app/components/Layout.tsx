import { NavLink, Outlet } from "react-router";
import { Film, Menu, X } from "lucide-react";
import { useState } from "react";

export function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-black text-white font-sans selection:bg-orange-500 selection:text-white">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="bg-orange-500 p-2 rounded-lg">
                <Film className="w-6 h-6 text-black" />
              </div>
              <span className="font-bold text-xl tracking-wider text-white">
                FILMMAKING<span className="text-orange-500">.</span>PRO
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-sm font-semibold tracking-wide transition-colors duration-200 uppercase ${
                      isActive
                        ? "text-orange-500"
                        : "text-neutral-400 hover:text-white"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <NavLink
                to="/register"
                className="bg-orange-500 hover:bg-orange-600 text-black px-6 py-2.5 rounded-full font-bold text-sm tracking-wide transition-all uppercase"
              >
                Enroll Now
              </NavLink>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-neutral-300 hover:text-white p-2"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-neutral-900 border-b border-white/10">
            <div className="px-2 pt-2 pb-4 space-y-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `block px-3 py-3 rounded-md text-base font-medium uppercase ${
                      isActive
                        ? "bg-orange-500/10 text-orange-500"
                        : "text-neutral-400 hover:bg-white/5 hover:text-white"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col relative">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-neutral-950 border-t border-white/5 py-12 text-center">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Film className="w-5 h-5 text-orange-500" />
            <span className="font-bold text-lg text-white">FILMMAKING.PRO</span>
          </div>
          <p className="text-neutral-500 text-sm">
            © {new Date().getFullYear()} Online Film-Making Programme. All rights reserved.
          </p>
          <div className="flex gap-4">
            <span className="text-neutral-400 text-sm">No big camera needed.</span>
            <span className="text-neutral-400 text-sm">Mobile is enough.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
