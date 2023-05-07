import frame2 from "./assets/Frame2.png";
import frame3 from "./assets/Frame3.png";
import frame4 from "./assets/Frame4.png";
import frame5 from "./assets/Frame5.png";
import frame6 from "./assets/Frame6.png";

const PROJECTS = [
  {
    id: "1001",
    name: "UI Framework and Design System",
    projectName: "MayUI",
    tags: ["ReactJS", "Typescript", "Tailwind", "HeadlessUI", "Figma"],
    description:
      "I have constructed a personalized user interface (UI) framework utilizing ReactJS and Tailwind that is intended for implementation in SaaS (Software as a Service) applications. The UI kit is built in typscript language with some help of headlessUI and TailwindCSS",
    tumbnailLink: frame2,

    codeLink: "",
    demoLink: "",
  },
  {
    id: "1002",
    name: "Deeplink Management Micro-SaaS",
    projectName: "Cytelink",
    tags: ["NextJS", "Deeplinking", "AWS", "Nodejs", "URL Shortner"],
    description:
      "A sweet micro SaaS aimed towards link management (deep linking, link shortening, bar code generation for link, link analytics , etc) and link page creation built in MERN stack.",
    tumbnailLink: frame3,
    codeLink: "https://github.com/Cytescale/cicada",
    demoLink: "https://www.youtube.com/watch?v=oQLU_wxEH6s&t=47s",
  },
  {
    id: "1003",
    name: "Blockchain based Medical Record Management System",
    projectName: "MDProMax",
    tags: [
      "Blockchain",
      "React Native",
      "Nodejs",
      "AWS",
      "DataManagement",
      "IPFS",
    ],
    description:
      "My final year project based upon blockchain which aims to manage all the patient medical record data in a decentralised fashion for patients and doctors",
    tumbnailLink: frame4,
    codeLink: "https://github.com/Cytescale/FinalProjectFront",
    demoLink: "https://www.youtube.com/watch?v=_mlnMmCLPaw&t=34s",
  },
  {
    id: "1004",
    name: "Notion like WYSIWYG Editor in DraftJs",
    projectName: "Sienna",
    tags: [
      "Blockchain",
      "React Native",
      "Nodejs",
      "AWS",
      "DataManagement",
      "IPFS",
    ],
    description:
      "A notion like text editor made in ReactJs and DraftJS, using Zustand library for global state management.",
    tumbnailLink: frame5,
    codeLink: "",
    tryLink: "https://vercel.com/cytescale/sienna",
    demoLink: "https://www.youtube.com/watch?v=7xsGGHfs1Iw",
  },
  {
    id: "1005",
    name: "High Performance Backend Server written in Javascript",
    projectName: "Nexus",
    tags: [
      "Javascript",
      "Supabase",
      "Nodejs",
      "AWS",
      "PM2",
      "ExpressJS",
      "MongoDB",
    ],
    description:
      "A high performance backend server written in javascript to serve all the request made by all the various projects.",
    tumbnailLink: frame6,
    codeLink: "https://github.com/Cytescale/Backend",
    demoLink: "",
  },
];

export default PROJECTS;
