"use client"

import { motion } from "framer-motion"
import { GraduationCap, Award, Calendar, BookOpen, Gamepad2 } from "lucide-react"

export function EducationTimeline() {
  const educationItems = [
    {
      id: 1,
      title: "Bachelor's Degree in Computer Science",
      institution: "Neumont College of Computer Science",
      date: "2021 - 2025",
      description:
        "Specialized in Game Development and Software Engineering with a focus on practical, project-based learning.",
      icon: <GraduationCap className="h-6 w-6" />,
    },
    {
      id: 2,
      title: "Game Development Specialization",
      institution: "Neumont College of Computer Science",
      date: "2021 - 2025",
      description: "Advanced coursework in Unity, Unreal Engine, game design principles, and interactive storytelling.",
      icon: <Gamepad2 className="h-6 w-6" />,
    },
    {
      id: 3,
      title: "Software Engineering",
      institution: "Neumont College of Computer Science",
      date: "2021 - 2025",
      description:
        "Certification in modern software engineering practices, agile methodologies, and full-stack development.",
      icon: <Award className="h-6 w-6" />,
    },
  ]

  return (
    <section className="section bg-color-bg-secondary">
      <div className="container">
        <h2 className="section-title centered font-display">Education & Certifications</h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-amber-500 to-orange-600 rounded-full"></div>

          {/* Timeline items */}
          <div className="space-y-12">
            {educationItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 flex items-center justify-center z-10">
                  {item.icon}
                </div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <div className="bg-zinc-800/80 backdrop-blur-sm border border-zinc-700 rounded-lg p-6 shadow-xl">
                    <h3 className="text-xl font-bold text-white mb-2 font-display">{item.title}</h3>
                    <div className="flex items-center text-amber-400 mb-4">
                      <BookOpen className="h-4 w-4 mr-2" />
                      <span>{item.institution}</span>
                    </div>
                    <div className="flex items-center text-zinc-400 mb-4 text-sm">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{item.date}</span>
                    </div>
                    <p className="text-zinc-300">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
