"use client";

import { motion } from "framer-motion";

const technologies = [
  { name: "Unity", category: "Game Dev" },
  { name: "Unreal Engine", category: "Game Dev" },
  { name: "C#", category: "Languages" },
  { name: "C++", category: "Languages" },
  { name: "JavaScript", category: "Languages" },
  { name: "TypeScript", category: "Languages" },
  { name: "React", category: "Web" },
  { name: "Next.js", category: "Web" },
  { name: "Node.js", category: "Backend" },
  { name: "Python", category: "Languages" },
  { name: "TensorFlow", category: "AI/ML" },
  { name: "Git", category: "Tools" },
  { name: "Blender", category: "Design" },
  { name: "Photoshop", category: "Design" },
  { name: "Figma", category: "Design" },
];

export function TechStack() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-zinc-800 to-zinc-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-gradient">
          Tech Stack
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 w-full">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="w-full"
            >
              <div className="w-full min-h-[120px] bg-zinc-800/80 backdrop-blur-sm border border-zinc-700 rounded-lg p-6 flex flex-col items-center justify-center text-center transition-all duration-300 group-hover:border-amber-500 group-hover:shadow-[0_0_15px_rgba(255,179,71,0.3)]">
                <div className="text-amber-400 mb-2 text-xl font-bold">
                  {tech.name}
                </div>
                <div className="text-zinc-400 text-sm font-medium">
                  {tech.category}
                </div>

                <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-amber-500 to-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-b-lg" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
