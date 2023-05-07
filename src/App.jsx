import { useEffect, useState, useRef, useContext } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  useAnimate,
  animate,
  useInView,
  useSpring,
} from "framer-motion";
import { useLayoutEffect } from "react";
import DotRing, { MouseContext } from "./utills";
import PROJECTS from "./projects";
import CV_PDF from "./assets/cv.pdf";
import { createClient } from "@supabase/supabase-js";

let color = [
  "bg-blue-100",
  "bg-red-100",
  "bg-purple-100",
  "bg-green-100",
  "bg-blue-100",
  "bg-yellow-100",
  "bg-oragne-100",
  "bg-pink-100",
];

const supabase = createClient(
  "https://lybptwtejnxrumhmgeca.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx5YnB0d3Rlam54cnVtaG1nZWNhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODMzNjI1MjYsImV4cCI6MTk5ODkzODUyNn0.lB6FRf0LLxpOdOab-uh-A9r5CZreQGpuabitlIGcKkM"
);

function getRandomColor() {
  return color[Math.floor(Math.random() * color.length)];
}

const Header = ({ mode }) => {
  const [headerRef, animate] = useAnimate();

  useEffect(() => {
    if (!mode) {
      animate(
        headerRef.current,
        { opacity: 0 },
        { ease: "linear", duration: 0.1 }
      );
    } else {
      animate(
        headerRef.current,
        { opacity: 1 },
        { ease: "linear", duration: 0.1 }
      );
    }
  }, [mode]);

  return (
    // backdrop-blur-sm bg-gradient-to-b from-slate-300/30 to-slate-300/40
    <div className="fixed w-screen  left-0 right-0 bottom-0 flex justify-center items-center mb-10 z-50 ">
      <div
        ref={headerRef}
        className="gap-4 header-cont w-fit px-3 flex flex-row justify-center items-center py-3 z-50 rounded-full "
      >
        {/* <a href="/home" className="text-black text-base hover:text-blue-400">
          Home
        </a>
        <a href="/home" className="text-black text-base  hover:text-blue-400">
          Contact
        </a> */}
        <a
          href="https://github.com/Cytescale"
          className="pl-4 text-black text-2xl  hover:text-blue-400"
        >
          <i className="ri-github-fill"></i>
        </a>
        <a
          href="https://twitter.com/NickWhoKnows"
          className="text-black text-2xl hover:text-blue-400 "
        >
          <i className="ri-twitter-fill"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/nikhilwilayate/"
          className="text-black text-2xl  hover:text-blue-400"
        >
          <i className="ri-linkedin-fill"></i>
        </a>

        <a href={CV_PDF} download="nikhilwilayatecv" target="_blank">
          <button className="bg-yellow-300 font-medium flex flex-row gap-2 justify-center items-center text-sm px-5 py-3 rounded-full">
            Résumé
            <i class="ri-download-line"></i>
          </button>
        </a>
      </div>
    </div>
  );
};

const Hero = ({ sec }) => {
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);

  return (
    <>
      <div className="flex flex-row gap-10 ">
        {/* <img src={pic} className="w-96 aspect-auto grayscale" /> */}
        <div className="flex flex-col ">
          {/* <img
            src={pic}
            className="w-32 h-32 rounded-full aspect-square grayscale"
          /> */}
          <div className="intro-text text-white mt-8 text-6xl flex-wrap xl:text-8xl font-semibold pl-0 xl:pl-2 ">
            I'm Nikhil A Software Developer
          </div>
          <div className="  text-lg text-white  flex flex-row flex-wrap gap-2 px-2 py-4 pb-4 mt-1 ">
            <div className="font-semibold">REACTJS</div>
            {/* <i className="ri-star-line"></i> */}-
            <div className=" font-semibold">NODEJS</div>
            {/* <i className="ri-star-line"></i> */}-
            <div className=" font-semibold">JAVASCRIPT</div>
            {/* <i className="ri-star-line"></i> */}-
            <div className=" font-semibold">CPP</div>
            {/* <i className="ri-star-line"></i> */}-
            <div className=" font-semibold">REACT NATIVE</div>
            {/* <i className="ri-star-line"></i> */}-
            <div className=" font-semibold">SYSTEM DESIGN</div>
          </div>

          <div className="intro-text-2  text-lg tracking-wide leading-8	  flex-wrap font-normal text-white xl:pl-2 mt-3">
            I have done my{" "}
            <span className="bg-blue-600/30 px-2 py-1 rounded-md ">
              Bachelor of Engineering in Computer Engineering🎓
            </span>
            . A threestar CodeChef programmer, As a full-stack developer, I
            specialize in the
            <span className="bg-green-500/30 px-2 py-1 rounded-md ">
              MERN (MongoDB,ExpressJS,ReactJS,NodeJS) Stack💻
            </span>
            and possess a deep understanding of React architecture, Restful web
            services, and database design. My passion lies in creating
            straightforward and elegant tools, and I continuously challenge
            myself to expand my skill and a
            <span className="bg-amber-500/30 px-2 py-1 rounded-md ">
              coffee addict☕
            </span>
          </div>
          <div className="text-white w-fit mt-5 text-xl ml-2  flex flex-row justify-center items-center gap-2">
            <i class="ri-mail-line"></i>
            nikhilwilayate1998@gmail.com
          </div>
        </div>
      </div>
    </>
  );
};

const CardCont = ({ data }) => {
  const [hover, setHover] = useState(false);

  const yeshover = () => setHover(true);
  const nohover = () => setHover(false);

  return (
    <motion.div
      whileTap={{ scale: 0.9 }}
      className="flex flex-1 flex-col rounded-lg p-0"
    >
      <div
        className={`w-full relative aspect-square overflow-hidden rounded-sm ${getRandomColor()}`}
      >
        {hover && (
          <div className="w-12 h-12 m-4  backdrop-blur-sm rounded-full z-30 absolute right-0 top-0 flex justify-center items-center text-xl">
            <i class="ri-arrow-right-up-line rounded-xl"></i>
          </div>
        )}

        <img src={data.tumbnailLink} className={`w-full h-full`} />
      </div>
      <div className="px-0 py-6 pb-0">
        <div className="flex flex-row gap-1 items-center flex-wrap">
          {data &&
            data.tags.map((e, i) => {
              return (
                <div
                  key={i}
                  className="text-sm  font-medium bg-blue-500/40 px-2 py-1 rounded-full  underline-offset-2"
                >
                  {e}
                </div>
              );
            })}
        </div>
        <div className="text-3xl card-tit  mt-4">{data.name}</div>
        <div className="text-base font-normal mt-2  tracking-wide leading-2">
          {data.description}
        </div>
        <div className="text-sm text-blue-500  font-normal  mt-4   tracking-wide flex  gap-3">
          {data.demoLink && (
            <a
              href={data.demoLink}
              className="flex flex-row justify-center items-center gap-1 w-fit font-medium  hover:underline"
            >
              Watch Demo <i className="ri-arrow-right-up-line"></i>
            </a>
          )}

          {data.codeLink && (
            <a
              href={data.codeLink}
              className="flex flex-row justify-center items-center gap-1 w-fit font-medium hover:underline"
            >
              Visit Code <i className="ri-github-fill"></i>
            </a>
          )}
          {data.tryLink && (
            <a
              href={data.tryLink}
              className="flex flex-row justify-center items-center gap-1 w-fit font-medium hover:underline"
            >
              Try Yourself
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Layout2 = ({}) => {
  return (
    <div className=" flex flex-col mt-32 text-white">
      <div className="pl-0 text-lg text-white font-medium">
        FEATURED PROJECTS ✨
      </div>
      <div className="grid gap-12 xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 mt-6 xl:gap-20">
        {PROJECTS.map((e, i) => {
          return <CardCont data={e} />;
        })}
      </div>
    </div>
  );
};

const Footer = ({}) => {
  return (
    <div className="w-screen px-12 md:px-32 xl:px-36 py-20 flex flex-col md:flex-row xl:flex-row justify-between items-center flex-wrap gap-6">
      <div className="flex flex-col md:flex-row xl:flex-row items-center text-white text-xl font-medium gap-4">
        <div className="flex flex-row justify-center items-center gap-2">
          <i class="ri-phone-line"></i>
          +91-7218601239
        </div>
        <div className="flex flex-row justify-center items-center gap-2">
          <i class="ri-mail-line"></i>
          nikhilwilayate1998@gmail.com
        </div>
      </div>
      <div className="flex flex-row gap-4 text-white text-2xl">
        <a href="https://github.com/Cytescale" className="  hover:text-black">
          <i className="ri-github-fill"></i>
        </a>
        <a
          href="https://twitter.com/NickWhoKnows"
          className="  hover:text-black "
        >
          <i className="ri-twitter-fill"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/nikhilwilayate/"
          className=" hover:text-black"
        >
          <i className="ri-linkedin-fill"></i>
        </a>
      </div>
    </div>
  );
};

function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

const Contact = ({}) => {
  const [email, setemail] = useState("");
  const [mess, setmess] = useState("");
  const [errMess, setErr] = useState("");
  const [succ, setSucc] = useState(false);

  const onSubmit = async () => {
    if (!email || !mess) {
      setErr("Please fill all the fields");
      setSucc(false);
      return false;
    }
    if (!validateEmail(email)) {
      setErr("Invalid Email Address :(");
      setSucc(false);
      return false;
    }

    const { error } = await supabase
      .from("feedbacks")
      .insert({ ip_add: "none", email_add: email, message: mess });

    if (!error) {
      setSucc(true);
      setErr("");
    }
  };

  return (
    <div className="flex flex-col  w-full ">
      <div className="gal-tit text-5xl xl:text-6xl text-center xl:text-left md:text-left ">
        Contact
      </div>
      <div className="flex flex-col gap-8 mt-12 w-full">
        <div className="flex flex-col gap-2">
          <div className="text-white text-lg rounded-md flex gap-2 items-center">
            <i className="ri-mail-line"></i>Email Address
          </div>
          <input
            type={"text"}
            value={email}
            onChange={(e) => {
              setemail(e.currentTarget.value);
            }}
            className="h-11 w-full md:w-96 xl:w-96 pl-4 rounded-md"
            placeholder="Enter your email address"
          />
        </div>
        <div className="flex flex-col gap-2 ">
          <div className="text-white text-lg flex flex-row items-center gap-2 ">
            <i className="ri-chat-3-line"></i>
            Message
          </div>
          <textarea
            type={"text"}
            value={mess}
            onChange={(e) => {
              setmess(e.currentTarget.value);
            }}
            className=" h-60 xl:h-40 md:w-96 w-full xl:w-96 pl-4 pt-4 rounded-md"
            placeholder="Tell me your message"
          />
        </div>
        {errMess && (
          <div className="bg-red-300 w-full md:w-96 xl:w-96 px-3 py-2 flex justify-center items-center gap-2 text-base font-medium text-black rounded-md">
            <i className="ri-error-warning-line"></i>
            {errMess}
          </div>
        )}
        {succ && (
          <div className="bg-green-300 w-full md:w-96 xl:w-96 px-3 py-2 flex justify-center items-center gap-2 text-base font-medium text-black rounded-md">
            Message is sent 😀
          </div>
        )}
        <button
          onClick={onSubmit}
          className="w-full xl:w-96 md:w-96 h-14 flex justify-center items-center gap-2 bg-black text-white rounded-md"
        >
          Send <i className="ri-send-plane-2-line"></i>
        </button>
      </div>
    </div>
  );
};

function App() {
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);

  const [sec, setSec] = useState("HERO_SECTION");

  const projectsRef = useRef(null);
  const projectsRefInView = useInView(projectsRef, {
    margin: "0px 100px -50px 0px",
  });

  const helloRef = useRef(null);
  const helloRefInView = useInView(helloRef);

  const galleryRef = useRef(null);
  const galleryRefInView = useInView(galleryRef);

  const [scrollRef, animate] = useAnimate();
  const { scrollY, scrollYProgress } = useScroll({
    container: scrollRef,
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [mode, setmode] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > window.innerHeight / 2) {
      if (!mode) {
        animate(
          scrollRef.current,
          { backgroundColor: "#000" },
          { ease: "linear", duration: 0.2 }
        );
        setmode(true);
      }
    } else {
      if (mode) {
        animate(
          scrollRef.current,
          { backgroundColor: "#fdfdf5" },
          { ease: "linear", duration: 0.2 }
        );
        setmode(false);
      }
    }
  });

  useEffect(() => {
    if (projectsRefInView && sec != "PROJECT_SECTION") {
      setSec("PROJECT_SECTION");
      if (mode) {
        animate(
          scrollRef.current,
          { backgroundColor: "#000" },
          { ease: "linear", duration: 0.2 }
        );
      }
      animate(
        projectsRef.current,
        { opacity: 1 },
        { ease: "linear", duration: 0.2 }
      );
    }
    if (helloRefInView && sec != "HERO_SECTION") {
      setSec("HERO_SECTION");
      animate(
        projectsRef.current,
        { opacity: 0 },
        { ease: "linear", duration: 0.2 }
      );
    }
    if (galleryRefInView && sec != "GALLERY_SECTION") {
      setSec("GALLERY_SECTION");
      animate(
        scrollRef.current,
        { backgroundColor: "#2917FF" },
        { ease: "linear", duration: 0.2 }
      );
    }
    // /    console.log(sec);
  }, [helloRefInView, projectsRefInView, galleryRefInView]);

  return (
    <div className="App" ref={scrollRef}>
      <DotRing />
      <motion.div className="scroll-prog" style={{ scaleX }} />
      <Header mode={mode} />
      <div
        ref={helloRef}
        className="w-screen h-screen relative flex justify-center items-center hello-cont-outer"
      >
        <div className="hello-cont text-9xl xl:text-10xl">hello,</div>
        <div className="scroll-indi absolute bottom-0 mb-8 text-lg">
          Scroll Down
        </div>
      </div>
      <motion.div>
        <div ref={projectsRef} className="">
          <div
            id="whoami"
            className=" w-screen flex justify-center items-center px-8 xl:px-32 md:px-32 sm:px-20 py-40 pb-0"
          >
            <Hero sec={sec} />
          </div>
          <div
            id="projects"
            className=" w-screen px-8 xl:px-36 md:px-32 sm:px-20   mb-40"
          >
            <Layout2 />
          </div>
        </div>
        <div
          id="contact"
          ref={galleryRef}
          className="w-screen   flex items-start px-8 xl:px-36 md:px-32 sm:px-20 "
        >
          <Contact />
        </div>
        <div id="footer">
          <Footer />
        </div>
      </motion.div>
    </div>
  );
}

export default App;
