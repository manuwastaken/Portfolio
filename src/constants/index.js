export const myProjects = [
  {
    id: 1,
    title: "2048 Game (RISC-V Assembly)",
    description:
      "Terminal-based implementation of the 2048 game written entirely in RISC-V assembly.",
    subDescription: [
      "Implemented tile shifting, merging logic, and move validation using low-level assembly routines.",
      "Designed modular subroutines for game-state tracking and score calculation.",
      "Built a dynamic 4×4 terminal board renderer.",
      "Strengthened understanding of memory layout, registers, and debugging in assembly.",
    ],
    href: "",
    logo: "",
    image: `${import.meta.env.BASE_URL}assets/projects/2048.png`,
    tags: [
      { id: 1, name: "RISC-V", path: `${import.meta.env.BASE_URL}assets/logos/riscv.png` },
      { id: 2, name: "Assembly", path: `${import.meta.env.BASE_URL}assets/logos/riscv.png` },
      { id: 3, name: "Systems Programming", path: `${import.meta.env.BASE_URL}assets/logos/cplusplus.svg` },
    ],
  },

  {
    id: 2,
    title: "Seam Carving - Content-Aware Image Resizing (C)",
    description:
      "A dynamic-programming-based image resizing tool that removes low-energy seams.",
    subDescription: [
      "Implemented energy-map computation and seam detection using dynamic programming.",
      "Built iterative seam removal pipeline for intelligent image resizing.",
      "Added CLI tools for seam visualization and brightness statistics.",
      "Optimized pixel manipulation with efficient memory access.",
    ],
    href: "",
    logo: "",
    image: `${import.meta.env.BASE_URL}assets/projects/seam-carving.png`,
    tags: [
      { id: 1, name: "C", path: `${import.meta.env.BASE_URL}assets/logos/c.svg` },
      { id: 2, name: "Algorithms", path: `${import.meta.env.BASE_URL}assets/logos/cplusplus.svg` },
      { id: 3, name: "Dynamic Programming", path: `${import.meta.env.BASE_URL}assets/logos/cplusplus.svg` },
    ],
  },

  {
    id: 3,
    title: "Wordle Terminal Game (C)",
    description:
      "Feature-complete terminal version of Wordle with extended gameplay logic.",
    subDescription: [
      "Implemented trie-based dictionary lookup for fast word validation.",
      "Built Unicode-based colored feedback system for guesses.",
      "Added full gameplay loop with replay support and win detection.",
      "Designed Quantum Wordle mode supporting dual hidden words.",
    ],
    href: "",
    logo: "",
    image: `${import.meta.env.BASE_URL}assets/projects/wordle.png`,
    tags: [
      { id: 1, name: "C", path: `${import.meta.env.BASE_URL}assets/logos/c.svg` },
      { id: 2, name: "Data Structures", path: `${import.meta.env.BASE_URL}assets/logos/cplusplus.svg` },
      { id: 3, name: "Trie", path: `${import.meta.env.BASE_URL}assets/logos/cplusplus.svg` },
    ],
  },

  {
    id: 4,
    title: "Stock Market Sentiment Analyzer",
    description:
      "LLM-powered sentiment analyzer that extracts insights from financial newsletters.",
    subDescription: [
      "Built an email scraping pipeline using IMAP.",
      "Summarized financial content using an LLM-based NLP workflow.",
      "Generated bullish/bearish sentiment indicators.",
      "Integrated text-to-speech playback via a custom GUI.",
    ],
    href: "",
    logo: "",
    image: `${import.meta.env.BASE_URL}assets/projects/sentiment.jpg`,
    tags: [
      { id: 1, name: "Python", path: `${import.meta.env.BASE_URL}assets/logos/python.svg` },
      { id: 2, name: "NLP", path: `${import.meta.env.BASE_URL}assets/logos/python.svg` },
      { id: 3, name: "IMAP", path: `${import.meta.env.BASE_URL}assets/logos/python.svg` },
      { id: 4, name: "GUI", path: `${import.meta.env.BASE_URL}assets/logos/python.svg` },
    ],
  },

 /* {
    id: 5,
    title: "Portfolio Website",
    description:
      "Personal developer portfolio showcasing projects and technical skills.",
    subDescription: [
      "Built responsive UI using React and Tailwind CSS.",
      "Structured reusable project components with modular architecture.",
      "Optimized performance and accessibility for recruiter viewing.",
      "Deployed with modern frontend tooling.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/portfolio.jpg",
    tags: [
      { id: 1, name: "React", path: "/assets/logos/react.svg" },
      { id: 2, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
      { id: 3, name: "JavaScript", path: "/assets/logos/javascript.svg" },
    ],
  },

*/
];
export const mySocials = [
  /*{
    name: "WhatsApp",
    href: "",
    icon: "/assets/socials/whatsApp.svg",
  },*/
  {
    name: "Linkedin",
    href: "www.linkedin.com/in/abdulrehmanhasan",
    icon: `${import.meta.env.BASE_URL}assets/socials/linkedIn.svg`,
  },
  /*{
    name: "Email",
    href: "abdulrehmanhasan6@gmail.com",
    icon: `${import.meta.env.BASE_URL}assets/socials/email.png`,
  },*/
];