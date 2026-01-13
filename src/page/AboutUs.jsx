import { useEffect, useRef, useState } from "react";

const AboutUs = () => {
  const [workersCount, setWorkersCount] = useState(0);
  const [projectsCount, setProjectsCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounters = () => {
    const workersTarget = 200;
    const projectsTarget = 25;
    const interval = 100; // milliseconds

    let currentWorkers = 0;
    let currentProjects = 0;

    const workersStep = Math.ceil(workersTarget / 20); // Will complete in ~2 seconds
    const projectsStep = Math.ceil(projectsTarget / 20); // Will complete in ~2 seconds

    const workersInterval = setInterval(() => {
      currentWorkers += workersStep;
      if (currentWorkers >= workersTarget) {
        setWorkersCount(workersTarget);
        clearInterval(workersInterval);
      } else {
        setWorkersCount(currentWorkers);
      }
    }, interval);

    const projectsInterval = setInterval(() => {
      currentProjects += projectsStep;
      if (currentProjects >= projectsTarget) {
        setProjectsCount(projectsTarget);
        clearInterval(projectsInterval);
      } else {
        setProjectsCount(currentProjects);
      }
    }, interval);
  };

  return (
    <section
      ref={sectionRef}
      className="py-16 lg:py-24 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Image Side */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
                alt="City skyline"
                className="w-full h-[400px] lg:h-[500px] object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-6">
            <div className="inline-block">
              <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm tracking-wider uppercase bg-blue-50 dark:bg-blue-900/30 px-4 py-2 rounded-full">
                About Us
              </span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                OCEAN FLOWER
              </span>
            </h2>

            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div className="flex gap-3">
                <svg
                  className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-lg">
                  OCEAN FLOWER is playing a leading role in industrial
                  construction and strives to be a role model for
                  environmentally friendly companies.
                </p>
              </div>

              <div className="flex gap-3">
                <svg
                  className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-lg">
                  OCEAN FLOWER provides end-to-end Project Management services
                  to its industrial clients, from initiation to project
                  completion.
                </p>
              </div>

              <div className="flex gap-3">
                <svg
                  className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-lg">
                  We are always ready to embrace the challenges of modern
                  industrial construction and are committed to delivering
                  projects with 100% client satisfaction.
                </p>
              </div>

              <div className="flex gap-3">
                <svg
                  className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-lg">
                  OCEAN FLOWER ensures that our experts and field staff remain
                  motivated and dedicated to upholding the company's
                  high-quality standards.
                </p>
              </div>
            </div>

            <button className="group mt-6 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
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

        {/* Stats Section */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Workers Card */}
          <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 dark:from-blue-700 dark:to-blue-900"></div>
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80')] bg-cover bg-center opacity-10"></div>
            <div className="relative p-12 text-center transform group-hover:scale-105 transition-transform duration-500">
              <div className="mb-4">
                <svg
                  className="w-16 h-16 mx-auto text-white/80"
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
              </div>
              <div className="text-6xl lg:text-7xl font-bold text-white mb-3">
                {workersCount}+
              </div>
              <div className="text-xl lg:text-2xl font-semibold text-blue-100">
                Workers
              </div>
              <div className="mt-4 text-blue-100/80">
                Skilled professionals ready to serve
              </div>
            </div>
          </div>

          {/* Projects Card */}
          <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-950 dark:from-gray-900 dark:to-black"></div>
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80')] bg-cover bg-center opacity-10"></div>
            <div className="relative p-12 text-center transform group-hover:scale-105 transition-transform duration-500">
              <div className="mb-4">
                <svg
                  className="w-16 h-16 mx-auto text-white/80"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
              </div>
              <div className="text-6xl lg:text-7xl font-bold text-white mb-3">
                {projectsCount}+
              </div>
              <div className="text-xl lg:text-2xl font-semibold text-gray-100">
                Projects Completed
              </div>
              <div className="mt-4 text-gray-300/80">
                Successful deliveries with excellence
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
