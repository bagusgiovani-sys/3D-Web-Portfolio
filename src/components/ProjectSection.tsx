import {useRef, useEffect} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SlShareAlt } from "react-icons/sl";





const ProjectSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const titleLineRef = useRef<HTMLDivElement>(null);

  /// Project Images Data Array ///
  const projectImage = [
    {
      id: 1,
      src: "/project1.png",
      title: "Project One",
      alt: "Project 1",
  
    },

    {
      id: 2,
      src: "/project1.png",
      title: "Project Two",
      alt: "Project 2",
  
    },

    {
      id: 1,
      src: "/project1.png",
      title: "Project Three",
      alt: "Project 3",
  
    },

    {
      id: 1,
      src: "/project1.png",
      title: "Project Four",
      alt: "Project 4",
  
    },
  ];
    




  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Title Animation// 
    gsap.fromTo(
      titleRef.current,
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        }
      }
    )
  }, []);

  // Title Line Animation //
  gsap.fromTo(
    titleLineRef.current,
    {
      width: "0%",
      opacity: 0,
    },
    {
      width: "100%",
      opacity: 1,
      duration: 1,
      ease: "power3.out",
      delay: 0.3,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      }
    }
  );




  return (
    <section 
    id="horizontal-section" 
    className="relative py-20 bg-[#f6f6f6] overflow-hidden"
    >

    {/* Section title */}

    <div className="container mx-auto px-4 mb-16 relative z-10">
      <h2 
        ref={titleRef}
        className="text-4xl md:text-5xl lg:text-6xl text-center font-bold text-black dark:text-white mb-8">
        Featured Projects
        </h2>
        <div 
          ref={titleLineRef}
          className="w-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto opacity-0">
        </div>
    </div>

    {/* Horizontal Scroll Section */}

    <div ref={triggerRef} className="overflow-hidden">
      <div className="horizontal-section flex md:w-[400%] w-[420%]">

        {projectImage.map((project) => (
          <div 
            Loading
            key={project.id}
            className="panel relative flex items-center justify-center">
            
              <div className=" relative w-full h-full flex flex-col items-center justify-center p-4 sm:p-8 md:p-12">
                <img
                  className="project-image max-w-full max-h-full rounded-2xl object-cover"
                  src={project.src}
                  alt={project-img}
                />

                <h2 className="project-title flex items-center gap-3 md:text-3xl text-sm md:font-bold text-black mt-6 z-50 text-nowrap hover:text-gray-400 transition colors duration-300 cursor-pointer">
                </h2>
            </div>
          </div>
        ))}
          
      </div>
    

    </div>

    </section>
  )
}


export default ProjectSection