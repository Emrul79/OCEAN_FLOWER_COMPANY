// src/pages/services/SingleService.jsx
import {
  ArrowLeftIcon,
  CalendarIcon,
  CheckCircleIcon,
  ShieldCheckIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { useLocation, useParams } from "react-router-dom";

const SingleService = () => {
  const { slug } = useParams();
  const location = useLocation();

  const { title, description } = location.state || {};

  const displayTitle =
    title ||
    slug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

  const displayDescription =
    description ||
    "High-quality, reliable manpower solutions tailored to the exact needs of your business in Saudi Arabia.";

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      {/* Hero Banner – more dramatic */}
      <section className="relative h-[50vh] md:h-[65vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-indigo-950 to-gray-950" />

        {/* Subtle animated overlay pattern */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.08)_0%,transparent_50%),radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.06)_0%,transparent_50%)] animate-pulse-slow" />

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-5">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
          >
            <div className="inline-block mb-6 px-6 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
              <span className="text-blue-300 font-medium tracking-wider uppercase text-sm">
                Professional Manpower Services
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight drop-shadow-2xl leading-tight">
              {displayTitle}
            </h1>

            <p className="mt-6 md:mt-8 text-xl md:text-2xl lg:text-3xl text-blue-100/90 max-w-4xl mx-auto font-light leading-relaxed">
              {displayDescription}
            </p>
          </motion.div>
        </div>

        {/* Back button – glassmorphism style */}
        <motion.button
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          onClick={() => window.history.back()}
          className="absolute top-6 left-6 md:left-10 z-20 flex items-center gap-3 px-6 py-3 bg-white/15 hover:bg-white/25 backdrop-blur-lg text-white rounded-full border border-white/20 hover:border-white/40 transition-all duration-300 shadow-lg"
        >
          <ArrowLeftIcon className="w-5 h-5" />
          <span className="font-medium">Back to Services</span>
        </motion.button>
      </section>

      {/* Floating content card */}
      <section className="relative -mt-20 md:-mt-32 pb-16 md:pb-24 px-5">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="max-w-6xl mx-auto bg-white dark:bg-gray-900 rounded-3xl shadow-2xl overflow-hidden border border-gray-100/50 dark:border-gray-800/50"
        >
          {/* Stats bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-200 dark:divide-gray-800 bg-gradient-to-r from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
            {[
              {
                icon: UserGroupIcon,
                value: "5,000+",
                label: "Workers Deployed",
              },
              { icon: CalendarIcon, value: "10+", label: "Years Experience" },
              {
                icon: ShieldCheckIcon,
                value: "100%",
                label: "Compliance Rate",
              },
              {
                icon: CheckCircleIcon,
                value: "98%",
                label: "Client Satisfaction",
              },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="p-6 md:p-8 lg:p-10 text-center"
              >
                <stat.icon className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-3 text-blue-600 dark:text-blue-400" />
                <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm md:text-base font-medium text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Main content */}
          <div className="p-8 md:p-12 lg:p-16 space-y-16 md:space-y-20">
            {/* Overview */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6">
                Comprehensive Overview
              </h2>
              <div className="prose prose-lg md:prose-xl dark:prose-invert max-w-none leading-relaxed text-gray-700 dark:text-gray-300">
                <p>
                  We deliver highly trained, vetted, and compliant manpower
                  specifically matched to the demands of modern construction,
                  facility management, healthcare, and industrial projects
                  across Jeddah and the Kingdom of Saudi Arabia.
                </p>
                <p>
                  Our workforce combines international expertise with local
                  knowledge — ensuring safety, efficiency, and full alignment
                  with Saudization (Nitaqat) requirements and Vision 2030 goals.
                </p>
              </div>
            </motion.div>

            {/* Key Features / Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-10">
                Why Companies Trust Us
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {[
                  {
                    title: "Rapid Deployment",
                    desc: "Most teams mobilized within 48–72 hours",
                  },
                  {
                    title: "Full Compliance",
                    desc: "100% aligned with Saudi labor laws & Saudization",
                  },
                  {
                    title: "Quality Guarantee",
                    desc: "Replacement within 48 hours if needed",
                  },
                  {
                    title: "24/7 Support",
                    desc: "Dedicated account managers available round-the-clock",
                  },
                  {
                    title: "Competitive Pricing",
                    desc: "Transparent rates with no hidden fees",
                  },
                  {
                    title: "Trained Workforce",
                    desc: "Regular safety, hygiene & skill enhancement programs",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="group p-7 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                  >
                    <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="pt-12 border-t border-gray-200 dark:border-gray-800 text-center"
            >
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Strengthen Your Team?
              </h3>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
                Contact us today and get a personalized manpower proposal within
                24 hours.
              </p>

              <div className="flex flex-col sm:flex-row gap-5 justify-center">
                <a
                  href="/contact"
                  className="
                    inline-flex items-center justify-center px-10 py-5
                    bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700
                    text-white font-semibold text-lg rounded-full
                    shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1.5
                  "
                >
                  Request a Quote →
                </a>

                <a
                  href="tel:+966500000000"
                  className="
                    inline-flex items-center justify-center px-10 py-5
                    bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600
                    text-gray-900 dark:text-white font-semibold text-lg rounded-full
                    hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300
                  "
                >
                  Call Us Now
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default SingleService;
