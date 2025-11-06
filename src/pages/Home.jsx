import { motion } from "framer-motion";
import { Button } from "../components/ui/Button";
import { Github, Linkedin, Mail } from "lucide-react";
import ProfileCard from "../components/ProfileCard/ProfileCard";
import CircularGallery from "../components/CircularGallery";
import DomeGallery from "../components/DomeGallery";
import Prism from "../components/Prism";
import Silk from "../components/Silk";
import CircularText from "../components/CircularText";
import PillNav from "../components/PillNav";
import GooeyNav from "../components/GooeyNav";
import Threads from "../components/Threads";
import { useState, useEffect, useMemo, useCallback, useRef } from "react";

const images = [
  // 🌐 Core Web
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", alt: "HTML5" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg", alt: "HTML5 Wordmark" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", alt: "CSS3" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg", alt: "CSS3 Wordmark" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", alt: "JavaScript" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg", alt: "JavaScript Plain" },

  // 🧩 Template Engine
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ejs/ejs-original.svg", alt: "EJS" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ejs/ejs-plain.svg", alt: "EJS Plain" },

  // ⚛️ React + Node Ecosystem
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", alt: "React" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg", alt: "React Wordmark" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", alt: "Node.js" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg", alt: "Node.js Wordmark" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", alt: "Express" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg", alt: "Express Wordmark" },

  // 🔥 Firebase
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg", alt: "Firebase" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg", alt: "Firebase Wordmark" },

  // 🐘 Database
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", alt: "PostgreSQL" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg", alt: "PostgreSQL Wordmark" },

  // 🎨 Styling
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", alt: "Tailwind CSS" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg", alt: "Tailwind CSS Plain" },

  // ⚙️ Languages
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", alt: "C++" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-plain.svg", alt: "C++ Plain" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", alt: "Python" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg", alt: "Python Wordmark" },

  // 🔧 Tools
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", alt: "Git" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain-wordmark.svg", alt: "Git Wordmark" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", alt: "GitHub" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg", alt: "GitHub Wordmark" },
];

const projects = [
  {
    name: "MindWell",
    image: "mindWell.png",
    link: "https://mindwellforsih.netlify.app/",
    github: "https://github.com/ShubhamY90/MindWell",
    type: "Collaborative Project",
    tech: ["React", "Node.js", "Express", "Firebase", "Tailwind", "Gemini AI"],
    description: `Building an AI-native mental health SaaS platform with multi-user access for personalized emotional support. Integrated Gemini AI chatbot for conversational search, mood tracking, and context-aware content recommendations. Designed a responsive UI using React.js & Tailwind, focusing on UX experimentation, accessibility, and UI polish.`,
  },
  {
    name: "HTMF",
    image: "htmf.png",
    link: "https://htmf.vercel.app/",
    github: "https://github.com/ShubhamY90/HTMF",
    type: "Personal Project",
    tech: ["React", "Node.js", "Express", "Firebase"],
    description: `Created comprehensive Software Design Document following software engineering best practices. Built full-stack application enabling hackathon management, team formation, and skill-based teammate matching. Implemented secure RESTful APIs with Firebase Authentication and optimized database schema design.`,
  },
  {
    name: "Mini Game Arcade",
    image: "miniGameArcade.png",
    link: "https://game-arcade-wine.vercel.app/",
    github: "https://github.com/yourusername/mini-game-arcade",
    type: "Personal Project",
    tech: ["React", "Tailwind", "Framer Motion"],
    description: `Developed a fun, interactive mini-game hub featuring modern animations and dynamic game selection. Focused on accessibility, performance, and responsive design using React and Tailwind CSS. Integrated local data storage for player stats and leaderboard functionality.`,
  },
  {
    name: "Prostate Cancer Detection",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop&auto=format",
    link: "https://prostate-cancer-detection.link",
    github: "https://github.com/yourusername/prostate-cancer-detection",
    type: "Machine Learning Project",
    tech: ["Python", "TensorFlow", "NumPy", "Pandas"],
    description: `Developed a deep learning model for early prostate cancer detection using histopathological image data. Implemented CNN-based feature extraction and binary classification. Preprocessed and augmented dataset to enhance accuracy and generalization.`,
  },
  {
    name: "Food Detection Model",
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&h=600&fit=crop&auto=format",
    link: "https://food-detection.link",
    github: "https://github.com/yourusername/food-detection-yolov8",
    type: "Machine Learning Project",
    tech: ["Python", "YOLOv8", "OpenCV", "PyTorch"],
    description: `Built an Indian Food Detection system using YOLOv8 trained on a custom Indian food dataset. Enabled real-time object detection and calorie estimation. Implemented image preprocessing pipelines and model optimization for edge deployment.`,
  },
];

const sections = ["home", "about", "projects", "skills", "contact"];

// Shuffle images once and memoize
const shuffledImages = [...images].sort(() => Math.random() - 0.5);

export default function HomePage() {
  const [selected, setSelected] = useState(null);
  const [activeSection, setActiveSection] = useState(sections[0]);
  const [projectsInView, setProjectsInView] = useState(false);
  const [skillsInView, setSkillsInView] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [galleryKey, setGalleryKey] = useState(0); // Force re-render
  
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);


  // Preload project images with better error handling
  useEffect(() => {
    let cancelled = false;
  
    const loadAndDecode = (url, name) =>
      new Promise((resolve) => {
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.src = url;
        img.onload = async () => {
          try {
            // wait for browser decode
            await img.decode();
            console.log(`✅ Decoded ${name}`);
          } catch {
            console.warn(`⚠️ Decode skipped for ${name}`);
          }
          resolve();
        };
        img.onerror = () => {
          console.error(`❌ Failed to load ${name}`);
          resolve();
        };
      });
  
    async function preload() {
      console.log("🚀 Starting guaranteed image preload...");
      const start = performance.now();
  
      await Promise.all(projects.map((p) => loadAndDecode(p.image, p.name)));
  
      // Force a full browser paint + GPU sync before render
      await new Promise((r) => requestAnimationFrame(() => setTimeout(r, 100)));
  
      if (!cancelled) {
        console.log(`✨ All project images ready in ${(performance.now() - start).toFixed(0)}ms`);
        setImagesLoaded(true);
        setGalleryKey((k) => k + 1);
      }
    }
  
    preload();
  
    return () => {
      cancelled = true;
    };
  }, []);
  
  
  

  const scrollToSection = useCallback((id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }, []);

  // Track active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { threshold: 0.3, rootMargin: "-100px 0px" }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Lazy load heavy components
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target.id === "projects" && entry.isIntersecting) {
            console.log("🎯 Projects section in view");
            setProjectsInView(true);
          }
          if (entry.target.id === "skills" && entry.isIntersecting) {
            console.log("🎯 Skills section in view");
            setSkillsInView(true);
          }
        });
      },
      { threshold: 0.1, rootMargin: "200px" }
    );

    if (projectsRef.current) observer.observe(projectsRef.current);
    if (skillsRef.current) observer.observe(skillsRef.current);

    return () => observer.disconnect();
  }, []);

  // Memoize project items for CircularGallery
  const projectItems = useMemo(
    () => {
      const items = projects.map((p) => ({ image: p.image, text: p.name }));
      console.log("🔄 Project items memoized:");
      items.forEach((item, i) => {
        console.log(`  ${i + 1}. text: "${item.text}", image: "${item.image}"`);
      });
      return items;
    },
    []
  );

  const handleProjectSelect = useCallback((item) => {
    console.log("🖱️ Project selected:", item);
    const found = projects.find((p) => p.name === item.text);
    console.log("📦 Found project data:", found);
    setSelected(found);
  }, []);

  const closeModal = useCallback(() => setSelected(null), []);

  return (
    <div className="bg-black relative min-h-screen font-sans text-white w-full overflow-x-hidden">
      {/* 🧭 Transparent Floating Header */}
      <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-[9999] bg-black/30 backdrop-blur-md border border-white/10 px-8 py-3 rounded-full shadow-lg flex items-center space-x-10">
        {sections.map((id) => (
          <button
            key={id}
            onClick={() => scrollToSection(id)}
            className={`transition font-medium ${
              activeSection === id
                ? "text-blue-300 scale-105"
                : "text-gray-300 hover:text-blue-200"
            }`}
          >
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </button>
        ))}
      </header>

      {/* 🌟 Hero Section */}
      <section 
        id="home"
        className="relative min-h-screen flex flex-col justify-center items-center text-center space-y-6 px-6 bg-black/40 backdrop-blur-sm overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Silk
            speed={5}
            scale={1}
            color="#64B5F6"
            noiseIntensity={1.5}
            rotation={0}
          />
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-bold text-white drop-shadow-[0_0_10px_#3b82f6]"
        >
          Hi, I'm Shubham Yadav
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed"
        >
          Full-Stack Developer passionate about building immersive, high-performance digital experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <Button className="bg-blue-300 text-black hover:bg-blue-400 font-semibold px-8 py-3 rounded-full mt-6 shadow-[0_0_15px_#3b82f6]">
            View My Work
          </Button>
        </motion.div>
      </section>

      {/* 👤 About Section */}
      <section
        id="about"
        className="py-24 px-6 md:px-20 bg-black/40 backdrop-blur-sm flex justify-center items-center"
      >
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between w-full max-w-6xl gap-12">
          <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center md:justify-start">
            <ProfileCard
              name="Shubham Yadav"
              title="Full-Stack Developer"
              handle="@shubhamyadav"
              status="Online"
              contactText="Contact Me"
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
              grainUrl="./grain-texture.png"
              showBehindGradient={false}
              mobileTiltSensitivity={5}
              onContactClick={() => console.log("Contact clicked")}
            />
          </div>

          <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
            <h2 className="text-3xl font-bold text-white">About Me</h2>
            <p className="text-gray-300 leading-relaxed">
              Hi, I'm <span className="text-white font-semibold">Shubham Yadav</span>,
              a passionate Full-Stack Developer who loves crafting interactive and
              efficient web experiences. My expertise spans both front-end and
              back-end technologies, with a strong focus on building seamless user
              interfaces and scalable systems.
            </p>
            <p className="text-gray-400 leading-relaxed">
              When I'm not coding, you'll probably find me exploring new design
              trends, learning modern frameworks, or working on personal projects that
              push creative and technical boundaries.
            </p>
          </div>
        </div>
      </section>

      {/* 💻 Projects Section */}
      <section
        ref={projectsRef}
        id="projects"
        className="relative py-24 bg-black/40 backdrop-blur-sm flex flex-col items-center justify-center overflow-x-hidden min-h-screen"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-blue-300 mb-12 text-center drop-shadow-[0_0_10px_#3b82f6]">
          Featured Projects
        </h2>

        <div className="relative w-full flex justify-center items-center px-6 md:px-20">
          <div className="relative w-full max-w-[1200px] h-[600px] md:h-[70vh] flex justify-center items-center overflow-hidden">
            {(() => {
              console.log("🎨 Render check - projectsInView:", projectsInView, "imagesLoaded:", imagesLoaded, "galleryKey:", galleryKey);
              
              if (!projectsInView) {
                return <div className="text-gray-400">Scroll to load projects...</div>;
              }
              
              if (!imagesLoaded) {
                return (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 bg-black/40 flex items-center justify-center"
                  >
                    <div className="h-12 w-12 border-b-2 border-blue-300 rounded-full animate-spin" />
                  </motion.div>
                );
              }
              
              return (
                <motion.div
                  key={galleryKey}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  className="w-full h-full flex justify-center items-center"
                >
                  <CircularGallery 
                    items={projects} // Pass your projects array here
                    bend={3}
                    textColor="#ffffff"
                    borderRadius={0.05}
                    font="bold 30px Figtree"
                  />
                </motion.div>
              );
              
              
              console.log("✅ Rendering CircularGallery with items:", projectItems);
              console.log("📊 CircularGallery props:", {
                itemsCount: projectItems.length,
                bend: 3,
                textColor: "#93c5fd",
                borderRadius: 0.05,
                scrollEase: 0.02,
                key: galleryKey
              });
              
              try {
                return (
                  <CircularGallery
                    key={galleryKey} // Force remount when images are ready
                    items={projectItems}
                    bend={3}
                    textColor="#93c5fd"
                    borderRadius={0.05}
                    scrollEase={0.02}
                    onSelect={handleProjectSelect}
                  />
                );
              } catch (error) {
                console.error("❌ CircularGallery error:", error);
                console.error("Error stack:", error.stack);
                return (
                  <div className="text-red-400 text-center">
                    <p>Error loading gallery</p>
                    <p className="text-sm mt-2">Check console for details</p>
                  </div>
                );
              }
            })()}
          </div>
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-300 mb-6 text-base md:text-lg">
            Scroll or drag to explore my projects — each one represents a story of
            learning and creativity.
          </p>
          <Button className="bg-blue-300 text-black hover:bg-blue-400 px-8 py-3 rounded-full shadow-[0_0_15px_#3b82f6]">
            View All Projects
          </Button>
        </div>

        {/* 🪟 Modal */}
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-center z-50 transition-all duration-300 p-4"
            onClick={closeModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="bg-black/60 border border-blue-300/30 rounded-2xl shadow-lg p-8 max-w-5xl w-[90%] flex flex-col md:flex-row gap-8 relative"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <motion.img
                src={selected.image}
                alt={selected.name}
                className="w-full md:w-1/2 rounded-lg object-cover"
                loading="lazy"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              />
              <motion.div 
                className="flex-1 text-gray-200 space-y-4"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h3 className="text-2xl font-semibold text-blue-300">
                  {selected.name}
                </h3>
                <p className="text-gray-300">{selected.description}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {selected.tech.map((t, i) => (
                    <motion.span
                      key={t}
                      className="px-3 py-1 bg-blue-300/20 border border-blue-300/40 text-blue-200 rounded-full text-sm"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.4 + i * 0.05 }}
                    >
                      {t}
                    </motion.span>
                  ))}
                </div>
                <motion.a
                  href={selected.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-6 text-blue-300 underline hover:text-blue-400"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  Visit Project →
                </motion.a>
              </motion.div>
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-blue-300 text-2xl"
                onClick={closeModal}
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </section>

      {/* ⚙️ Skills Section */}
      <section
        ref={skillsRef}
        id="skills"
        className="relative py-24 bg-black/40 backdrop-blur-sm flex flex-col items-center justify-center overflow-hidden min-h-screen"
      >
        <div className="absolute top-0 left-0 w-full flex justify-center items-center pointer-events-none">
          <div className="absolute inset-0 w-full flex justify-center items-center -z-10 pointer-events-none">
            <div className="w-full h-[200px] sm:h-[250px] md:h-[300px]">
              <Threads
                color={[1, 1, 1]}
                amplitude={1.0}
                distance={0}
                enableMouseInteraction={false}
              />
            </div>
          </div>

          <h2 className="relative text-3xl md:text-4xl font-bold text-blue-300 text-center drop-shadow-[0_0_10px_#3b82f6] mb-12">
            Skills & Tools
          </h2>
        </div>

        <div className="relative w-full h-[70vh] sm:h-[80vh] md:h-[100vh] flex justify-center items-center px-4 md:px-10 z-0">
          {skillsInView ? (
            <DomeGallery
              images={shuffledImages}
              fit={0.5}
              padFactor={0.2}
              grayscale={false}
              imageBorderRadius="30px"
              overlayBlurColor="#000000"
            />
          ) : (
            <div className="text-gray-400">Loading skills...</div>
          )}
        </div>
      </section>

      {/* 📬 Contact Section */}
      <section 
        id="contact"
        className="py-24 px-6 md:px-20 text-center bg-black/40 backdrop-blur-sm"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-blue-300 mb-8 drop-shadow-[0_0_10px_#3b82f6]">
          Get in Touch
        </h2>
        <p className="text-gray-300 mb-10 max-w-xl mx-auto text-lg">
          Let's collaborate or just have a friendly chat! I'm always open to new opportunities and ideas.
        </p>
        <div className="flex justify-center space-x-10 text-blue-300">
          <a 
            href="mailto:anshu.yadav5709@gmail.com" 
            className="hover:text-white transition hover:scale-110"
          >
            <Mail size={30} />
          </a>
          <a 
            href="https://github.com/ShubhamY90" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-white transition hover:scale-110"
          >
            <Github size={30} />
          </a>
          <a 
            href="https://www.linkedin.com/in/shubham-yadav-734008284/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-white transition hover:scale-110"
          >
            <Linkedin size={30} />
          </a>
        </div>
      </section>

      {/* 🦋 Footer */}
      <footer className="py-6 text-center border-t border-blue-300/20 text-gray-300 text-sm md:text-base bg-black/30 backdrop-blur-sm">
        © {new Date().getFullYear()} Shubham Yadav — Built with 💙 using React & Tailwind.
      </footer>
      
      {/* 🌀 Floating Circular Text */}
      <div className="fixed bottom-6 right-6 z-[9999] w-[90px] h-[90px] opacity-80 hover:opacity-100 transition-all duration-300">
        <CircularText
          text="SHUBHAM YADAV "
          spinDuration={20}
          className="w-full h-full text-[2px]"
          onHover="goBonkers"
        />
      </div>

      <style>
        {`
          html, body {
            overflow-x: hidden;
          }
          canvas {
            display: block;
            width: 100% !important;
            height: 100% !important;
            object-fit: cover;
            margin: 0 auto;
          }

          @media (max-width: 1024px) {
            h1 { font-size: 3rem; }
            h2 { font-size: 2rem; }
          }

          @media (max-width: 768px) {
            section { padding: 4rem 1rem; }
            h1, h2 { font-size: 1.8rem !important; }
            p { font-size: 1rem !important; }
            button { padding: 0.6rem 1.4rem !important; font-size: 0.9rem !important; }
          }

          @media (max-width: 480px) {
            h1, h2 { font-size: 1.5rem !important; }
            section { padding: 3rem 0.5rem; }
            .text-lg { font-size: 0.9rem !important; }
            .text-xl { font-size: 1rem !important; }
            #projects .h-[600px] { height: 400px !important; }
            #skills div[style] { height: 70vh !important; }
          }
        `}
      </style>
    </div>
  );
}