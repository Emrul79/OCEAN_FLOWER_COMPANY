// src/components/about/GallerySection.jsx
import { useState } from "react";
import Photo1 from "../assets/gallary/1.jpeg";
import Photo10 from "../assets/gallary/10.jpeg";
import Photo11 from "../assets/gallary/11.jpeg";
import Photo2 from "../assets/gallary/2.jpeg";
import Photo3 from "../assets/gallary/3.jpeg";
import Photo4 from "../assets/gallary/4.jpeg";
import Photo5 from "../assets/gallary/5.jpeg";
import Photo6 from "../assets/gallary/6.jpeg";
import Photo7 from "../assets/gallary/7.jpeg";
import Photo8 from "../assets/gallary/8.jpeg";
import Photo9 from "../assets/gallary/9.jpeg";

const GallerySection = () => {
  const [showAll, setShowAll] = useState(false);

  // You can move this array to a separate data file later
  const photos = [
    {
      src: Photo10,
      alt: "Skilled food factory support staff",
    },

    {
      src: Photo8,
      alt: "Professional office environment in Jeddah headquarters",
    },
    {
      src: Photo2,
      alt: "Construction manpower team on project site",
    },
    {
      src: Photo9,
      alt: "Skilled hospital support staff",
    },
    {
      src: Photo4,
      alt: "Professional cleaning services team",
    },
    {
      src: Photo5,
      alt: "Industrial and factory workforce",
    },
    {
      src: Photo6,
      alt: "General labor team at construction site",
    },
    {
      src: Photo11,
      alt: "Skilled hospital support staff",
    },
    {
      src: Photo7,
      alt: "Team coordination meeting at office",
    },
    {
      src: Photo1,
      alt: "Workers operating heavy machinery",
    },
    {
      src: Photo3,
      alt: "Specialized hospital cleaning crew",
    },
  ];

  // Show 5 by default, all when expanded
  const displayedPhotos = showAll ? photos : photos.slice(0, 5);

  return (
    <section className="py-16 md:py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Our Team in Actions
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            See our professional workforce delivering excellence across
            construction, healthcare, industrial, cleaning, and general labor
            sectors in Jeddah and Saudi Arabia.
          </p>
        </div>

        {/* Gallery Grid */}
        <div
          className={`
            grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 
            gap-6 transition-all duration-500 ease-in-out
            ${showAll ? "max-h-none" : "max-h-[1100px] overflow-hidden"}
          `}
        >
          {displayedPhotos.map((photo, index) => (
            <div
              key={index}
              className="
                group relative overflow-hidden rounded-2xl 
                shadow-md hover:shadow-xl 
                transition-all duration-300 ease-out
                bg-gray-100 dark:bg-gray-800
              "
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="
                    w-full h-full object-cover 
                    transform group-hover:scale-105 
                    transition-transform duration-500 ease-out
                  "
                />
              </div>

              {/* Optional subtle overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Caption (visible on hover) */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-white text-sm font-medium drop-shadow-md">
                  {photo.alt}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* See All / Show Less Button */}
        {photos.length > 5 && (
          <div className="mt-10 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="
                inline-flex items-center px-8 py-4 
                text-base font-semibold 
                text-white bg-blue-600 hover:bg-blue-700 
                dark:bg-blue-700 dark:hover:bg-blue-600
                rounded-full shadow-lg hover:shadow-xl 
                focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800
                transition-all duration-300 transform hover:-translate-y-1
              "
            >
              {showAll ? "Show Less" : "See All Photos"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;
