import { useState, useEffect, useRef, useCallback } from "react";

const TechStackCarousel = ({ techStack, autoPlayInterval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const intervalRef = useRef(null);

  const totalItems = techStack?.length || 0;

  const handleNext = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % totalItems);
    setTimeout(() => setIsTransitioning(false), 300);
  }, [isTransitioning, totalItems]);

  // Auto-advance carousel
  useEffect(() => {
    if (!isPaused && totalItems > 1 && autoPlayInterval > 0) {
      intervalRef.current = setInterval(() => {
        handleNext();
      }, autoPlayInterval);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [currentIndex, isPaused, totalItems, autoPlayInterval, handleNext]);

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const goToSlide = (index) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  if (!techStack || totalItems === 0) {
    return <p className="text-white-50">No tech stack available</p>;
  }

  // If only one item, show it without carousel controls
  if (totalItems === 1) {
    return (
      <div className="tech-carousel-single">
        <p className="text-white-50 md:text-lg">
          <span className="font-semibold text-white">
            {techStack[0].category}:
          </span>{" "}
          {techStack[0].technology}
        </p>
      </div>
    );
  }

  const currentItem = techStack[currentIndex];

  return (
    <div
      className="tech-carousel-container relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Carousel Content */}
      <div className="tech-carousel-content min-h-[80px] md:min-h-[60px] flex items-center justify-center overflow-hidden">
        <div key={currentIndex} className="tech-carousel-item animate-fadeIn">
          <p className="text-white-50 md:text-lg text-center px-4">
            <span className="font-semibold text-white">
              {currentItem.category}:
            </span>{" "}
            {currentItem.technology}
          </p>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="tech-carousel-nav flex items-center justify-center gap-4 mt-4">
        <button
          onClick={handlePrev}
          disabled={isTransitioning}
          className="carousel-btn-prev size-8 rounded-full border border-white-50 flex items-center justify-center hover:bg-white-50 hover:text-black transition-all duration-300 disabled:opacity-50"
          aria-label="Previous tech stack"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>

        {/* Indicators */}
        <div className="flex gap-2">
          {techStack.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              disabled={isTransitioning}
              className={`carousel-indicator size-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-white w-8"
                  : "bg-white-50 hover:bg-white"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          disabled={isTransitioning}
          className="carousel-btn-next size-8 rounded-full border border-white-50 flex items-center justify-center hover:bg-white-50 hover:text-black transition-all duration-300 disabled:opacity-50"
          aria-label="Next tech stack"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TechStackCarousel;
