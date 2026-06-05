
/* Enhanced App.jsx with larger typography, hover effects, glassmorphism, gradients */
import { FaGithub, FaLinkedin, FaCode, FaTrophy, FaMedal, FaRocket, FaBullseye } from "react-icons/fa";
import { motion } from "framer-motion";

function App() {
  const projects = [
    {
      title: "PolicyPulse",
      desc: "Multi-agent civic intelligence platform comparing policy intent with real-world outcomes.",
      tech: "Llama 3.3 • FastAPI • React • Qdrant",
      github: "https://github.com/Kundana17/PolicyPulse-MAS",
      live: "",
    },
    {
      title: "Wordly",
      desc: "Interactive word puzzle game with hints, timers, score tracking and multiple difficulty levels.",
      tech: "HTML • CSS • JavaScript",
      github: "https://github.com/Kundana17/Wordly",
      live: "https://wordly-play.netlify.app/",
    },
  ];

  const achievements = [
    { icon: <FaTrophy />, value: "2078", label: "LeetCode Rating" },
    { icon: <FaRocket />, value: "400+", label: "Problems Solved" },
    { icon: <FaBullseye />, value: "AIR 27094", label: "GATE CS & IT" },
    { icon: <FaMedal />, value: "1st Place", label: "Frontend Hackathon" },
  ];

  return (
    <div className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white min-h-screen overflow-x-hidden">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-10 left-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
      </div>

      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-7xl md:text-8xl font-black tracking-tight"
        >
          Venkata Kundana Batchu
        </motion.h1>

        <h2 className="text-3xl mt-5 text-cyan-400 font-bold">
          AI & ML Undergraduate
        </h2>

        <p className="max-w-4xl mt-8 text-gray-300 text-xl leading-relaxed">
          Passionate about Artificial Intelligence, Full Stack Development,
          scalable backend systems and solving challenging problems through technology.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-10">
          {["LeetCode 2078", "CGPA 9.26", "AIR 27094", "Top 5% NPTEL"].map((x) => (
            <span
              key={x}
              className="px-5 py-3 rounded-full border border-cyan-400 bg-cyan-500/10 text-lg hover:scale-110 hover:bg-cyan-500 hover:text-black transition-all duration-300"
            >
              {x}
            </span>
          ))}
        </div>

        <div className="flex gap-10 mt-12 text-4xl">
          {[
            ["https://github.com/Kundana17", <FaGithub />],
            ["https://linkedin.com/in/kundana-batchu", <FaLinkedin />],
            ["https://leetcode.com/u/Kundana_B/", <FaCode />],
          ].map(([link, icon], i) => (
            <a key={i} href={link} target="_blank" rel="noreferrer"
              className="hover:text-cyan-400 hover:scale-125 transition-all duration-300">
              {icon}
            </a>
          ))}
        </div>
      </section>

      <section className="py-24 px-8">
        <h2 className="text-5xl font-bold text-center mb-8">About Me</h2>
        <div className="max-w-5xl mx-auto bg-slate-900/50 backdrop-blur-md p-10 rounded-3xl border border-slate-700">
          <p className="text-center text-xl text-gray-300 leading-relaxed">
            I am an AI & ML undergraduate at PVPSIT with strong interests in AI,
            Full Stack Development and Competitive Programming. I enjoy building practical,
            impactful applications using React, FastAPI, TensorFlow and modern technologies.
          </p>
        </div>
      </section>

      <section className="py-24 px-8">
        <h2 className="text-5xl font-bold text-center mb-12">Skills</h2>
        <div className="grid md:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {[
            ["Languages", "Java • Python • C • SQL"],
            ["Frontend", "React • JavaScript • HTML • CSS"],
            ["Backend", "FastAPI • Node.js • MongoDB"],
            ["AI & Tools", "TensorFlow • Git • Postman"],
          ].map(([title, items]) => (
            <div key={title}
              className="bg-slate-900/60 backdrop-blur-md p-8 rounded-2xl border border-slate-700 hover:border-cyan-400 hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">{title}</h3>
              <p className="text-lg text-gray-300">{items}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 px-8">
        <h2 className="text-5xl font-bold text-center mb-12">Experience</h2>
        <div className="max-w-6xl mx-auto bg-slate-900/60 backdrop-blur-md p-10 rounded-3xl border border-slate-700 hover:border-cyan-400 transition-all">
          <h3 className="text-3xl font-bold text-cyan-400">Infosys Springboard Virtual Internship</h3>
          <p className="text-lg text-gray-400 mt-2">Artificial Intelligence Domain</p>

          <div className="mt-8 border-l-4 border-cyan-500 pl-8">
            <p className="text-cyan-300 uppercase tracking-widest mb-2">Featured Project</p>
            <h4 className="text-3xl font-bold">PawPredict</h4>
            <p className="mt-4 text-lg text-gray-300">
              AI-powered dog breed recognition system using EfficientNet trained on
              20,000+ images across 120 breeds.
            </p>
            <p className="mt-3 text-cyan-300">TensorFlow • FastAPI • React • MongoDB</p>
          </div>
        </div>
      </section>

      <section className="py-24 px-8">
        <h2 className="text-5xl font-bold text-center mb-4">Projects</h2>
        <p className="text-center text-gray-400 text-lg mb-12">
          Selected projects showcasing AI and Full Stack development.
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project) => (
            <div key={project.title}
              className="bg-slate-900/60 backdrop-blur-md p-8 rounded-3xl border border-slate-700 hover:border-cyan-400 hover:-translate-y-3 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300">
              <h3 className="text-3xl font-bold text-cyan-400">{project.title}</h3>
              <p className="mt-5 text-lg text-gray-300">{project.desc}</p>
              <p className="mt-4 text-cyan-300">{project.tech}</p>

              <div className="flex gap-4 mt-8">
                <a href={project.github} target="_blank" rel="noreferrer"
                  className="px-5 py-3 rounded-xl border border-cyan-400 bg-cyan-500/10 hover:bg-cyan-500 hover:text-black transition-all">
                  GitHub
                </a>
                {project.live && (
                  <a href={project.live} target="_blank" rel="noreferrer"
                    className="px-5 py-3 rounded-xl border border-white/20 hover:bg-white hover:text-black transition-all">
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 px-8">
        <h2 className="text-5xl font-bold text-center mb-12">Achievements</h2>
        <div className="grid md:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {achievements.map((a) => (
            <div key={a.label}
              className="bg-slate-900/60 backdrop-blur-md p-8 rounded-2xl border border-slate-700 hover:border-cyan-400 hover:scale-105 transition-all text-center">
              <div className="text-cyan-400 text-4xl flex justify-center">{a.icon}</div>
              <h3 className="text-3xl font-bold mt-4">{a.value}</h3>
              <p className="text-lg text-gray-300 mt-2">{a.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 text-center">
        <h2 className="text-5xl font-bold mb-8">Contact</h2>
        <p className="text-2xl">kundanabatchu@gmail.com</p>
        <p className="text-lg text-gray-400 mt-3">Vijayawada, Andhra Pradesh, India</p>
      </section>
    </div>
  );
}

export default App;
