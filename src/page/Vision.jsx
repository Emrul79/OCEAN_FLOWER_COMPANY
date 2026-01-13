import { useEffect, useRef, useState } from "react";

import Clients from "../assets//clients/adada&kabbani.png";
import Vision from "../assets/vision.webp";

const ClientsCarousel = ({ clients }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef(null);

  // Auto-scroll effect
  useEffect(() => {
    if (isPaused || isDragging) return;

    const interval = setInterval(() => {
      if (carouselRef.current) {
        const maxScroll =
          carouselRef.current.scrollWidth - carouselRef.current.clientWidth;

        if (carouselRef.current.scrollLeft >= maxScroll) {
          carouselRef.current.scrollLeft = 0;
        } else {
          carouselRef.current.scrollLeft += 1;
        }
      }
    }, 20);

    return () => clearInterval(interval);
  }, [isPaused, isDragging]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
    setIsPaused(true);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setTimeout(() => setIsPaused(false), 2000);
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      setTimeout(() => setIsPaused(false), 2000);
    }
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
    setIsPaused(true);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    setTimeout(() => setIsPaused(false), 2000);
  };

  // Double the clients array for seamless loop
  const doubledClients = [...clients, ...clients];

  return (
    <div className="relative">
      <div
        ref={carouselRef}
        className={`flex gap-8 overflow-x-hidden pb-4 ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {doubledClients.map((client, index) => (
          <div
            key={`${client.id}-${index}`}
            className="group relative bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 flex items-center justify-center hover:bg-white dark:hover:bg-gray-700 transition-all duration-500 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 flex-shrink-0 w-64 h-40"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Gradient Border on Hover */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-[2px]">
              <div className="w-full h-full bg-white dark:bg-gray-700 rounded-2xl"></div>
            </div>

            <img
              src={client.logo}
              alt={client.name}
              className="relative z-10 w-full h-auto max-h-16 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110 select-none pointer-events-none"
              draggable="false"
            />
          </div>
        ))}
      </div>

      {/* Gradient Overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white dark:from-gray-900 to-transparent pointer-events-none z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white dark:from-gray-900 to-transparent pointer-events-none z-10"></div>
    </div>
  );
};

const VisionAndClients = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const clients = [
    {
      id: 1,
      name: "Saudi Aramco",
      logo: Clients,
    },
    {
      id: 2,
      name: "SABIC",
      logo: Clients,
    },
    {
      id: 3,
      name: "Saudi Electricity",
      logo: Clients,
    },
    {
      id: 4,
      name: "Aramco Trading",
      logo: Clients,
    },
    {
      id: 5,
      name: "SENDAN",
      logo: Clients,
    },
    {
      id: 6,
      name: "KAEFER",
      logo: Clients,
    },
    {
      id: 7,
      name: "Expertise",
      logo: Clients,
    },
    {
      id: 8,
      name: "Larsen & Toubro",
      logo: Clients,
    },
  ];

  return (
    <div>
      {/* Vision 2030 Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-gray-900 dark:bg-black">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?w=1920&q=80")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Animated Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900/95 via-cyan-900/90 to-blue-900/95 animate-gradient"></div>

          {/* Dot Pattern Overlay */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "radial-gradient(circle, white 1px, transparent 1px)",
              backgroundSize: "30px 30px",
            }}
          ></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div
              className={`space-y-6 transform transition-all duration-1000 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-20 opacity-0"
              }`}
            >
              <div className="inline-block">
                <span className="text-cyan-300 font-semibold text-sm tracking-wider uppercase bg-cyan-500/20 px-4 py-2 rounded-full border border-cyan-400/30">
                  Our Commitment
                </span>
              </div>

              <h2 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                Vision{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                  2030
                </span>
              </h2>

              <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"></div>

              <p className="text-lg text-gray-200 leading-relaxed">
                Saudi Arabia has set ambitious goals as part of its Vision 2030
                initiative, with innovation at its core. We are proud to support
                the Kingdom's efforts towards sustainability, job creation, and
                expanding opportunities for Saudi citizens.
              </p>

              <p className="text-lg text-gray-200 leading-relaxed">
                JMSCO is actively involved with clients and engaged in several
                key giga projects that align with Vision 2030. These projects
                are designed to diversify and grow the Saudi economy.
              </p>

              <p className="text-lg text-gray-200 leading-relaxed">
                At JMSCO, we play a vital role in shaping the structures and
                environments that will bring this vision to life, paving the way
                for numerous opportunities for talent in the years to come. As
                Vision 2030 aims to elevate Saudi Arabia's global standing,
                JMSCO is fully committed to contributing to the realization of
                these goals.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <button className="group flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg shadow-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/70 transform hover:-translate-y-1">
                  Learn More
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
            </div>

            {/* Vision 2030 Logo/Image */}
            <div
              className={`transform transition-all duration-1000 delay-300 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-20 opacity-0"
              }`}
            >
              <div className="relative group">
                <div className="absolute -inset-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-pulse"></div>
                <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-12 shadow-2xl">
                  <img
                    src={Vision}
                    alt="Vision 2030"
                    className="w-full h-auto rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center space-y-4 bg-gradient-to-br from-teal-600/90 to-cyan-600/90 backdrop-blur-sm p-8 rounded-2xl border border-white/30">
                      <div className="text-white text-7xl font-bold">2030</div>
                      <div className="text-cyan-100 text-2xl font-semibold tracking-wide">
                        رؤية السعودية
                      </div>
                      <div className="text-white text-xl">VISION</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float-delayed"></div>
      </section>

      {/* Our Clients Section */}
      <section className="py-20 lg:py-28 bg-white dark:bg-gray-900 transition-colors duration-300 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-6">
            <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm tracking-wider uppercase bg-blue-50 dark:bg-blue-900/30 px-4 py-2 rounded-full inline-block">
              Trusted Partners
            </span>

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Clients
              </span>
            </h2>

            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              At OCEAN FLOWER, we take pride in partnering with our clients to
              drive innovation and progress. With a strong commitment to
              empowering industries, we work together to create solutions that
              shape the future and support sustainable growth.
            </p>
          </div>

          {/* Clients Carousel */}
          <ClientsCarousel clients={clients} />

          {/* View All Button */}
          <div className="text-center mt-12">
            <button className="group inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-10 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              View All Clients
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
        </div>
      </section>

      <style jsx>{`
        @keyframes gradient {
          0%,
          100% {
            filter: hue-rotate(0deg);
          }
          50% {
            filter: hue-rotate(20deg);
          }
        }
        .animate-gradient {
          animation: gradient 10s ease infinite;
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 8s ease-in-out infinite;
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
};

export default VisionAndClients;
