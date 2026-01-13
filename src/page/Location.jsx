import { useEffect, useRef, useState } from "react";

const InteractiveMap = () => {
  const [selectedCity, setSelectedCity] = useState("Jeddah");
  const [hoveredCity, setHoveredCity] = useState(null);
  const [mapTransform, setMapTransform] = useState({ x: 0, y: 0, scale: 1 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const mapRef = useRef(null);
  const [isInitialized, setIsInitialized] = useState(false);

  const cities = [
    { id: 1, name: "Jeddah", x: 320, y: 450, isMain: true },
    { id: 2, name: "Makkah", x: 360, y: 480 },
    { id: 3, name: "Madinah", x: 380, y: 280 },
    { id: 4, name: "Riyadh", x: 550, y: 420 },
    { id: 5, name: "Taif", x: 380, y: 510 },
    { id: 6, name: "Al-Wash", x: 520, y: 380 },
    { id: 7, name: "Khobar", x: 700, y: 430 },
    { id: 8, name: "NEOM", x: 280, y: 180 },
  ];

  // Auto-zoom to Jeddah on component mount
  useEffect(() => {
    if (!isInitialized) {
      const jeddah = cities.find((c) => c.name === "Jeddah");
      if (jeddah) {
        setTimeout(() => {
          const centerX = 400 - jeddah.x * 1.5;
          const centerY = 300 - jeddah.y * 1.5;
          setMapTransform({ x: centerX, y: centerY, scale: 1.5 });
          setIsInitialized(true);
        }, 500);
      }
    }
  }, [isInitialized]);

  const handleCitySelect = (cityName) => {
    setSelectedCity(cityName);
    const city = cities.find((c) => c.name === cityName);
    if (city) {
      // Zoom to the selected city
      const centerX = 400 - city.x * 1.5;
      const centerY = 300 - city.y * 1.5;
      setMapTransform({ x: centerX, y: centerY, scale: 1.5 });
    }
  };

  const handleReset = () => {
    setSelectedCity("");
    setMapTransform({ x: 0, y: 0, scale: 1 });
  };

  const handleWheel = (e) => {
    e.preventDefault();
    const delta = e.deltaY * -0.001;
    const newScale = Math.min(Math.max(0.5, mapTransform.scale + delta), 3);
    setMapTransform((prev) => ({ ...prev, scale: newScale }));
  };

  const handleMouseDown = (e) => {
    if (e.target.closest(".city-marker")) return;
    setIsDragging(true);
    setDragStart({
      x: e.clientX - mapTransform.x,
      y: e.clientY - mapTransform.y,
    });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    setMapTransform((prev) => ({
      ...prev,
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    }));
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, [isDragging, dragStart]);

  return (
    <section className="py-15 lg:py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 space-y-6">
          <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm tracking-wider uppercase bg-blue-50 dark:bg-blue-900/30 px-4 py-2 rounded-full inline-block">
            Our Presence
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
            Nationwide Coverage to Support Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Business Need
            </span>
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Our services extend to all major cities in Saudi Arabia, including
          </p>
        </div>

        {/* City Selector */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <select
              value={selectedCity}
              onChange={(e) => handleCitySelect(e.target.value)}
              className="w-full px-6 py-4 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white font-medium text-lg focus:outline-none focus:border-blue-600 dark:focus:border-blue-400 transition-all duration-300 appearance-none cursor-pointer shadow-lg hover:shadow-xl"
            >
              <option value="">Select Your City</option>
              {cities.map((city) => (
                <option key={city.id} value={city.name}>
                  {city.name} {city.isMain ? "(Main Office)" : ""}
                </option>
              ))}
            </select>
            <svg
              className="absolute right-6 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400 pointer-events-none"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>

          {selectedCity && (
            <button
              onClick={handleReset}
              className="mt-4 mx-auto flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold transition-colors"
            >
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
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
              Reset View
            </button>
          )}
        </div>

        {/* Map Container */}
        <div className="relative bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden border-4 border-gray-100 dark:border-gray-700">
          <div
            ref={mapRef}
            className={`relative w-full h-[500px] lg:h-[700px] ${
              isDragging ? "cursor-grabbing" : "cursor-grab"
            }`}
            onWheel={handleWheel}
            onMouseDown={handleMouseDown}
          >
            {/* Instructions */}
            <div className="absolute top-4 left-4 z-20 bg-blue-600 dark:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-lg text-sm font-medium">
              🖱️ Drag to pan • Scroll to zoom
            </div>

            {/* Saudi Arabia Map SVG */}
            <svg
              viewBox="0 0 800 600"
              className="w-full h-full"
              style={{
                transform: `translate(${mapTransform.x}px, ${mapTransform.y}px) scale(${mapTransform.scale})`,
                transition: isDragging ? "none" : "transform 0.5s ease-out",
              }}
            >
              {/* Saudi Arabia Outline */}
              <path
                d="M150,150 L250,120 L350,140 L450,130 L550,150 L650,180 L720,220 L750,280 L760,350 L750,420 L720,480 L650,520 L550,540 L450,550 L380,540 L320,520 L280,490 L250,450 L230,400 L220,350 L200,300 L180,250 L160,200 Z"
                fill="currentColor"
                className="text-gray-200 dark:text-gray-700 transition-colors duration-300"
                stroke="currentColor"
                strokeWidth="2"
              />

              {/* Cities */}
              {cities.map((city) => {
                const isSelected = selectedCity === city.name;
                const isHovered = hoveredCity === city.name;

                return (
                  <g
                    key={city.id}
                    className="city-marker cursor-pointer"
                    onMouseEnter={() => setHoveredCity(city.name)}
                    onMouseLeave={() => setHoveredCity(null)}
                    onClick={() => handleCitySelect(city.name)}
                  >
                    {/* Pulse animation for selected city */}
                    {isSelected && (
                      <circle
                        cx={city.x}
                        cy={city.y}
                        r="20"
                        fill="currentColor"
                        className="text-blue-400 dark:text-blue-500 animate-ping opacity-75"
                      />
                    )}

                    {/* Main marker */}
                    <circle
                      cx={city.x}
                      cy={city.y}
                      r={city.isMain ? "12" : "8"}
                      fill="currentColor"
                      className={`transition-all duration-300 ${
                        city.isMain
                          ? "text-red-600 dark:text-red-500"
                          : isSelected
                          ? "text-blue-600 dark:text-blue-400"
                          : "text-orange-500 dark:text-orange-400"
                      } ${
                        isHovered || isSelected ? "opacity-100" : "opacity-80"
                      }`}
                      style={{
                        filter:
                          isHovered || isSelected
                            ? "drop-shadow(0 0 10px currentColor)"
                            : "none",
                      }}
                    />

                    {/* Outer ring */}
                    <circle
                      cx={city.x}
                      cy={city.y}
                      r={city.isMain ? "16" : "12"}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className={`transition-all duration-300 ${
                        city.isMain
                          ? "text-red-600 dark:text-red-500"
                          : isSelected
                          ? "text-blue-600 dark:text-blue-400"
                          : "text-orange-500 dark:text-orange-400"
                      }`}
                      opacity={isHovered || isSelected ? "1" : "0"}
                    />

                    {/* City label */}
                    <text
                      x={city.x}
                      y={city.y - 20}
                      textAnchor="middle"
                      className={`text-sm font-bold transition-all duration-300 ${
                        isHovered || isSelected
                          ? "fill-blue-600 dark:fill-blue-400 opacity-100"
                          : "fill-gray-700 dark:fill-gray-300 opacity-70"
                      }`}
                      style={{
                        filter:
                          isHovered || isSelected
                            ? "drop-shadow(0 2px 4px rgba(0,0,0,0.3))"
                            : "none",
                      }}
                    >
                      {city.name}
                      {city.isMain && " ⭐"}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Legend */}
          <div className="absolute bottom-4 right-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg border-2 border-gray-200 dark:border-gray-700">
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-red-600 dark:bg-red-500"></div>
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  Main Office
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-orange-500 dark:bg-orange-400"></div>
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  Branch Offices
                </span>
              </div>
            </div>
          </div>

          {/* Zoom Controls */}
          <div className="absolute bottom-4 left-4 flex flex-col gap-2">
            <button
              onClick={() =>
                setMapTransform((prev) => ({
                  ...prev,
                  scale: Math.min(prev.scale + 0.2, 3),
                }))
              }
              className="bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 p-3 rounded-lg shadow-lg border-2 border-gray-200 dark:border-gray-700 transition-colors"
            >
              <svg
                className="w-6 h-6 text-gray-700 dark:text-gray-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </button>
            <button
              onClick={() =>
                setMapTransform((prev) => ({
                  ...prev,
                  scale: Math.max(prev.scale - 0.2, 0.5),
                }))
              }
              className="bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 p-3 rounded-lg shadow-lg border-2 border-gray-200 dark:border-gray-700 transition-colors"
            >
              <svg
                className="w-6 h-6 text-gray-700 dark:text-gray-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20 12H4"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Selected City Info */}
        {selectedCity && (
          <div className="mt-8 max-w-2xl mx-auto bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white shadow-2xl transform transition-all duration-500 animate-fadeIn">
            <div className="flex items-start gap-4">
              <div className="bg-white/20 p-4 rounded-xl backdrop-blur-sm">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">
                  {selectedCity}{" "}
                  {cities.find((c) => c.name === selectedCity)?.isMain &&
                    "- Main Office"}
                </h3>
                <p className="text-white/90 text-lg">
                  We provide comprehensive manpower and construction services in{" "}
                  {selectedCity}. Contact us to discuss your project needs.
                </p>
                <button className="mt-4 bg-white text-blue-600 hover:bg-blue-50 font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg">
                  Contact {selectedCity} Office
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </section>
  );
};

export default InteractiveMap;
