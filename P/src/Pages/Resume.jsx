import React from "react";
import { jsPDF } from "jspdf";
import { Github, Linkedin } from "lucide-react";

const Resume = () => {
  const generatePDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(20);
    doc.text("St Michael Egenamba", 20, 20);

    doc.setFontSize(12);
    doc.text("Full Stack Developer – Freelance", 20, 30);
    doc.text("2023 – Present", 20, 37);
    doc.text(
      "Built full-stack apps with React, Node.js, Express, Prisma, SQLite, and Tailwind.",
      20,
      45,
      { maxWidth: 170 }
    );

    doc.text("Certifications:", 20, 60);
    doc.text("- Meta Front-End Developer (Coursera)", 25, 67);
    doc.text("- Full Stack Web Dev (freeCodeCamp)", 25, 74);

    doc.text("Education & Training:", 20, 90);
    doc.text("- Self-Taught Developer (2022 – Present)", 25, 97);
    doc.text("- High School Diploma – IB Program (2025)", 25, 104);

    doc.text("Skills:", 20, 120);
    doc.text(
      "JavaScript, React, Node.js, Express, Tailwind, Prisma, SQLite, JWT, GitHub",
      25,
      127,
      { maxWidth: 170 }
    );

    doc.save("StMichael_Resume.pdf");
  };

  return (
    <section className="min-h-screen bg-black text-white px-6 py-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          My <span className="text-cyan-400">Resume</span>
        </h2>

        {/* Socials */}
        <div className="flex justify-center gap-6 mb-8">
          <a
            href="https://github.com/StMichael9"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-cyan-400 hover:underline"
          >
            <Github size={18} /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/st-michael-egenamba-312299301/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-cyan-400 hover:underline"
          >
            <Linkedin size={18} /> LinkedIn
          </a>
        </div>

        {/* Download button */}
        <div className="text-center mb-12">
          <button
            onClick={generatePDF}
            className="inline-block bg-cyan-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-cyan-600 transition"
          >
            Generate & Download PDF
          </button>
        </div>

        {/* Resume Content (already visible on screen) */}
        <div className="space-y-16 text-gray-100">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-cyan-400">
              Experience
            </h3>
            <ul className="space-y-6">
              <li>
                <p className="text-lg font-semibold">
                  Full Stack Developer – Freelance
                </p>
                <p className="text-sm text-gray-400 mb-2">2023 – Present</p>
                <p>
                  Engineered and deployed interactive full-stack web apps using
                  React, Node.js, Express, and Prisma. Built dashboards,
                  financial tools, and a 3D chess game with Stockfish AI.
                  Focused on performance, secure auth, and clean architecture.
                </p>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4 text-cyan-400">
              Certifications
            </h3>
            <ul className="space-y-4">
              <li>
                <p className="font-semibold">
                  Meta Front-End Developer Professional Certificate
                </p>
                <p className="text-sm text-gray-400">Coursera – 2025</p>
              </li>
              <li>
                <p className="font-semibold">
                  Full Stack Web Development Certification
                </p>
                <p className="text-sm text-gray-400">freeCodeCamp – 2024</p>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4 text-cyan-400">
              Education & Training
            </h3>
            <ul className="space-y-6">
              <li>
                <p className="font-semibold">Self-Taught Developer</p>
                <p className="text-sm text-gray-400">2022 – Present</p>
                <p>
                  Learned full-stack development via real projects,
                  documentation, and open-source. Specialized in JavaScript,
                  REST APIs, deployment workflows, and scalable UIs.
                </p>
              </li>
              <li>
                <p className="font-semibold">High School Diploma</p>
                <p className="text-sm text-gray-400">
                  IB Program – Class of 2025
                </p>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4 text-cyan-400">
              Skills
            </h3>
            <ul className="flex flex-wrap gap-3">
              {[
                "JavaScript",
                "React.js + Vite",
                "Node.js",
                "Express",
                "Tailwind CSS",
                "Prisma",
                "SQLite",
                "JWT",
                "REST APIs",
                "Framer Motion",
              ].map((skill) => (
                <li
                  key={skill}
                  className="bg-white/10 text-white text-sm px-3 py-1 rounded-full"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
