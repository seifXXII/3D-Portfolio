import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);

  useGSAP(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top center+=100",
          },
        }
      );
    }

    // Stagger animation for timeline items
    if (timelineRef.current) {
      const items = timelineRef.current.querySelectorAll(".timeline-item");
      gsap.fromTo(
        items,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top center+=100",
          },
        }
      );
    }
  }, []);

  const timeline = [
    {
      year: "2025",
      title: "Frontend Developer at Whispyr",
      description:
        "Building enterprise CRM with Next.js 15, React 19, and cutting-edge technologies",
    },
    {
      year: "2024",
      title: "Freelance Developer",
      description:
        "Creating modern, responsive web applications for various clients",
    },
    {
      year: "2023",
      title: "Started Development Journey",
      description:
        "Began learning web development with focus on React and modern JavaScript",
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section-padding min-h-screen flex items-center"
    >
      <div className="w-full md:px-10 px-5">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            About Me
          </h2>
          <p className="text-white-50 text-lg md:text-xl max-w-3xl mx-auto">
            A passionate frontend developer dedicated to crafting exceptional
            digital experiences through clean code and modern design principles.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16">
          {/* Left Column - Bio */}
          <div className="space-y-6">
            <div className="card-border rounded-xl p-8">
              <h3 className="text-2xl font-semibold mb-4">My Story</h3>
              <div className="space-y-4 text-white-50">
                <p>
                  Hi! I'm Seif, a frontend developer based in Egypt with a deep
                  passion for creating modern, responsive web experiences.
                </p>
                <p>
                  I specialize in React, TypeScript, and modern web
                  technologies, with a particular interest in 3D web experiences
                  using Three.js and interactive animations with GSAP.
                </p>
                <p>
                  My approach combines technical expertise with a keen eye for
                  design, ensuring that every project not only functions
                  flawlessly but also delivers an exceptional user experience.
                </p>
              </div>
            </div>

            <div className="card-border rounded-xl p-8">
              <h3 className="text-2xl font-semibold mb-4">Core Skills</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "React & Next.js",
                  "TypeScript",
                  "Three.js",
                  "GSAP Animations",
                  "Tailwind CSS",
                  "Responsive Design",
                  "Performance Optimization",
                  "Accessibility",
                ].map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-2 text-white-50"
                  >
                    <span className="text-blue-50">▹</span>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Timeline */}
          <div ref={timelineRef} className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-50 via-white-50 to-transparent"></div>

            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="timeline-item relative pl-20">
                  <div className="absolute left-0 top-0 w-16 h-16 rounded-full bg-black-200 border-2 border-blue-50 flex items-center justify-center">
                    <span className="text-sm font-bold">{item.year}</span>
                  </div>
                  <div className="card-border rounded-xl p-6">
                    <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                    <p className="text-white-50">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
