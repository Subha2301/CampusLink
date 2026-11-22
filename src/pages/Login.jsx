
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  GraduationCap,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  Users,
  BookOpen,
  FolderKanban,
  MessageCircle,
  CheckCircle2,
} from "lucide-react";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError("");
    setSuccess("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setError("Please enter your email and password.");
      return;
    }

    setError("");
    setSuccess(
      "Form validation successful! Backend login will be connected later."
    );

    console.log("Login form data:", {
      ...formData,
      rememberMe,
    });
  };

  const inputClass =
    "w-full rounded-xl border border-slate-200 bg-white py-3.5 pl-11 pr-12 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100";

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <main className="px-5 py-12 sm:px-8 sm:py-16">
        <div className="mx-auto grid max-w-6xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-200/60 lg:grid-cols-5">

          {/* Left Side */}
          <div className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 p-8 text-white sm:p-12 lg:col-span-2 lg:flex lg:flex-col lg:justify-between">

            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
            <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-indigo-300/20 blur-2xl" />

            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-xl bg-white/15 px-3 py-2 backdrop-blur">
                <GraduationCap size={25} />
                <span className="text-lg font-bold">CampusLink</span>
              </div>

              <h1 className="mt-10 text-3xl font-extrabold leading-tight sm:text-4xl">
                Welcome Back!
                <span className="mt-2 block text-blue-100">
                  Your campus community is waiting.
                </span>
              </h1>

              <p className="mt-5 text-sm leading-7 text-blue-100 sm:text-base">
                Sign in to reconnect with mentors, explore opportunities
                and continue your learning journey.
              </p>
            </div>

            <div className="relative mt-10 grid grid-cols-2 gap-3">

              <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur">
                <Users size={24} className="mb-3 text-blue-100" />
                <h3 className="text-sm font-bold">Mentorship</h3>
                <p className="mt-1 text-xs text-blue-100">
                  Learn from seniors
                </p>
              </div>

              <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur">
                <BookOpen size={24} className="mb-3 text-blue-100" />
                <h3 className="text-sm font-bold">Community</h3>
                <p className="mt-1 text-xs text-blue-100">
                  Share your ideas
                </p>
              </div>

              <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur">
                <FolderKanban size={24} className="mb-3 text-blue-100" />
                <h3 className="text-sm font-bold">Projects</h3>
                <p className="mt-1 text-xs text-blue-100">
                  Build together
                </p>
              </div>

              <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur">
                <MessageCircle size={24} className="mb-3 text-blue-100" />
                <h3 className="text-sm font-bold">Messaging</h3>
                <p className="mt-1 text-xs text-blue-100">
                  Stay connected
                </p>
              </div>

            </div>

            <p className="relative mt-10 text-xs text-blue-200">
              CampusLink — Connect. Learn. Grow.
            </p>
          </div>

          {/* Login Form */}
          <div className="flex items-center p-6 sm:p-10 lg:col-span-3 lg:p-16">

            <div className="mx-auto w-full max-w-md">

              <div className="mb-9">
                <span className="text-sm font-bold tracking-wider text-blue-600">
                  WELCOME BACK
                </span>

                <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
                  Login to CampusLink
                </h2>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  Enter your credentials to access your account.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Email Address
                  </label>

                  <div className="relative">
                    <Mail
                      size={19}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className={inputClass}
                      required
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <div className="mb-2 flex items-center justify-between gap-2">
                    <label
                      htmlFor="password"
                      className="text-sm font-semibold text-slate-700"
                    >
                      Password
                    </label>

                    <Link
                      to="/forgot-password"
                      className="text-xs font-semibold text-blue-600 transition hover:text-blue-700 sm:text-sm"
                    >
                      Forgot Password?
                    </Link>
                  </div>

                  <div className="relative">
                    <Lock
                      size={19}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Enter your password"
                      className={inputClass}
                      required
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-slate-700"
                    >
                      {showPassword ? (
                        <EyeOff size={19} />
                      ) : (
                        <Eye size={19} />
                      )}
                    </button>
                  </div>
                </div>

                {/* Remember Me */}
                <div className="flex items-center gap-2">
                  <input
                    id="rememberMe"
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="h-4 w-4 cursor-pointer rounded border-slate-300 accent-blue-600"
                  />

                  <label
                    htmlFor="rememberMe"
                    className="cursor-pointer text-sm text-slate-600"
                  >
                    Remember me
                  </label>
                </div>

                {/* Error */}
                {error && (
                  <p
                    role="alert"
                    className="rounded-xl bg-red-50 p-3 text-sm text-red-600"
                  >
                    {error}
                  </p>
                )}

                {/* Success */}
                {success && (
                  <p
                    role="status"
                    className="rounded-xl bg-green-50 p-3 text-sm text-green-700"
                  >
                    {success}
                  </p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3.5 font-semibold text-white shadow-lg shadow-blue-200 transition hover:-translate-y-0.5 hover:bg-blue-700"
                >
                  Login to Account
                  <ArrowRight size={18} />
                </button>

              </form>

              <div className="my-8 flex items-center gap-4">
                <div className="h-px flex-1 bg-slate-200" />
                <span className="text-xs font-medium text-slate-400">
                  NEW TO CAMPUSLINK?
                </span>
                <div className="h-px flex-1 bg-slate-200" />
              </div>

              <p className="text-center text-sm text-slate-500">
                Don't have an account?{" "}
                <Link
                  to="/register"
                  className="font-bold text-blue-600 transition hover:text-blue-700"
                >
                  Create Account
                </Link>
              </p>

              <div className="mt-8 flex items-center justify-center gap-2 text-xs text-slate-400">
                <CheckCircle2 size={15} className="text-green-500" />
                Connect. Learn. Grow.
              </div>

            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Login;
