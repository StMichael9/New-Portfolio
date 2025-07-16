import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom"; // ← import Link

const Home = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white px-6">
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-2xl"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I'm <span className="text-cyan-400"> St Michael</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-6">
          I build interactive, high-performance web apps using React, Node.js,
          Express.js and modern tools.
        </p>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 bg-cyan-500 text-white px-6 py-3 rounded-2xl shadow-lg hover:bg-cyan-600 transition-all"
          >
            View Projects <ArrowRight size={18} />
          </Link>
        </motion.div>
      </motion.section>

      <motion.div
        className="absolute top-10 right-10 w-40 h-40 bg-cyan-500 rounded-full opacity-30 blur-2xl animate-pulse"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
    </main>
  );
};

export default Home;
