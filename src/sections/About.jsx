import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/FrameWorks";

const About = () => {
  const techStackContainer = useRef();

  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1: About Me */}
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="assets/coding-pov.png"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5] "
          />
          //<div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent pointer-events-none"></div>

          <div className="z-10">
            <p className="headtext">Hi, I'm Abdul Rehman</p>    
            <p className="subtext">
              Hi, I'm Abdul Rehman. I’m a Computer Science student at Saarland University, specializing in software engineering and machine learning. I have hands-on experience in C, C++, and Java, with solid foundations in OOP, data structures, and algorithms.

            I enjoy solving challenging problems and building practical applications. I’m currently seeking a working student position to contribute to real-world projects while growing as a developer.🚀💻
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-evets-none -bottom-4 h-1/1 sm:h-1/1 bg-linear-to-t from-[#080912]"/>
        </div>

        {/* Grid 2: Tech Stack (was Grid 5) */}     
        <div className="grid-default-color grid-2">
          <div className="z-10 w-[50%]">
            <p className="headText">Tech Stack</p>
            <p className="subtext">
              Python · C · C++ · Java · RISC-V Assembly · Git · Bash · Django · Data Structures & Algorithms · System Programming · AI/NLP
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>

        {/* Grid 3: Contact / Email (was Grid 4) */}
        <div className="grid-special-color grid-3">
          <div className="flex flex-col items-center justify-center gap-6 size-full">
            <p className="text-center headtext">
              You can find me on LinkedIn, GitHub, or via email.
           </p>
            <div className="flex items-center justify-center gap-6">
              <CopyEmailButton />
              <a
                href="https://www.linkedin.com/abdulrehmanhasan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-midnight hover:bg-gray-700 transition-colors"
              >
                <img src="/assets/socials/linkedIn.svg" alt="LinkedIn" className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/manuwastaken"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-midnight hover:bg-gray-700 transition-colors"
              >
                <img src="/assets/logos/github.png" alt="GitHub" className="w-10 h-10" />
              </a>
            </div>
          </div>
        </div>

        {/* Removed old Grid 2 (Code is Craft) and Grid 3 (Time Zone) */}
      </div>
    </section>
  );
};

export default About;