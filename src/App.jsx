import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa";
import { motion } from "framer-motion";

function App() {
  const skills = [
    "Java",
    "Python",
    "C",
    "SQL",
    "React",
    "FastAPI",
    "TensorFlow",
    "MongoDB",
    "Git",
    "Node.js",
  ];

  const projects = [
    {
      title: "PawPredict",
      desc: "AI-powered dog breed recognition system using EfficientNet trained on 20,000+ images.",
    },
    {
      title: "PolicyPulse",
      desc: "Multi-agent civic intelligence platform using Llama 3.3, FastAPI, React and Qdrant.",
    },
    {
      title: "Wordly",
      desc: "Interactive word puzzle game featuring hints, timers, score tracking and multiple difficulty levels.",
    },
  ];

  return (
    <div className="bg-slate-950 text-white min-h-screen">

      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">

        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl font-bold"
        >
          Venkata Kundana Batchu
        </motion.h1>

        <h2 className="text-2xl mt-4 text-cyan-400">
          AI & ML Undergraduate
        </h2>

        <p className="max-w-3xl mt-6 text-gray-300">
          AI & ML undergraduate passionate about building intelligent
          applications using React, FastAPI, TensorFlow and modern web
          technologies.
        </p>

        <div className="flex gap-6 mt-8 text-3xl">

          <a href="#">
            <FaGithub />
          </a>

          <a href="#">
            <FaLinkedin />
          </a>

          <a href="#">
            <FaCode />
          </a>

        </div>
      </section>

      <section className="py-20 px-10">
        <h2 className="text-4xl font-bold text-center mb-10">
          About Me
        </h2>

        <div className="max-w-4xl mx-auto text-center text-gray-300">
          Currently pursuing B.Tech CSE (AI & ML) at PVPSIT with a CGPA
          of 9.3. Passionate about Artificial Intelligence, Full Stack
          Development and Problem Solving.
        </div>
      </section>

      <section className="py-20 px-10 bg-slate-900">
        <h2 className="text-4xl font-bold text-center mb-10">
          Skills
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill) => (
            <span
              key={skill}
              className="bg-cyan-500/20 px-5 py-2 rounded-full border border-cyan-500"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="py-20 px-10">
        <h2 className="text-4xl font-bold text-center mb-10">
          Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-slate-900 p-6 rounded-xl border border-slate-700"
            >
              <h3 className="text-2xl font-bold text-cyan-400">
                {project.title}
              </h3>

              <p className="mt-4 text-gray-300">
                {project.desc}
              </p>
            </div>
          ))}

        </div>
      </section>

      <section className="py-20 px-10 bg-slate-900">
        <h2 className="text-4xl font-bold text-center mb-10">
          Achievements
        </h2>

        <div className="max-w-3xl mx-auto">
          <ul className="space-y-4 text-lg">
            <li>LeetCode Rating: 2078</li>
            <li>400+ Problems Solved</li>
            <li>GATE 2025 AIR 27094</li>
            <li>1st Place Frontend Hackathon</li>
            <li>Smart India Hackathon Participant</li>
          </ul>
        </div>
      </section>

      <section className="py-20 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Contact
        </h2>

        <p>
          kundanabatchu@gmail.com
        </p>

        <p>
          Vijayawada, Andhra Pradesh
        </p>
      </section>

    </div>
  );
}

export default App;