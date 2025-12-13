import { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import TechStackCarousel from "../components/TechStackCarousel.jsx";
import { projects } from "../constants/index.js";

gsap.registerPlugin(ScrollTrigger);

// Image component with error handling
const ProjectImage = ({
  src,
  alt,
  className = "",
  containerClassName = "",
  priority = false,
}) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const handleLoad = () => setLoading(false);
  const handleError = () => {
    setLoading(false);
    setError(true);
  };

  return (
    <div className={`${containerClassName} ${loading ? "image-loading" : ""}`}>
      {error ? (
        <div className="image-error w-full h-full rounded-xl">
          <div className="text-center">
            <svg
              className="mx-auto h-12 w-12 text-white-50"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <p className="mt-2 text-sm">Image unavailable</p>
          </div>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          onLoad={handleLoad}
          onError={handleError}
          className={`${className} transition-opacity duration-500 ${
            loading ? "opacity-0" : "opacity-100"
          }`}
        />
      )}
    </div>
  );
};

const ShowCaseSection = () => {
  const sectionRef = useRef(null);
  const featuredRef = useRef(null);
  const secondaryRef = useRef([]);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animation for featured project
    if (featuredRef.current) {
      gsap.fromTo(
        featuredRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3,
          scrollTrigger: {
            trigger: featuredRef.current,
            start: "top bottom-=100",
          },
        }
      );
    }

    // Animations for secondary projects
    secondaryRef.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(
          card,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: 0.2 * (index + 1),
            scrollTrigger: {
              trigger: card,
              start: "top bottom-=100",
            },
          }
        );
      }
    });
  }, []);

  // Separate featured and secondary projects
  const featuredProject = projects.find((p) => p.featured);
  const secondaryProjects = projects.filter((p) => !p.featured);

  return (
    <div
      id="work"
      ref={sectionRef}
      className="w-full mt-20 px-5 md:px-20 py-10 md:py-20"
    >
      <div className="w-full">
        {/* Featured Project - Full Width */}
        {featuredProject && (
          <div ref={featuredRef} className="w-full mb-10 md:mb-16">
            <ProjectImage
              src={featuredProject.imagePath}
              alt={featuredProject.title}
              priority={true}
              containerClassName="group overflow-hidden rounded-xl xl:h-[70vh] md:h-[50vh] h-96 relative mb-6"
              className="w-full h-full object-cover absolute inset-0 transition-transform duration-500 group-hover:scale-105"
            />
            <div className="space-y-5">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-0">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-0">
                  {featuredProject.title}
                </h2>
                {featuredProject.role && (
                  <span className="hero-badge">{featuredProject.role}</span>
                )}
              </div>
              {featuredProject.subtitle && (
                <h3 className="text-xl md:text-2xl text-white-50">
                  {featuredProject.subtitle}
                </h3>
              )}
              {featuredProject.scale && (
                <p className="text-white-50 md:text-lg">
                  <span className="font-semibold text-white">Scale:</span>{" "}
                  {featuredProject.scale}
                </p>
              )}
              <p className="text-white-50 md:text-xl">
                {featuredProject.description}
              </p>

              {/* Tech Stack Carousel */}
              {featuredProject.techStack &&
                featuredProject.techStack.length > 0 && (
                  <div className="mt-6">
                    <h4 className="text-white font-semibold mb-4 text-lg">
                      Tech Stack
                    </h4>
                    <TechStackCarousel techStack={featuredProject.techStack} />
                  </div>
                )}

              {/* Highlights */}
              {featuredProject.highlights &&
                featuredProject.highlights.length > 0 && (
                  <div className="mt-6">
                    <h4 className="text-white font-semibold mb-3 text-lg">
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {featuredProject.highlights.map((highlight, index) => (
                        <li
                          key={index}
                          className="text-white-50 flex items-start gap-2"
                        >
                          <span className="text-blue-50">✓</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 mt-6">
                {featuredProject.liveUrl && (
                  <a
                    href={featuredProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${featuredProject.title} project`}
                    className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black font-semibold text-lg rounded-lg overflow-hidden transition-all duration-300 hover:bg-white-50 hover:scale-105 hover:shadow-lg"
                  >
                    <span className="relative z-10">View Project</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="size-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                      />
                    </svg>
                  </a>
                )}
                {featuredProject.githubUrl && (
                  <a
                    href={featuredProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View source code for ${featuredProject.title}`}
                    className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-black-200 text-white border border-white-50 font-semibold text-lg rounded-lg overflow-hidden transition-all duration-300 hover:bg-white-50 hover:text-black hover:scale-105 hover:shadow-lg"
                  >
                    <span className="relative z-10">View Code</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="size-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                      />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Secondary Projects - 2 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {secondaryProjects.slice(0, 2).map((project, index) => (
            <article
              key={project.id}
              className="project-card"
              ref={(el) => (secondaryRef.current[index] = el)}
            >
              <ProjectImage
                src={project.imagePath}
                alt={project.title}
                priority={false}
                containerClassName={`${
                  project.id === 3
                    ? "bg-[#FFEFDB]"
                    : project.id === 4
                    ? "bg-[#FFE7EB]"
                    : ""
                } group overflow-hidden rounded-xl xl:h-[40vh] md:h-52 lg:h-72 h-64 relative mb-4 xl:px-5 2xl:px-12 py-0`}
                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
              />
              <div>
                <h2 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2">
                  {project.title}
                </h2>
                {project.subtitle && (
                  <p className="text-white-50 mb-3">{project.subtitle}</p>
                )}
                <p className="text-white-50 text-sm md:text-base mb-4">
                  {project.description}
                </p>

                {/* Tech Stack Carousel */}
                {project.techStack && project.techStack.length > 0 && (
                  <div className="mb-4">
                    <h4 className="text-white font-semibold mb-2 text-sm">
                      Tech Stack
                    </h4>
                    <TechStackCarousel
                      techStack={project.techStack}
                      autoPlayInterval={4000}
                    />
                  </div>
                )}

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-3 mt-5">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} live demo`}
                      className="group relative inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:bg-white-50 hover:scale-105 hover:shadow-lg"
                    >
                      <span className="relative z-10">Live Demo</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="size-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                        />
                      </svg>
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View source code for ${project.title}`}
                      className="group relative inline-flex items-center justify-center gap-2 px-6 py-3 bg-black-200 text-white border border-white-50 font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:bg-white-50 hover:text-black hover:scale-105 hover:shadow-lg"
                    >
                      <span className="relative z-10">View Code</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="size-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                        />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShowCaseSection;
