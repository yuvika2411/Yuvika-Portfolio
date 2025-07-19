"use client"

import { useState, useEffect } from "react"
import {
  ExternalLink,
  Github,
  Figma,
  Calendar,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

import freelanceImg from "../assets/freelance.png"
import solotravelImg from "../assets/solotravel.png"
import portfolioImg from "../assets/portfolio.png"
import myntraImg from "../assets/myntra.png"
import travelsphereImg from "../assets/travelsphere.png"

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(1)

  const projects = [
    {
      title: "Freelance Product Website UI",
      description:
        "Designed a B2B website for a food export brand with 7+ high-fidelity responsive screens. Focused on clean layout, product highlights, and export-driven user flow. Included sections for certifications, client trust, and contact CTA to boost conversions.",
      technologies: ["Figma", "UI/UX"],
      date: "July 2025",
      figmaLink:
        "https://www.figma.com/design/iXrVVTkNeOgOI8RTaYcY2D/All-Work?node-id=114-637",
      color: "pink",
      image: freelanceImg,
    },
    {
      title: "Solo Travel AI App",
      description:
        "Designed a solo travel app focused on personalized guidance, safety, and community support. Built 20+ high-fidelity Figma screens for features like AI chat guide, itinerary planner, cab booking, SOS alerts, and trip blogs.",
      technologies: ["Figma", "UI/UX"],
      date: "July 2025",
      figmaLink:
        "https://www.figma.com/design/iXrVVTkNeOgOI8RTaYcY2D/My-projectssss?node-id=3-3",
      color: "pink",
      image: solotravelImg,
    },
    {
      title: "Portfolio UI/UX",
      description:
        "Designed a working prototype of my personal portfolio on Figma, exploring modern UI/UX principles and layout structures. The process helped enhance my understanding of user-centric design and visual hierarchy.",
      technologies: ["Figma", "UI/UX"],
      date: "June 2025",
      figmaLink:
        "https://www.figma.com/design/xmh3QJxnSuNi1AYH4620Tp/My-Work?node-id=58-148",
      color: "green",
      image: portfolioImg,
    },
    {
      title: "Myntra Clone",
      description:
        "Developed a static clone of the Myntra website using HTML and CSS, replicating the design and layout of key pages such as the homepage, product listings, and navigation bar. Added basic interactivity using JavaScript.",
      technologies: ["HTML", "CSS", "JavaScript"],
      date: "Jan 2025",
      liveLink: "https://onlineshopping-replica.netlify.app/",
      githubLink: "https://github.com/yuvika2411/Myntra-Clone",
      color: "purple",
      image: myntraImg,
    },
    {
      title: "Travel Agency Website",
      description:
        "Created a static travel agency website using HTML and CSS, featuring sections like destinations, packages, and contact information. Emphasized aesthetic layout and visual clarity to provide a professional look and feel.",
      technologies: ["HTML", "CSS"],
      date: "Nov 2024",
      liveLink: "https://travel-with-me-sphere.netlify.app/",
      githubLink: "https://github.com/yuvika2411/TravelSphere",
      color: "blue",
      image: travelsphereImg,
    },
  ]

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerView(3)
      } else if (window.innerWidth >= 768) {
        setItemsPerView(2)
      } else {
        setItemsPerView(1)
      }
    }

    updateItemsPerView()
    window.addEventListener("resize", updateItemsPerView)
    return () => window.removeEventListener("resize", updateItemsPerView)
  }, [])

  const maxIndex = Math.max(0, projects.length - itemsPerView)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))
  }

  const goToSlide = (index) => {
    setCurrentIndex(Math.min(index, maxIndex))
  }

  const getColorClasses = (color) => {
    const colors = {
      blue: "bg-blue-500/10 border-blue-500/20",
      purple: "bg-purple-500/10 border-purple-500/20",
      green: "bg-green-500/10 border-green-500/20",
      orange: "bg-orange-500/10 border-orange-500/20",
      cyan: "bg-cyan-500/10 border-cyan-500/20",
      pink: "bg-pink-500/10 border-pink-500/20",
    }
    return colors[color] || colors.blue
  }

  const getTextColor = (color) => {
    const colors = {
      blue: "text-blue-400",
      purple: "text-purple-400",
      green: "text-green-400",
      orange: "text-orange-400",
      cyan: "text-cyan-400",
      pink: "text-pink-400",
    }
    return colors[color] || colors.blue
  }

  return (
    <section id="projects" className="py-20 bg-slate-900 relative">
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Projects
          </h2>
          <p className="text-xl text-gray-300">
            Some of my recent work and personal projects
          </p>
        </div>

        <div className="relative">
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-gray-800/80 hover:bg-gray-700/80 border border-gray-600 rounded-full p-3 transition-colors duration-200 backdrop-blur-sm"
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-gray-800/80 hover:bg-gray-700/80 border border-gray-600 rounded-full p-3 transition-colors duration-200 backdrop-blur-sm"
            disabled={currentIndex >= maxIndex}
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>

          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 px-4"
                  style={{ width: `${100 / itemsPerView}%` }}
                >
                  <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden hover:border-gray-600 transition-colors duration-200 h-full">
                    <div
                      className={`h-[220px] ${getColorClasses(
                        project.color
                      )} border-b border-gray-700 flex items-center justify-center`}
                    >
                      {project.image ? (
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-[95%] h-[90%] object-cover rounded-md"
                        />
                      ) : (
                        <div
                          className={`w-16 h-16 bg-gray-800 border border-gray-600 rounded-lg flex items-center justify-center ${getTextColor(
                            project.color
                          )}`}
                        >
                          <span className="text-2xl font-bold">
                            {project.title.charAt(0)}
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-bold text-white">
                          {project.title}
                        </h3>
                      </div>

                      <div className="flex items-center space-x-2 text-gray-400 mb-4">
                        <Calendar size={16} />
                        <span className="text-sm">{project.date}</span>
                      </div>

                      <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-gray-700/50 border border-gray-600 text-gray-300 text-xs rounded-full font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex space-x-4">
                        {project.liveLink && (
                          <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium"
                          >
                            <ExternalLink size={16} />
                            <span>Live</span>
                          </a>
                        )}
                        {project.githubLink && (
                          <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors text-sm font-medium"
                          >
                            <Github size={16} />
                            <span>GitHub</span>
                          </a>
                        )}
                        {project.figmaLink && (
                          <a
                            href={project.figmaLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors text-sm font-medium"
                          >
                            <Figma size={16} />
                            <span>Figma</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center space-x-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  currentIndex === index
                    ? "bg-blue-400"
                    : "bg-gray-600 hover:bg-gray-500"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
