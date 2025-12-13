import { useState, useEffect } from "react";

const ScrollProgressIndicator = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx = Math.max(
        1,
        document.documentElement.scrollHeight -
          document.documentElement.clientHeight
      );

      // Calculate scroll percentage
      const scrolled = (scrollPx / winHeightPx) * 100;

      // Clamp value to [0, 100] to prevent NaN/Infinity
      const clampedProgress = Math.min(100, Math.max(0, scrolled));

      setScrollProgress(clampedProgress);
    };

    // Initialize scroll progress on mount
    updateScrollProgress();

    // Add scroll listener with passive option for better performance
    window.addEventListener("scroll", updateScrollProgress, { passive: true });

    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-50 via-white-50 to-blue-50 z-[200] transition-all duration-200"
      style={{
        width: `${scrollProgress}%`,
      }}
      role="progressbar"
      aria-valuenow={Math.round(scrollProgress)}
      aria-valuemin="0"
      aria-valuemax="100"
      aria-label="Page scroll progress"
    />
  );
};

export default ScrollProgressIndicator;
