import { useState } from "react";
import Food from "../assets/services/food.avif";
const Services = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      id: 1,
      number: "01",
      title: "Manpower Solutions",
      description: "Supplying skilled and unskilled labor for your projects.",
      image:
        "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80",
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
    {
      id: 2,
      number: "02",
      title: "Food Solutions",
      description: "Our Food Solution Section Will help your company",
      image: Food,
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
          />
        </svg>
      ),
    },
    {
      id: 3,
      number: "03",
      title: "Construction & Maintenance",
      description: "Providing expert construction and maintenance services.",
      image:
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80",
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
    },
    {
      id: 4,
      number: "04",
      title: "Scaffolding Services",
      description:
        "Delivering safe, reliable, and efficient scaffolding solutions.",
      image:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 5a1 1 0 011-1h4a1 1 0 011 1v2m0 0h4m0 0V5a1 1 0 011-1h4a1 1 0 011 1v2m-9 0h4m-4 0v12m4-12v12m0 0h4m-4 0H9m10-2V9m0 10a1 1 0 01-1 1h-4a1 1 0 01-1-1m6 0H5a1 1 0 01-1-1V9m1 10V9m0 0a1 1 0 011-1h4a1 1 0 011 1"
          />
        </svg>
      ),
    },
    {
      id: 5,
      number: "05",
      title: "Telecom Solutions",
      description:
        "Advanced telecom services and network infrastructure solutions.",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
          />
        </svg>
      ),
    },
    {
      id: 6,
      number: "06",
      title: "Information Technology",
      description:
        "Comprehensive IT solutions and digital transformation services.",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-6">
          <div className="space-y-4">
            <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm tracking-wider uppercase bg-blue-50 dark:bg-blue-900/30 px-4 py-2 rounded-full inline-block">
              What We Offer
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
              Our All Best{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Services
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
              Comprehensive solutions tailored to meet your industrial and
              construction needs with excellence and precision.
            </p>
          </div>

          <button className="group flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 whitespace-nowrap">
            More Services
            <svg
              className="w-5 h-5 transform group-hover:translate-x-2 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Number Badge */}
              <div className="absolute top-6 left-6 z-20">
                <div
                  className={`bg-gradient-to-r ${service.gradient} text-white font-bold text-lg px-4 py-2 rounded-lg shadow-lg`}
                >
                  {service.number}
                </div>
              </div>

              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className={`w-full h-full object-cover transition-all duration-700 ${
                    hoveredCard === service.id
                      ? "scale-110 brightness-50"
                      : "scale-100 brightness-75"
                  }`}
                />

                {/* Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${
                    service.gradient
                  } opacity-60 transition-opacity duration-500 ${
                    hoveredCard === service.id ? "opacity-80" : "opacity-60"
                  }`}
                ></div>

                {/* Icon - Appears on Hover */}
                <div
                  className={`absolute inset-0 flex items-center justify-center text-white transition-all duration-500 ${
                    hoveredCard === service.id
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-50"
                  }`}
                >
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-3">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {service.description}
                </p>

                {/* Learn More Link */}
                <div
                  className={`flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold pt-2 transition-all duration-300 ${
                    hoveredCard === service.id
                      ? "translate-x-2"
                      : "translate-x-0"
                  }`}
                >
                  <span>Learn More</span>
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>

              {/* Bottom Accent Line */}
              <div
                className={`h-1 bg-gradient-to-r ${
                  service.gradient
                } transform origin-left transition-transform duration-500 ${
                  hoveredCard === service.id ? "scale-x-100" : "scale-x-0"
                }`}
              ></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-6">
            Need a custom solution? We're here to help you succeed.
          </p>
          <button className="group inline-flex items-center gap-2 bg-transparent hover:bg-blue-600 text-blue-600 hover:text-white dark:text-blue-400 dark:hover:text-white font-semibold px-8 py-4 rounded-lg border-2 border-blue-600 dark:border-blue-400 transition-all duration-300">
            Request a Quote
            <svg
              className="w-5 h-5 transform group-hover:rotate-45 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
