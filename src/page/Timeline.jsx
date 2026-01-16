import { ArrowRight } from "lucide-react";
import React from "react";

export default function ManpowerTimeline({ darkMode = false }) {
  const timelineSteps = [
    {
      id: 1,
      title: "Initial Consultation",
      description:
        "We begin by understanding your specific manpower requirements, company culture, and project timelines to create a tailored recruitment strategy.",
    },
    {
      id: 2,
      title: "Candidate Sourcing",
      description:
        "Our expert team leverages extensive networks and advanced tools to identify and attract the most qualified candidates for your needs.",
    },
    {
      id: 3,
      title: "Screening Process",
      description:
        "Comprehensive background verification, skill assessment, and detailed interviews ensure only top-tier professionals move forward.",
    },
    {
      id: 4,
      title: "Client Matching",
      description:
        "We present carefully selected candidates that align perfectly with your requirements, culture, and organizational goals.",
    },
    {
      id: 5,
      title: "Deployment & Support",
      description:
        "Seamless onboarding assistance and ongoing support to ensure successful integration and long-term satisfaction for all parties.",
    },
  ];

  return (
    <div
      className={`w-full py-16 sm:py-24 lg:py-32 transition-colors duration-300 dark:bg-slate-900 dark:text-white `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16 sm:mb-20 lg:mb-28">
          <h1
            className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 transition-colors text-slate-900 dark:text-white duration-300`}
          >
            How We Supply{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Top Talents
            </span>
          </h1>
          <p
            className={`text-lg sm:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed text-slate-600 dark:text-slate-300 transition-colors duration-300 `}
          >
            Our streamlined five-step process ensures you get the right
            professionals at the right time. From initial consultation to
            ongoing support, we're with you every step of the way.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Desktop Timeline */}
          <div className="hidden lg:block">
            {/* Horizontal Line */}
            <div
              className="absolute top-8 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full"
              style={{ width: "calc(100% - 64px)", left: "32px" }}
            />

            {/* Timeline Steps */}
            <div className="relative grid grid-cols-5 gap-4">
              {timelineSteps.map((step, index) => (
                <div key={step.id} className="relative">
                  {/* Circle Marker */}
                  <div className="flex justify-center mb-12">
                    <div
                      className={`relative z-10 w-16 h-16 rounded-full border-4 flex items-center justify-center font-bold text-xl transition-all duration-300 hover:scale-125 hover:rotate-12 cursor-pointer ${
                        darkMode
                          ? "bg-slate-900 border-blue-500 text-blue-400 shadow-lg shadow-blue-500/50"
                          : "bg-white border-blue-500 text-blue-600 shadow-lg"
                      }`}
                    >
                      {step.id}
                    </div>
                  </div>

                  {/* Content Card */}
                  <div
                    className={`group p-6 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer ${
                      darkMode
                        ? "bg-slate-800 hover:bg-slate-700 shadow-lg"
                        : "bg-slate-50 hover:bg-white shadow-md hover:shadow-xl"
                    }`}
                  >
                    <h3
                      className={`text-xl font-bold mb-3 transition-colors duration-300 ${
                        darkMode ? "text-white" : "text-slate-900"
                      }`}
                    >
                      Step {step.id}
                    </h3>
                    <h4
                      className={`text-lg font-semibold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent`}
                    >
                      {step.title}
                    </h4>
                    <p
                      className={`text-sm leading-relaxed mb-4 transition-colors duration-300 ${
                        darkMode ? "text-slate-300" : "text-slate-600"
                      }`}
                    >
                      {step.description}
                    </p>

                    {/* See More Link */}
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-purple-600 transition-all duration-300 group-hover:gap-3"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile/Tablet Timeline */}
          <div className="lg:hidden space-y-8">
            {timelineSteps.map((step, index) => (
              <div key={step.id} className="relative flex gap-6">
                {/* Left Side - Circle and Line */}
                <div className="flex flex-col items-center flex-shrink-0">
                  {/* Circle Marker */}
                  <div
                    className={`w-14 h-14 rounded-full border-4 flex items-center justify-center font-bold text-lg z-10 transition-all duration-300 ${
                      darkMode
                        ? "bg-slate-900 border-blue-500 text-blue-400 shadow-lg shadow-blue-500/50"
                        : "bg-white border-blue-500 text-blue-600 shadow-lg"
                    }`}
                  >
                    {step.id}
                  </div>

                  {/* Vertical Line */}
                  {index < timelineSteps.length - 1 && (
                    <div
                      className="w-1 flex-1 bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-500 rounded-full mt-2"
                      style={{ minHeight: "80px" }}
                    />
                  )}
                </div>

                {/* Right Side - Content */}
                <div
                  className={`flex-1 pb-8 p-6 rounded-2xl transition-all duration-300 hover:shadow-xl ${
                    darkMode
                      ? "bg-slate-800 hover:bg-slate-700 shadow-lg"
                      : "bg-slate-50 hover:bg-white shadow-md"
                  }`}
                >
                  <h3
                    className={`text-lg font-bold mb-2 transition-colors duration-300 ${
                      darkMode ? "text-white" : "text-slate-900"
                    }`}
                  >
                    Step {step.id}
                  </h3>
                  <h4 className="text-base font-semibold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {step.title}
                  </h4>
                  <p
                    className={`text-sm leading-relaxed mb-4 transition-colors duration-300 ${
                      darkMode ? "text-slate-300" : "text-slate-600"
                    }`}
                  >
                    {step.description}
                  </p>

                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-purple-600 transition-all duration-300 hover:gap-3"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Arrow Logo Button - Top Right */}
        <a
          href="#"
          className={`fixed top-8 right-8 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 z-50 ${
            darkMode
              ? "bg-gradient-to-br from-blue-600 to-purple-600 hover:shadow-purple-500/50"
              : "bg-gradient-to-br from-blue-500 to-purple-500 hover:shadow-purple-400/50"
          }`}
        >
          <ArrowRight className="w-7 h-7 text-white" />
        </a>

        {/* Bottom CTA Button */}
        <div className="mt-16 sm:mt-20 flex justify-center">
          <a
            href="#"
            className={`group relative inline-flex items-center gap-3 px-10 py-5 text-lg font-bold rounded-full overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
              darkMode
                ? "bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50"
                : "bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white shadow-xl hover:shadow-2xl"
            }`}
          >
            {/* Animated background shimmer */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />

            <span className="relative z-10">See Every Details</span>
            <ArrowRight className="relative z-10 w-6 h-6 transition-transform duration-300 group-hover:translate-x-2" />
          </a>
        </div>
      </div>
    </div>
  );
}
