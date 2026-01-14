// src/components/services/ServicesSection.jsx
// (Updated version with clickable cards routing to individual pages)

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Import Heroicons (outline style - clean and professional)
import {
  BuildingOffice2Icon,
  BuildingOfficeIcon,
  Cog6ToothIcon,
  HeartIcon,
  SparklesIcon,
  WrenchScrewdriverIcon, // General labor / maintenance
} from "@heroicons/react/24/outline";

const ServicesSection = () => {
  const services = [
    {
      title: "Construction Manpower",
      slug: "construction-manpower",
      description:
        "Skilled and certified workers for building projects, infrastructure development, and civil works across Jeddah and the Kingdom.",
      icon: BuildingOffice2Icon,
    },
    {
      title: "General Labor Supply",
      slug: "general-labor-supply",
      description:
        "Reliable general laborers for loading, unloading, site preparation, and support tasks — available on daily or project basis.",
      icon: WrenchScrewdriverIcon,
    },
    {
      title: "Hospital & Healthcare Support",
      slug: "hospital-healthcare-support",
      description:
        "Trained support staff including patient care assistants, porters, housekeeping, and sterilization personnel for hospitals and clinics.",
      icon: HeartIcon,
    },
    {
      title: "Cleaning & Janitorial Services",
      slug: "cleaning-janitorial-services",
      description:
        "Professional cleaning teams for commercial buildings, residential compounds, hospitals, and industrial facilities — deep cleaning & daily maintenance.",
      icon: SparklesIcon,
    },
    {
      title: "Industrial & Warehouse Workers",
      slug: "industrial-warehouse-workers",
      description:
        "Experienced manpower for factories, logistics centers, and warehouses — forklift operators, packers, inventory staff, and production line workers.",
      icon: Cog6ToothIcon,
    },
    {
      title: "Facility Support Staff",
      slug: "facility-support-staff",
      description:
        "Comprehensive facility management personnel including security guards, maintenance technicians, gardeners, and administrative support.",
      icon: BuildingOfficeIcon,
    },
  ];

  // Card animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="py-16 md:py-20 bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white tracking-tight"
          >
            Our Core Services
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-5 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            We provide reliable, trained, and compliant manpower solutions
            tailored to the needs of businesses across Saudi Arabia.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <Link
                to={`/services/${service.slug}`}
                state={{
                  title: service.title,
                  description: service.description,
                }}
                className="block"
              >
                {/* card content */}

                <motion.div
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={cardVariants}
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                    transition: { duration: 0.3 },
                  }}
                  className="
                    group relative bg-white dark:bg-gray-800 
                    rounded-2xl shadow-md hover:shadow-xl 
                    border border-gray-100 dark:border-gray-700 
                    overflow-hidden transition-all duration-300 cursor-pointer
                  "
                >
                  {/* Icon Header */}
                  <div className="h-24 flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900">
                    <Icon
                      className="
                        h-14 w-14 md:h-16 md:w-16 
                        text-blue-600 dark:text-blue-400 
                        opacity-90 group-hover:opacity-100 
                        transition-opacity duration-300
                      "
                      aria-hidden="true"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-7">
                    <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Subtle bottom accent bar */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-blue-400 opacity-70 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              </Link>
            );
          })}
        </div>

        {/* Optional CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <a
            href="#contact"
            className="
              inline-flex items-center px-8 py-4 
              bg-blue-600 hover:bg-blue-700 
              dark:bg-blue-700 dark:hover:bg-blue-600
              text-white font-semibold text-lg 
              rounded-full shadow-lg hover:shadow-xl 
              transition-all duration-300 transform hover:-translate-y-1
            "
          >
            Request Manpower Quote →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
