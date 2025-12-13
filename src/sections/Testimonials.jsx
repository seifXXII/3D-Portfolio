import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    id: 1,
    name: "Client Name",
    role: "CEO, Company Name",
    image: "/images/avatar1.png",
    testimonial:
      "Working with Seif was an absolute pleasure. His attention to detail and ability to bring our vision to life exceeded our expectations.",
  },
  {
    id: 2,
    name: "Another Client",
    role: "Product Manager, Tech Co",
    image: "/images/avatar2.png",
    testimonial:
      "Exceptional developer with great communication skills. Delivered a high-quality product on time and within budget.",
  },
  {
    id: 3,
    name: "Team Member",
    role: "Senior Developer, Startup",
    image: "/images/avatar3.png",
    testimonial:
      "Seif's expertise in React and modern web technologies is impressive. A valuable team member who consistently delivers quality work.",
  },
];

const Testimonials = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useGSAP(() => {
    cardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(
          card,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: index * 0.2,
            scrollTrigger: {
              trigger: card,
              start: "top bottom-=100",
            },
          }
        );
      }
    });
  }, []);

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="section-padding min-h-screen flex items-center"
    >
      <div className="w-full md:px-10 px-5">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            What People Say
          </h2>
          <p className="text-white-50 text-lg md:text-xl max-w-3xl mx-auto">
            Feedback from clients and colleagues I've had the pleasure of
            working with
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <article
              key={testimonial.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className="card-border rounded-xl p-8 flex flex-col gap-6 hover:border-blue-50 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-50 to-white-50 flex items-center justify-center text-2xl font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                  <p className="text-white-50 text-sm">{testimonial.role}</p>
                </div>
              </div>

              <blockquote className="text-white-50 text-lg relative">
                <span className="absolute -top-2 -left-2 text-5xl text-blue-50 opacity-30">
                  "
                </span>
                <p className="relative z-10">{testimonial.testimonial}</p>
                <span className="absolute -bottom-4 -right-2 text-5xl text-blue-50 opacity-30">
                  "
                </span>
              </blockquote>

              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
