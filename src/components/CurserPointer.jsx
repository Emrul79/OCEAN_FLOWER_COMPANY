import { useEffect, useState } from "react";

const CursorFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseEnter = (e) => {
      // Check if hovering over interactive elements
      const target = e.target;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.onclick ||
        target.style.cursor === "pointer" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    // Add event listeners
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Main cursor dot */}
      <div
        className="fixed pointer-events-none z-[9999] mix-blend-difference"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)",
          transition: "transform 0.15s ease-out",
        }}
      >
        <div
          className={`rounded-full bg-white transition-all duration-300 ${
            isHovering ? "w-12 h-12 opacity-30" : "w-3 h-3 opacity-100"
          }`}
        ></div>
      </div>

      {/* Outer ring */}
      <div
        className="fixed pointer-events-none z-[9998] mix-blend-difference"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)",
          transition: "all 0.2s ease-out",
        }}
      >
        <div
          className={`rounded-full border-2 border-white transition-all duration-300 ${
            isHovering ? "w-16 h-16 opacity-50" : "w-8 h-8 opacity-70"
          }`}
        ></div>
      </div>
    </>
  );
};

export default CursorFollower;
