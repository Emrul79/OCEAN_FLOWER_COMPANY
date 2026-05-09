// src/components/about/GallerySection.jsx
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
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
  const [selectedIndex, setSelectedIndex] = useState(null); // index of selected photo

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
      src: Photo11,
      alt: "Skilled hospital support staff",
    },
    {
      src: Photo6,
      alt: "General labor team at construction site",
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
  const displayedPhotos = showAll ? photos : photos.slice(0, 5);

  const selectedPhoto = selectedIndex !== null ? photos[selectedIndex] : null;

  // Navigation functions
  const goToNext = () => {
    setSelectedIndex((prev) => (prev + 1) % photos.length);
  };

  const goToPrev = () => {
    setSelectedIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return;
      if (e.key === "ArrowRight") goToNext();
      if (e.key === "ArrowLeft") goToPrev();
      if (e.key === "Escape") setSelectedIndex(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  // Swipe handling for mobile
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) goToNext();
    if (isRightSwipe) goToPrev();
  };

  // Grid & card animations (same as before)
  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.92 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
    exit: { opacity: 0, y: 20, scale: 0.95, transition: { duration: 0.3 } },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.75 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", damping: 25, stiffness: 180 },
    },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.25 } },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.2 } },
  };

  return (
    <>
      <section className="py-16 md:py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white"
            >
              Our Team in Action
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            >
              See our professional workforce delivering excellence across
              construction, healthcare, industrial, cleaning, and general labor
              sectors in Jeddah and Saudi Arabia.
            </motion.p>
          </div>

          {/* Gallery Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={showAll ? "expanded" : "collapsed"}
              variants={gridVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
            >
              <AnimatePresence>
                {displayedPhotos.map((photo, index) => (
                  <motion.div
                    key={photo.src}
                    variants={cardVariants}
                    layout
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="group relative overflow-hidden rounded-2xl shadow-md bg-gray-100 dark:bg-gray-800 cursor-pointer"
                    onClick={() => setSelectedIndex(photos.indexOf(photo))}
                    whileHover={{ scale: 1.04, transition: { duration: 0.3 } }}
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <p className="text-white text-sm font-medium drop-shadow-md">
                        {photo.alt}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </AnimatePresence>

          {/* See All Button */}
          {photos.length > 5 && (
            <div className="mt-10 text-center">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setShowAll(!showAll)}
                className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
              >
                {showAll ? "Show Less" : "See All Photos"}
              </motion.button>
            </div>
          )}
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={overlayVariants}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
            onClick={() => setSelectedIndex(null)}
          >
            <motion.div
              variants={modalVariants}
              className="relative max-w-6xl w-full max-h-[90vh] rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedIndex(null)}
                className="absolute top-4 right-4 z-20 text-white bg-black/50 hover:bg-black/70 rounded-full w-10 h-10 flex items-center justify-center text-2xl font-bold transition-colors"
              >
                ×
              </button>

              {/* Navigation Arrows */}
              <button
                onClick={goToPrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 text-white bg-black/50 hover:bg-black/70 rounded-full w-12 h-12 flex items-center justify-center text-2xl transition-colors"
              >
                ←
              </button>
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 text-white bg-black/50 hover:bg-black/70 rounded-full w-12 h-12 flex items-center justify-center text-2xl transition-colors"
              >
                →
              </button>

              {/* Image with swipe support */}
              <div
                className="flex items-center justify-center h-full"
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
              >
                <img
                  src={selectedPhoto.src}
                  alt={selectedPhoto.alt}
                  className="w-full max-h-[85vh] object-contain"
                />
              </div>

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-center">
                <p className="text-white text-lg font-medium">
                  {selectedPhoto.alt}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default GallerySection;
