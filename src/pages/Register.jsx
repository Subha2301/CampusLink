
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  GraduationCap,
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Building2,
  BookOpen,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    college: "",
    department: "",
    role: "Student",
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

    if (formData.password.length < 6) {
      setError("Password must contain at least 6 characters.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Password and Confirm Password do not match.");
      return;
    }

    setError("");
    setSuccess("Form validation successful! Backend registration will be connected later.");

    console.log("Registration form data:", formData);
  };

  const inputClass =
    "w-full rounded-xl border border-slate-200 bg-white py-3 pl-11 pr-4 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100";

  const labelClass =
    "mb-2 block text-sm font-semibold text-slate-700";

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
                Your journey to connect and grow starts here.
              </h1>

              <p className="mt-5 text-sm leading-7 text-blue-100 sm:text-base">
                Join your campus community. Connect with mentors,
                collaborate with students and discover new opportunities.
              </p>
            </div>

            <div className="relative mt-10 space-y-5">
              {[
                "Connect with seniors and alumni",
                "Discover mentorship opportunities",
                "Collaborate on exciting projects",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="shrink-0 text-blue-200" />
                  <span className="text-sm font-medium text-blue-50">{item}</span>
                </div>
              ))}
            </div>

            <p className="relative mt-12 text-xs text-blue-200">
              CampusLink — Connect. Learn. Grow.
            </p>
          </div>

          {/* Registration Form */}
          <div className="p-6 sm:p-10 lg:col-span-3 lg:p-12">
            <div className="mx-auto max-w-xl">
              <div className="mb-8">
                <span className="text-sm font-bold tracking-wider text-blue-600">
                  CREATE ACCOUNT
                </span>

                <h2 className="mt-3 text-3xl font-extrabold text-slate-900">
                  Join CampusLink
                </h2>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Fill in your details to create your campus profile.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">

                {/* Full Name */}
                <div>
                  <label className={labelClass}>Full Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className={inputClass}
                      required
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className={labelClass}>Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input
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

                {/* College */}
                <div>
                  <label className={labelClass}>College Name</label>
                  <div className="relative">
                    <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input
                      type="text"
                      name="college"
                      value={formData.college}
                      onChange={handleChange}
                      placeholder="Enter your college name"
                      className={inputClass}
                      required
                    />
                  </div>
                </div>

                {/* Department */}
                <div>
                  <label className={labelClass}>Department</label>
                  <div className="relative">
                    <BookOpen className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input
                      type="text"
                      name="department"
                      value={formData.department}
                      onChange={handleChange}
                      placeholder="e.g. Computer Science"
                      className={inputClass}
                      required
                    />
                  </div>
                </div>

                {/* Role */}
                <div>
                  <label className={labelClass}>Select Your Role</label>
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  >
                    <option value="Student">Student / Learner</option>
                    <option value="Senior">Senior / Mentor</option>
                    <option value="Alumni">Alumni</option>
                  </select>
                </div>

                {/* Password */}
                <div>
                  <label className={labelClass}>Password</label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Create a password"
                      className={`${inputClass} pr-12`}
                      minLength={6}
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      aria-label={showPassword ? "Hide password" : "Show password"}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
                    >
                      {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
                    </button>
                  </div>
                </div>

                {/* Confirm Password */}
                <div>
                  <label className={labelClass}>Confirm Password</label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      placeholder="Confirm your password"
                      className={`${inputClass} pr-12`}
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
                    >
                      {showConfirmPassword ? <EyeOff size={19} /> : <Eye size={19} />}
                    </button>
                  </div>
                </div>

                {/* Error and Success */}
                {error && (
                  <p role="alert" className="rounded-xl bg-red-50 p-3 text-sm text-red-600">
                    {error}
                  </p>
                )}

                {success && (
                  <p role="status" className="rounded-xl bg-green-50 p-3 text-sm text-green-700">
                    {success}
                  </p>
                )}

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3.5 font-semibold text-white shadow-lg shadow-blue-200 transition hover:-translate-y-0.5 hover:bg-blue-700"
                >
                  Create Account <ArrowRight size={18} />
                </button>

              </form>

              <p className="mt-7 text-center text-sm text-slate-500">
                Already have an account?{" "}
                <Link to="/login" className="font-bold text-blue-600 hover:text-blue-700">
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

export default Register;
