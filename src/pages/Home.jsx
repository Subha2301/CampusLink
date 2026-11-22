
import { Link } from "react-router-dom";
import {
  Users,
  GraduationCap,
  FolderKanban,
  MessageCircle,
  ArrowRight,
  BookOpen,
  Lightbulb,
  Sparkles,
  CheckCircle2,
  Network,
} from "lucide-react";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const features = [
  {
    icon: Users,
    title: "Find Your Mentors",
    description: "Connect with seniors and alumni who can guide your academic and career journey.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: GraduationCap,
    title: "Campus Community",
    description: "Ask questions, share knowledge and participate in meaningful discussions.",
    color: "bg-violet-50 text-violet-600",
  },
  {
    icon: FolderKanban,
    title: "Build Projects",
    description: "Discover exciting projects, find teammates and turn your ideas into reality.",
    color: "bg-indigo-50 text-indigo-600",
  },
  {
    icon: MessageCircle,
    title: "Stay Connected",
    description: "Communicate with your mentors and peers through direct messaging.",
    color: "bg-sky-50 text-sky-600",
  },
];

const steps = [
  {
    number: "01",
    title: "Create Your Account",
    description: "Join CampusLink and create your student, mentor or alumni profile.",
  },
  {
    number: "02",
    title: "Explore & Connect",
    description: "Discover mentors, join discussions and explore collaborative projects.",
  },
  {
    number: "03",
    title: "Learn & Grow",
    description: "Build meaningful connections and grow together with your campus community.",
  },
];

function Home() {
  return (
    <div className="min-h-screen  bg-white">
      <Navbar />

      {/*home*/}
      <section id="home" className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-indigo-200/30 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 sm:px-8 md:grid-cols-2 md:py-28 lg:gap-20">

          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-xs font-semibold text-blue-700 shadow-sm sm:text-sm">
              <Sparkles size={16} />
              CONNECT. LEARN. GROW.
            </div>

            <h1 className="text-4xl font-extrabold leading-[1.15] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Your Campus.
              <span className="mt-2 block text-blue-600">Your People.</span>
              <span className="mt-2 block">Your Growth.</span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
              A place where students, seniors and alumni come together.
              Find mentors, share knowledge, collaborate on projects and
              build connections that matter.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/register"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white shadow-xl shadow-blue-200 transition hover:-translate-y-1 hover:bg-blue-700"
              >
                Get Started <ArrowRight size={19} />
              </Link>

              <Link
                to="/login"
                className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-7 py-4 font-semibold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50"
              >
                Login to Your Account
              </Link>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-500">
              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-green-600" />
                Student Community
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-green-600" />
                Mentorship
              </span>
            </div>
          </div>

          {/* Hero Illustration */}
          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute inset-5 rounded-full bg-blue-200/50 blur-3xl" />

            <div className="relative rounded-3xl border border-white bg-white/90 p-5 shadow-2xl shadow-blue-200/50 sm:p-8">
              <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                <div>
                  <p className="text-sm text-slate-500">Welcome to</p>
                  <h2 className="mt-1 text-2xl font-extrabold text-slate-900">
                    CampusLink
                  </h2>
                </div>
                <div className="rounded-2xl bg-blue-600 p-3.5 text-white shadow-lg shadow-blue-200">
                  <Network size={29} />
                </div>
              </div>

              <div className="mt-6 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 p-5 text-white sm:p-6">
                <p className="text-sm text-blue-100">Your journey starts here</p>
                <h3 className="mt-2 text-xl font-bold sm:text-2xl">
                  Learn from each other.
                </h3>
                <p className="mt-2 text-sm leading-6 text-blue-100">
                  Connect with people who help you move forward.
                </p>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-blue-50 p-4">
                  <div className="mb-3 inline-flex rounded-xl bg-white p-2.5 text-blue-600 shadow-sm">
                    <Users size={22} />
                  </div>
                  <h4 className="font-bold text-slate-800">Mentorship</h4>
                  <p className="mt-1 text-xs leading-5 text-slate-500">Guidance from seniors</p>
                </div>

                <div className="rounded-2xl bg-violet-50 p-4">
                  <div className="mb-3 inline-flex rounded-xl bg-white p-2.5 text-violet-600 shadow-sm">
                    <BookOpen size={22} />
                  </div>
                  <h4 className="font-bold text-slate-800">Community</h4>
                  <p className="mt-1 text-xs leading-5 text-slate-500">Share and learn together</p>
                </div>

                <div className="rounded-2xl bg-indigo-50 p-4">
                  <div className="mb-3 inline-flex rounded-xl bg-white p-2.5 text-indigo-600 shadow-sm">
                    <FolderKanban size={22} />
                  </div>
                  <h4 className="font-bold text-slate-800">Projects</h4>
                  <p className="mt-1 text-xs leading-5 text-slate-500">Build with teammates</p>
                </div>

                <div className="rounded-2xl bg-sky-50 p-4">
                  <div className="mb-3 inline-flex rounded-xl bg-white p-2.5 text-sky-600 shadow-sm">
                    <MessageCircle size={22} />
                  </div>
                  <h4 className="font-bold text-slate-800">Connect</h4>
                  <p className="mt-1 text-xs leading-5 text-slate-500">Stay in touch</p>
                </div>
              </div>
            </div>

            <div className="absolute -left-3 top-1/3 hidden rounded-2xl border border-slate-100 bg-white p-3 shadow-xl sm:block lg:-left-8">
              <GraduationCap className="text-blue-600" size={27} />
            </div>

            <div className="absolute -right-3 bottom-12 hidden rounded-2xl border border-slate-100 bg-white p-3 shadow-xl sm:block lg:-right-8">
              <Lightbulb className="text-amber-500" size={27} />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="scroll-mt-24 px-5 py-20 sm:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="text-sm font-bold tracking-widest text-blue-600">
              WHAT WE OFFER
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Everything Your Campus Needs
            </h2>
            <p className="mt-5 leading-7 text-slate-500">
              One connected space to discover opportunities, exchange ideas
              and grow with your college community.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/60 sm:p-7"
                >
                  <div className={`mb-6 inline-flex rounded-2xl p-4 ${feature.color} transition group-hover:scale-110`}>
                    <Icon size={27} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="scroll-mt-24 bg-slate-50 px-5 py-20 sm:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="text-sm font-bold tracking-widest text-blue-600">
              SIMPLE STEPS
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              How CampusLink Works
            </h2>
            <p className="mt-5 leading-7 text-slate-500">
              Get started in three simple steps and make the most of your campus network.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {steps.map((step) => (
              <div
                key={step.number}
                className="rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg sm:p-9"
              >
                <span className="text-5xl font-extrabold tracking-tight text-blue-100">
                  {step.number}
                </span>
                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-500">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14 rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-700 px-6 py-12 text-center text-white sm:px-12">
            <h2 className="text-2xl font-extrabold sm:text-3xl">
              Be a Part of Your Campus Community
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-blue-100 sm:text-base">
              Start connecting with students, mentors and alumni on CampusLink.
            </p>
            <Link
              to="/register"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 font-bold text-blue-700 transition hover:bg-blue-50"
            >
              Join CampusLink <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
