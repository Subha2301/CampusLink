
import { useState } from "react";
import { Link } from "react-router-dom";
import { GraduationCap, Menu, X, ArrowRight } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">

        <Link
          to="/"
          onClick={() => {
            closeMenu();
            if (window.location.pathname === "/") {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          className="flex cursor-pointer items-center gap-2.5"
        >
          <div className="rounded-xl bg-blue-600 p-2.5 text-white shadow-lg shadow-blue-200">
            <GraduationCap size={25} />
          </div>

          <span className="text-xl font-extrabold tracking-tight text-slate-900">
            Campus<span className="text-blue-600">Link</span>
          </span>
        </Link>

        <div className="hidden items-center gap-9 md:flex">
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="cursor-pointer text-sm font-semibold text-blue-600"
          >
            Home
          </Link>

          <a
            href="/#features"
            className="cursor-pointer text-sm font-medium text-slate-600 transition hover:text-blue-600"
          >
            Features
          </a>

          <a
            href="/#how-it-works"
            className="cursor-pointer text-sm font-medium text-slate-600 transition hover:text-blue-600"
          >
            How It Works
          </a>
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            to="/login"
            className="cursor-pointer rounded-xl px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-blue-200 transition hover:bg-blue-700"
          >
            Get Started <ArrowRight size={16} />
          </Link>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="cursor-pointer rounded-xl border border-slate-200 p-2 text-slate-700 md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-slate-100 bg-white px-5 py-5 shadow-lg md:hidden">
          <div className="flex flex-col gap-4">
            <Link
              onClick={() => {
                closeMenu();
                if (window.location.pathname === "/") {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
              to="/"
              className="cursor-pointer font-semibold text-blue-600"
            >
              Home
            </Link>

            <a
              onClick={closeMenu}
              href="/#features"
              className="cursor-pointer font-medium text-slate-600"
            >
              Features
            </a>

            <a
              onClick={closeMenu}
              href="/#how-it-works"
              className="cursor-pointer font-medium text-slate-600"
            >
              How It Works
            </a>

            <div className="flex gap-3 border-t border-slate-100 pt-4">
              <Link
                onClick={closeMenu}
                to="/login"
                className="flex-1 cursor-pointer rounded-xl border border-slate-200 py-3 text-center text-sm font-semibold"
              >
                Login
              </Link>

              <Link
                onClick={closeMenu}
                to="/register"
                className="flex-1 cursor-pointer rounded-xl bg-blue-600 py-3 text-center text-sm font-semibold text-white"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
