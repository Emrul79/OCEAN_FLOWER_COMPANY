import { Link } from "react-router-dom";
import bgImage from "../assets/gallary/5.jpeg";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-white dark:bg-gray-900">
      {/* Background Image - Replace src with your image path */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      ></div>

      {/* Overlay - Light in light mode, dark in dark mode */}
      <div className="absolute inset-0 bg-black/60 dark:bg-black/60 z-0"></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen py-20 gap-12">
          {/* Left Content */}
          <div className="flex-1 text-white dark:text-white space-y-6 lg:pr-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Welcome to{" "}
              <span className="text-blue-600 dark:text-blue-500">
                Ocean Flower Company
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-white dark:text-gray-300 leading-relaxed max-w-3xl">
              We specialize in providing top-notch manpower supply and
              contracting services throughout Saudi Arabia. Our team is
              dedicated to meeting the diverse needs of our clients by offering
              a wide range of skilled and unskilled labor. This includes
              carpenters, steel fixers, masons, electricians, landscapers, work
              permit receivers, scaffolders, document controllers, QC
              professionals, and more, through trusted platforms like the Ajeer
              system and Aramco Vendor.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Our All Services
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
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-transparent hover:bg-gray-100 hover:text-black dark:hover:bg-white/10 text-white dark:text-white font-semibold px-8 py-4 rounded-lg border-2 border-blue-600 dark:border-white transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Right Sidebar - Services List */}
          <div className="flex-1 lg:max-w-md w-full">
            <div className="bg-blue-600 dark:bg-blue-700 rounded-lg shadow-2xl overflow-hidden">
              <div className="p-6 space-y-1">
                {[
                  "Manpower Supply & Management Service",
                  "Telecom Service & Solutions",
                  "Information Technology",
                  "Construction & Maintenance",
                  "Utility Management",
                  "Equipment Rentals",
                  "Marketing & Strategy",
                  "Training & Consultancy",
                  "Recruitment",
                ].map((service, index) => (
                  <Link
                    key={index}
                    to="/services"
                    className="flex items-center gap-3 text-white hover:bg-white/10 p-3 rounded-lg transition-all duration-200 group"
                  >
                    <svg
                      className="w-5 h-5 flex-shrink-0 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    <span className="text-sm sm:text-base font-medium">
                      {service}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce hidden lg:block">
        <svg
          className="w-6 h-6 text-gray-900 dark:text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
