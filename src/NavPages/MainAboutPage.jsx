import {
  Award,
  CheckCircle,
  Clock,
  Globe,
  Shield,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import GallerySection from "../components/TestWithMOtion";

export default function AboutUsSection({ darkMode = false }) {
  const [countUp, setCountUp] = useState({
    years: 0,
    workers: 0,
    clients: 0,
    sectors: 0,
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    // Counter animation
    const duration = 2000;
    const steps = 50;
    const interval = duration / steps;

    const targets = { years: 15, workers: 1000, clients: 150, sectors: 8 };
    let step = 0;

    const timer = setInterval(() => {
      step++;
      setCountUp({
        years: Math.floor((targets.years / steps) * step),
        workers: Math.floor((targets.workers / steps) * step),
        clients: Math.floor((targets.clients / steps) * step),
        sectors: Math.floor((targets.sectors / steps) * step),
      });

      if (step >= steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const stats = [
    {
      label: "Years of Excellence",
      value: countUp.years,
      suffix: "+",
      icon: Award,
    },
    {
      label: "Workers Deployed",
      value: countUp.workers.toLocaleString(),
      suffix: "+",
      icon: Users,
    },
    {
      label: "Satisfied Clients",
      value: countUp.clients,
      suffix: "+",
      icon: Globe,
    },
    {
      label: "Industry Sectors",
      value: countUp.sectors,
      suffix: "",
      icon: Target,
    },
  ];

  const values = [
    {
      icon: Shield,
      title: "Full Compliance",
      description:
        " 100% adherence to Saudi labor laws and regulations with proper documentation",
      color: "blue",
    },
    {
      icon: Clock,
      title: "Rapid Deployment",
      description:
        "Quick mobilization of skilled workforce to meet urgent project requirements",
      color: "green",
    },
    {
      icon: Award,
      title: "Quality Assured",
      description:
        "Rigorously vetted professionals with verified skills and experience",
      color: "purple",
    },
    {
      icon: TrendingUp,
      title: "Industry Leading",
      description:
        "Trusted partner for major construction, healthcare, and commercial projects",
      color: "orange",
    },
  ];

  const sectors = [
    "Construction & Infrastructure",
    "Healthcare & Hospitals",
    "Commercial Facilities",
    "Industrial & Factories",
    "Cleaning Services",
    "Warehouse & Logistics",
    "Hospitality & Hotels",
    "General Labor Services",
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: "from-blue-500 to-blue-600",
      green: "from-green-500 to-green-600",
      purple: "from-purple-500 to-purple-600",
      orange: "from-orange-500 to-orange-600",
    };
    return colors[color] || colors.blue;
  };

  return (
    <div
      className={`w-full transition-colors duration-300 ${
        darkMode ? "bg-slate-900" : "bg-white"
      }`}
    >
      {/* Hero Section with Overlay */}
      <div className="relative w-full h-96 md:h-[500px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1200")',
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </div>

        {/* Overlay Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div
              className={`transition-all duration-1000 transform ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white text-sm font-semibold mb-6">
                About Connected Nation
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
                Building Saudi Arabia's
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Future Workforce
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 max-w-3xl leading-relaxed">
                Your trusted partner in delivering exceptional manpower
                solutions across the Kingdom. Excellence, reliability, and
                quality in every placement.
              </p>
            </div>
          </div>
        </div>

        {/* Decorative Element */}
        <div
          className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"
          style={{
            background: darkMode
              ? "linear-gradient(to top, rgb(15, 23, 42), transparent)"
              : "linear-gradient(to top, white, transparent)",
          }}
        />
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20">
        <div
          className={`grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 ${
            darkMode ? "bg-slate-800" : "bg-white"
          } rounded-2xl shadow-2xl p-6 md:p-8`}
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className={`text-center p-4 rounded-xl transition-all duration-300 hover:scale-105 ${
                  darkMode ? "hover:bg-slate-700" : "hover:bg-slate-50"
                }`}
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                <div className="flex justify-center mb-3">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl">
                    <Icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                </div>
                <div
                  className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent`}
                >
                  {stat.value}
                  {stat.suffix}
                </div>
                <div
                  className={`text-sm md:text-base font-medium ${
                    darkMode ? "text-slate-400" : "text-slate-600"
                  }`}
                >
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
          <div className="space-y-6">
            <h2
              className={`text-3xl md:text-4xl lg:text-5xl font-bold leading-tight ${
                darkMode ? "text-white" : "text-slate-900"
              }`}
            >
              Empowering Industries with
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}
                World-Class Talent
              </span>
            </h2>
            <div
              className={`w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full`}
            />
            <p
              className={`text-lg md:text-xl leading-relaxed ${
                darkMode ? "text-slate-300" : "text-slate-600"
              }`}
            >
              Based in the heart of Jeddah, we are Saudi Arabia's premier
              manpower supply company, dedicated to connecting exceptional
              talent with leading organizations across the Kingdom.
            </p>
            <p
              className={`text-lg leading-relaxed ${
                darkMode ? "text-slate-400" : "text-slate-600"
              }`}
            >
              For over 15 years, we've been the trusted bridge between skilled
              professionals and ambitious companies. Our commitment to
              excellence, integrity, and deep understanding of Saudi labor
              regulations has made us the preferred partner for businesses
              ranging from major construction projects to healthcare facilities
              and commercial enterprises.
            </p>
            <p
              className={`text-lg leading-relaxed ${
                darkMode ? "text-slate-400" : "text-slate-600"
              }`}
            >
              We don't just supply workers—we build lasting partnerships. Every
              placement is backed by rigorous screening, comprehensive training,
              and ongoing support to ensure your projects succeed and your
              workforce excels.
            </p>
          </div>

          <div className="relative">
            <div className="sticky top-8">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <img
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800"
                  alt="Professional team"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <p className="text-2xl font-bold mb-2">
                    Your Success is Our Mission
                  </p>
                  <p className="text-slate-200">
                    Delivering excellence, one placement at a time
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3
              className={`text-3xl md:text-4xl font-bold mb-4 ${
                darkMode ? "text-white" : "text-slate-900"
              }`}
            >
              Why Choose Us
            </h3>
            <p
              className={`text-lg md:text-xl ${
                darkMode ? "text-slate-400" : "text-slate-600"
              }`}
            >
              Our commitment to excellence sets us apart
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className={`group p-8 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                    darkMode
                      ? "bg-slate-800 hover:bg-slate-750"
                      : "bg-slate-50 hover:bg-white shadow-md"
                  }`}
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                  }}
                >
                  <div
                    className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${getColorClasses(
                      value.color
                    )} mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h4
                    className={`text-xl font-bold mb-3 ${
                      darkMode ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {value.title}
                  </h4>
                  <p
                    className={`leading-relaxed ${
                      darkMode ? "text-slate-400" : "text-slate-600"
                    }`}
                  >
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Sectors We Serve */}
        <div
          className={`rounded-3xl p-8 md:p-12 ${
            darkMode
              ? "bg-slate-800"
              : "bg-gradient-to-br from-blue-50 to-purple-50"
          }`}
        >
          <div className="text-center mb-10">
            <h3
              className={`text-3xl md:text-4xl font-bold mb-4 ${
                darkMode ? "text-white" : "text-slate-900"
              }`}
            >
              Industries We Serve
            </h3>
            <p
              className={`text-lg ${
                darkMode ? "text-slate-400" : "text-slate-600"
              }`}
            >
              Comprehensive manpower solutions across diverse sectors
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {sectors.map((sector, index) => (
              <div
                key={index}
                className={`flex items-center gap-3 p-4 rounded-xl transition-all duration-300 hover:scale-105 ${
                  darkMode
                    ? "bg-slate-700 hover:bg-slate-600"
                    : "bg-white hover:bg-blue-50 shadow-sm hover:shadow-md"
                }`}
              >
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span
                  className={`font-medium ${
                    darkMode ? "text-white" : "text-slate-900"
                  }`}
                >
                  {sector}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <a
            href="#"
            className="group inline-flex items-center gap-3 px-10 py-5 text-lg font-bold text-white rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 relative overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            <span className="relative">Partner With Us Today</span>
            <Users className="relative w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
          </a>
        </div>
        <GallerySection />
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
