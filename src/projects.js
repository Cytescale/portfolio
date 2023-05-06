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
    tags: ["ReactJS", "Typescript", "Tailwind", "HeadlessUI"],
    description:
      "A custom UI Framework built using ReactJS and Tailwind to be used in SaaS applications",
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
    codeLink: "",
    demoLink: "",
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
    codeLink: "",
    demoLink: "",
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
    demoLink: "",
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
    codeLink: "",
    demoLink: "",
  },
];

export default PROJECTS;
