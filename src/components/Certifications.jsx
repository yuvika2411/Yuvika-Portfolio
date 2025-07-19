"use client"

import { useState, useEffect } from "react"


import ideatexImg from "../assets/ideatex.jpg"
import sihImg from "../assets/sih.png"
import pearsImg from "../assets/pears.jpg"
import hackccinoImg from "../assets/hackaccino.png"
import endeavourImg from "../assets/endeavour.jpg"
import tutedudeImg from "../assets/tutedude.png"

export default function BlogsSection() {
  const [visibleItems, setVisibleItems] = useState(new Set())

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => new Set([...prev, entry.target.dataset.index]))
          }
        })
      },
      { threshold: 0.2 },
    )
    const items = document.querySelectorAll("[data-index]")
    items.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  const blogEntries = [
     {
      id: 1,
      date: "27th - 29th June 2025",
      title: "Tutedude Designathon 1.0",
      role: "Team Lead / Core Member (UI/UX + Research)",
      organization: "",
      description:
        "Our team Scribble Squad made it to the Top 6 out of 150+ teams at Tutedude’s Designathon 1.0! As the team lead, I guided the project flow, contributed to user research, and designed UI/UX for our app prototype. Late-night sprints, power cuts, and teamwork made it an unforgettable experience — seeing our team on the finalist screen was a proud and magical moment.",
      image: tutedudeImg,
      color: "bg-blue-500",
      glowColor: "shadow-blue-500/30",
      hoverGlow: "hover:shadow-blue-500/50",
    },
    {
      id: 2,
      date: "2nd - 3rd May 2025",
      title: "ENDEAVOUR'25",
      role: "Event Coordinator / Core Team Member (Design+ Coordination)",
      organization: "ECell- KIET",
      description:
        "A high-energy, two-day entrepreneurial summit featuring workshops, startup expos, and inspiring speaker sessions. As part of the visual design team, I created standees, social media creatives, and posters that captured the essence of the summit. Watching my designs come to life at the venue was a proud and motivating moment.",
      image: endeavourImg,
      color: "bg-pink-500",
      glowColor: "shadow-pink-500/30",
      hoverGlow: "hover:shadow-pink-500/50",
    },
    {
      id: 3,
      date: "5th- 8th April 2025",
      title: "Hackaccino 3.0",
      role: "Hackathon Finalist- Bennett University (CSI - Computer Society of India)",
      organization: "",
      description:
        "Participated as a finalist in Hackaccino 3.0, a 24-hour national-level hackathon hosted by Bennett University and CSI. Among 1000+ participants from over 90 institutes, our team HACK-17 developed a working prototype under tight deadlines through intense overnight collaboration, real-time debugging, and rapid ideation. The experience sharpened my problem-solving, teamwork, and creative thinking skills under pressure.",
      image: hackccinoImg,
      color: "bg-purple-500",
      glowColor: "shadow-purple-500/30",
      hoverGlow: "hover:shadow-purple-500/50",
    },
    {
      id: 4,
      date: "March 2025",
      title: "Pears Hackathon",
      role: "Participant - Geek Room x Pears Technology",
      organization: "",
      description:
        "Participated in Pears Hackathon 2025, a global tech event focused on innovative healthcare solutions. Our team developed a platform to improve healthcare accessibility with features like AI-driven health insights, instant doctor-patient chat, and secure records access. We implemented real-time communication using Pear by Holepunch — a decentralized peer-to-peer protocol — enhancing privacy and reducing latency. Though not finalists, our work was recognized with a ₹1000 reward, and the learning experience was immensely valuable.",
      image: pearsImg,
      color: "bg-green-500",
      glowColor: "shadow-green-500/30",
      hoverGlow: "hover:shadow-green-500/50",
    },
    {
      id: 5,
      date: "11th- 15th December 2024",
      title: "Smart India Hackathon (Hardware Edition)",
      role: "Event Coordinator",
      organization: "ECell- KIET",
      description:
        "Being part of the core organizing team for one of the country's biggest innovation challenges was an intense and fulfilling experience. I helped coordinate two finalist teams — • Team VIGYANAM (₹50,000 winners, led by Min Nepali) • Team THE REBELS (led by Samar Dhanraj Patil) From managing day-night shifts, troubleshooting real-time issues, and ensuring smooth logistics to supporting mentors like Dr. Pradnyumna Waifalkar and volunteers like Arian Yadav — this journey was a crash course in coordination, crisis management, and team dynamics.",
      image: sihImg,
      color: "bg-orange-500",
      glowColor: "shadow-orange-500/30",
      hoverGlow: "hover:shadow-orange-500/50",
    },
    
    {
      id: 6,
      date: "24 November 2024",
      title: "IdeateX 2.0",
      role: "Event Coordinator / Core Team Member (Design+ Coordination)",
      organization: "ECell- KIET",
      description:
        "An inter-college business idea competition that brought together young visionaries to pitch their startups to professionals and investors. My role involved managing event logistics and contributing to the creative design work — from social media campaigns to banner designs — helping present each idea with clarity and impact. This event taught me how to blend creativity with professionalism while working with tight deadlines.",
      image: ideatexImg,
      color: "bg-blue-500",
      glowColor: "shadow-blue-500/30",
      hoverGlow: "hover:shadow-blue-500/50",
    },
    
    
    
  ]

  return (
    <section id="certifications">
    <div className="bg-white min-h-screen py-16 px-4 relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid-gray-900/[0.04] bg-[size:40px_40px]" />
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/30 pointer-events-none"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-100/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Certifications
            </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          {/* Enhanced timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full opacity-30"></div>

          {blogEntries.map((entry, index) => (
            <div
              key={entry.id}
              data-index={index}
              className={`relative flex items-start mb-20 last:mb-0 transition-all duration-1000 ${
                visibleItems.has(index.toString()) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Enhanced timeline dot */}
              <div className="relative z-20 flex-shrink-0">
                <div
                  className={`${entry.color} w-12 h-12 rounded-full flex items-center justify-center shadow-lg ${entry.glowColor} animate-pulse`}
                >
                  <div className="w-6 h-6 bg-white rounded-full shadow-inner"></div>
                </div>
                {/* Ripple effect */}
                <div className={`absolute inset-0 ${entry.color} rounded-full animate-ping opacity-20`}></div>
              </div>

              {/* Enhanced content */}
              <div className="ml-8 flex-1">
                <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                  {/* Text content with better styling */}
                  <div className="flex-1 space-y-4">
                    <div className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full font-medium">
                      {entry.date}
                    </div>

                    <h2 className="text-3xl font-bold text-gray-900 leading-tight hover:text-blue-600 transition-colors duration-300">
                      {entry.title}
                    </h2>

                    {entry.role && (
                      <div className="text-base font-semibold text-gray-700 bg-gray-50 px-4 py-2 rounded-lg">
                        {entry.role}
                      </div>
                    )}

                    {entry.organization && (
                      <div className="text-sm text-blue-600 font-medium">{entry.organization}</div>
                    )}

                    <p className="text-gray-700 leading-relaxed text-lg">{entry.description}</p>
                  </div>

                  {/* Enhanced certificate image with animations and glow */}
                  <div className="lg:w-80 flex-shrink-0">
                    <div className="relative group">
                      {/* Glow background */}
                      <div
                        className={`absolute -inset-4 bg-gradient-to-r ${entry.color.replace("bg-", "from-")} to-transparent rounded-lg blur-xl opacity-30 group-hover:opacity-60 transition-all duration-500`}
                      ></div>

                      {/* Certificate container */}
                      <div
                        className={`relative bg-white rounded-lg p-3 shadow-2xl ${entry.glowColor} ${entry.hoverGlow} hover:shadow-2xl transform hover:scale-105 hover:-rotate-1 transition-all duration-500 group-hover:shadow-3xl border border-gray-100/50`}
                      >
                        <img
                          src={entry.image || "/placeholder.svg"}
                          alt={`${entry.title} certificate`}
                          className="w-full h-auto rounded-md object-contain transition-transform duration-500 group-hover:scale-105"
                          onError={(e) => {
                            e.target.src =
                              "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='320' height='240' viewBox='0 0 320 240'%3E%3Crect width='320' height='240' fill='%23f3f4f6'/%3E%3Ctext x='160' y='120' textAnchor='middle' dy='.3em' fill='%236b7280'%3ECertificate%3C/text%3E%3C/svg%3E"
                          }}
                        />

                        {/* Shine effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000 rounded-lg"></div>
                      </div>

                      {/* Floating particles effect */}
                      <div
                        className="absolute top-2 right-2 w-2 h-2 bg-yellow-400 rounded-full animate-bounce opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ animationDelay: "0s" }}
                      ></div>
                      <div
                        className="absolute top-8 right-8 w-1 h-1 bg-blue-400 rounded-full animate-bounce opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ animationDelay: "0.5s" }}
                      ></div>
                      <div
                        className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ animationDelay: "1s" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </section>
  )
}
