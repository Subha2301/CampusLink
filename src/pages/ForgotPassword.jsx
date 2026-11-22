
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  GraduationCap,
  Mail,
  ArrowRight,
  ArrowLeft,
  LockKeyhole,
  CheckCircle2,
} from "lucide-react";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setError("Please enter your email address.");
      return;
    }

    setError("");
    setSuccess(
      "Email submitted successfully! Password reset functionality will be connected with the backend later."
    );
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <main className="flex min-h-[650px] items-center justify-center px-5 py-16 sm:px-8">
        <div className="grid w-full max-w-5xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-200/60 md:grid-cols-2">

          {/* Left Section */}
          <div className="relative overflow-hidden bg-gradient-to-br from-blue-700 to-indigo-700 p-8 text-white sm:p-12">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-xl bg-white/15 px-3 py-2">
                <GraduationCap size={25} />
                <span className="text-lg font-bold">CampusLink</span>
              </div>

              <div className="mt-14">
                <div className="inline-flex rounded-2xl bg-white/15 p-4">
                  <LockKeyhole size={35} />
                </div>

                <h1 className="mt-7 text-3xl font-extrabold leading-tight sm:text-4xl">
                  Don't worry!
                  <span className="mt-2 block text-blue-100">
                    We've got you covered.
                  </span>
                </h1>

                <p className="mt-5 text-sm leading-7 text-blue-100 sm:text-base">
                  It happens to everyone. Enter your registered email
                  address and we'll help you get back to your CampusLink account.
                </p>
              </div>
            </div>

            <p className="relative mt-16 text-xs text-blue-200">
              CampusLink — Connect. Learn. Grow.
            </p>
          </div>

          {/* Right Section */}
          <div className="flex items-center p-6 sm:p-12">
            <div className="mx-auto w-full max-w-md">

              <Link
                to="/login"
                className="mb-9 inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-blue-600"
              >
                <ArrowLeft size={17} />
                Back to Login
              </Link>

              <div className="mb-8">
                <span className="text-sm font-bold tracking-wider text-blue-600">
                  ACCOUNT RECOVERY
                </span>

                <h2 className="mt-3 text-3xl font-extrabold text-slate-900">
                  Forgot Password?
                </h2>

                <p className="mt-4 text-sm leading-7 text-slate-500">
                  Enter the email address associated with your account.
                  We'll help you reset your password.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
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
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setError("");
                        setSuccess("");
                      }}
                      placeholder="you@example.com"
                      required
                      className="w-full rounded-xl border border-slate-200 bg-white py-3.5 pl-11 pr-4 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                    />
                  </div>
                </div>

                {error && (
                  <p role="alert" className="rounded-xl bg-red-50 p-3 text-sm text-red-600">
                    {error}
                  </p>
                )}

                {success && (
                  <div role="status" className="flex gap-2 rounded-xl bg-green-50 p-3 text-sm text-green-700">
                    <CheckCircle2 size={19} className="shrink-0" />
                    {success}
                  </div>
                )}

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3.5 font-semibold text-white shadow-lg shadow-blue-200 transition hover:-translate-y-0.5 hover:bg-blue-700"
                >
                  Send Reset Link
                  <ArrowRight size={18} />
                </button>
              </form>

              <p className="mt-8 text-center text-sm text-slate-500">
                Remember your password?{" "}
                <Link
                  to="/login"
                  className="font-bold text-blue-600 hover:text-blue-700"
                >
                  Login
                </Link>
              </p>

            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default ForgotPassword;
