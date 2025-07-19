"use client"

import {
  ArrowRight,
  Code2,
  Palette,
  Layers,
  Globe,
  Coffee,
  Terminal,
  Cpu,
  FileCode,
  Paintbrush,
  Figma,
  ImageIcon,
  Award,
  Users,
  Target,
  Zap,
} from "lucide-react"
import { useState } from "react"

const webDevSkills = [
  {
    name: "HTML5",
    icon: <FileCode className="w-12 h-12" />,
    color: "from-orange-500 to-red-500",
    description: "Semantic markup and modern web standards",
  },
  {
    name: "CSS3",
    icon: <Paintbrush className="w-12 h-12" />,
    color: "from-blue-500 to-cyan-500",
    description: "Advanced styling, animations, and responsive design",
  },
  {
    name: "JavaScript",
    icon: <Zap className="w-12 h-12" />,
    color: "from-yellow-400 to-orange-500",
    description: "Modern ES6+ and interactive web applications",
  },
  {
    name: "React",
    icon: <Code2 className="w-12 h-12" />,
    color: "from-cyan-400 to-blue-500",
    description: "Component-based UI development",
  },
  {
    name: "TailwindCSS",
    icon: <Layers className="w-12 h-12" />,
    color: "from-teal-400 to-cyan-500",
    description: "Utility-first CSS framework",
  },
]

const designSkills = [
  {
    name: "Figma",
    icon: <Figma className="w-12 h-12" />,
    color: "from-purple-500 to-pink-500",
    description: "UI/UX design and prototyping",
  },
  {
    name: "Adobe Photoshop",
    icon: <ImageIcon className="w-12 h-12" />,
    color: "from-blue-600 to-purple-600",
    description: "Digital design and image editing",
  },
]

const programmingSkills = [
  {
    name: "Java",
    icon: <Coffee className="w-12 h-12" />,
    color: "from-orange-600 to-red-600",
    description: "Object-oriented programming",
  },
  {
    name: "Python",
    icon: <Terminal className="w-12 h-12" />,
    color: "from-green-500 to-blue-500",
    description: "Backend development and automation",
  },
  {
    name: "C",
    icon: <Cpu className="w-12 h-12" />,
    color: "from-gray-500 to-slate-600",
    description: "System programming",
  },
]

const services = [
  {
    title: "Web Development",
    description: "Full-stack web applications with modern technologies and best practices",
    icon: <Globe className="w-8 h-8" />,
    gradient: "from-blue-600 to-purple-600",
    features: [
      "Responsive Web Design",
      "Single Page Applications",
      "E-commerce Solutions",
      "Performance Optimization",
      "Cross-browser Compatibility",
      "API Integration",
    ],
    technologies: ["React", "JavaScript", "HTML5", "CSS3", "TailwindCSS"],
  },
  {
    title: "UI/UX Design",
    description: "User-centered design solutions that combine beauty with functionality",
    icon: <Palette className="w-8 h-8" />,
    gradient: "from-purple-600 to-pink-600",
    features: [
      "User Research & Analysis",
      "Wireframing & Prototyping",
      "Visual Design Systems",
      "Mobile App Design",
      "Brand Identity Design",
      "Usability Testing",
    ],
    technologies: ["Figma", "Adobe Photoshop", "Design Systems"],
  },
]

export default function SkillsSection() {
  const [hoveredSkill, setHoveredSkill] = useState(null)
  const [activeService, setActiveService] = useState(0)

  return (
    <section id="skills">
    <div className="bg-white relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid-gray-900/[0.04] bg-[size:40px_40px]" />

      {/* Content */}
      <div className="relative z-10 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Skills & Technologies
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Mastering the latest tools and frameworks to build exceptional digital experiences
            </p>
          </div>

          {/* Web Development Skills */}
          <div className="mb-16">
            <h3 className="text-xl font-semibold text-blue-600 mb-8 text-center">Web Development</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {webDevSkills.map((skill, index) => (
                <div
                  key={index}
                  className="group relative"
                  onMouseEnter={() => setHoveredSkill(`web-${index}`)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <div className="bg-white border border-slate-200 rounded-2xl p-8 text-center transition-all duration-300 hover:bg-slate-50 hover:border-slate-300 hover:scale-105">
                    <div
                      className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${skill.color} rounded-2xl mb-6 text-white shadow-lg`}
                    >
                      {skill.icon}
                    </div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-2">{skill.name}</h4>
                    <p className="text-sm text-slate-600">{skill.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Design Skills */}
          <div className="mb-16">
            <h3 className="text-xl font-semibold text-purple-600 mb-8 text-center">Design & Creative</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              {designSkills.map((skill, index) => (
                <div
                  key={index}
                  className="group relative"
                  onMouseEnter={() => setHoveredSkill(`design-${index}`)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <div className="bg-white border border-slate-200 rounded-2xl p-8 text-center transition-all duration-300 hover:bg-slate-50 hover:border-slate-300 hover:scale-105">
                    <div
                      className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${skill.color} rounded-2xl mb-6 text-white shadow-lg`}
                    >
                      {skill.icon}
                    </div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-2">{skill.name}</h4>
                    <p className="text-sm text-slate-600">{skill.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Programming Languages */}
          <div className="mb-24">
            <h3 className="text-xl font-semibold text-green-600 mb-8 text-center">Programming Languages</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {programmingSkills.map((skill, index) => (
                <div
                  key={index}
                  className="group relative"
                  onMouseEnter={() => setHoveredSkill(`prog-${index}`)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <div className="bg-white border border-slate-200 rounded-2xl p-8 text-center transition-all duration-300 hover:bg-slate-50 hover:border-slate-300 hover:scale-105">
                    <div
                      className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${skill.color} rounded-2xl mb-6 text-white shadow-lg`}
                    >
                      {skill.icon}
                    </div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-2">{skill.name}</h4>
                    <p className="text-sm text-slate-600">{skill.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Services Section
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-slate-900 text-center mb-4">Services</h2>
            <p className="text-slate-600 text-center mb-16 max-w-2xl mx-auto">
              Comprehensive solutions tailored to bring your digital vision to life
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="group relative" onMouseEnter={() => setActiveService(index)}>
                  {/* Glow Effect */}
                  {/* <div
                    className={`absolute -inset-0.5 bg-gradient-to-r ${service.gradient} rounded-3xl blur opacity-0 group-hover:opacity-20 transition duration-500`}
                  ></div>

                  <div className="relative bg-white border border-slate-200 rounded-3xl p-10 h-full transition-all duration-500 group-hover:bg-slate-50 group-hover:border-slate-300">
                    <div className="flex items-center gap-6 mb-8">
                      <div
                        className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center text-white shadow-xl`}
                      >
                        {service.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900">{service.title}</h3>
                    </div>

                    <p className="text-slate-600 text-lg leading-relaxed mb-8">{service.description}</p>

                    <div className="mb-8">
                      <h4 className="text-slate-900 font-semibold mb-4">What I Offer:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-3">
                            <div className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full`}></div>
                            <span className="text-slate-600 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-8">
                      <h4 className="text-slate-900 font-semibold mb-4">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-slate-100 text-slate-700 text-xs rounded-full border border-slate-600/50"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div> */} 

        </div>
      </div>
    </div>
    </section>
  )
}
