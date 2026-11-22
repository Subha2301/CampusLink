
import { Link } from "react-router-dom";
import { GraduationCap, ArrowUp } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-slate-950 px-5 text-white sm:px-8">
      <div className="mx-auto max-w-7xl py-12">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">

          <div>
            <Link to="/" className="inline-flex items-center gap-2.5">
              <div className="rounded-xl bg-blue-600 p-2.5">
                <GraduationCap size={24} />
              </div>
              <span className="text-xl font-extrabold">
                CampusLink
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
              Bringing students, seniors and alumni together to connect,
              learn and grow.
            </p>
          </div>

          <div>
            <h3 className="font-bold">Quick Links</h3>
            <div className="mt-5 flex flex-col items-start gap-3 text-sm text-slate-400">
              <Link to="/" className="transition hover:text-white">Home</Link>
              <Link to="/login" className="transition hover:text-white">Login</Link>
              <Link to="/register" className="transition hover:text-white">Register</Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold">Our Platform</h3>
            <div className="mt-5 flex flex-col items-start gap-3 text-sm text-slate-400">
              <a href="#features" className="transition hover:text-white">Features</a>
              <a href="#how-it-works" className="transition hover:text-white">How It Works</a>
              <p>Connect. Learn. Grow.</p>
            </div>
          </div>

        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-7 text-center sm:flex-row">
          <p className="text-xs text-slate-500">
            © 2026 CampusLink. All rights reserved.
          </p>
          <a href="#" aria-label="Back to top" className="flex items-center gap-2 text-sm text-slate-400 transition hover:text-white">
            Back to top <ArrowUp size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
