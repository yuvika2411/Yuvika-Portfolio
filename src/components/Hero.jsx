import React from 'react';
import { ArrowRight, Mail, Github, Linkedin, MapPin, Download, Sparkles, Figma } from 'lucide-react';
import MeImage from "../assets/itss_mehehe.jpg";



const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-slate-900 relative overflow-hidden">
      {/* Background Grid and Gradients */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
      
      {/* Floating Blurs */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl animate-pulse" />
      <div className="absolute top-40 right-20 w-40 h-40 bg-purple-500/15 rounded-full blur-2xl animate-pulse delay-1000" />
      <div className="absolute bottom-40 left-1/4 w-36 h-36 bg-cyan-500/15 rounded-full blur-2xl animate-pulse delay-2000" />
      <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-pink-500/10 rounded-full blur-xl animate-pulse delay-3000" />

      {/* Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-6 md:pt-20 pt-28 pb-16 md:pb-0 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
          
          {/* Left Side */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="font-bold text-white">
                <span className="text-2xl">Hi, I'm</span>
                <br />
                <span className="bg-gradient-to-r md:text-7xl text-6xl from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-gradient font-bold">
                  YUVIKA{" "}
                </span>
                <span className="text-gray-300 md:text-7xl text-6xl">JINDAL</span>
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
                A passionate<span className="text-blue-400 font-semibold"> Web Developer</span> and 
                <span className="text-purple-400 font-semibold"> UI/UX Designer</span> crafting clean, user-focused digital experiences with modern tools.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {[
                { label: "Years of Experience", value: "1+", color: "blue" },
                { label: "Projects", value: "5+", color: "purple", delay: "delay-500" },
                { label: "Hackathons", value: "5+", color: "cyan", delay: "delay-1000" },
              ].map(({ label, value, color, delay }) => (
                <div key={label} className="text-center group relative">
                  <div className={`bg-gradient-to-br from-${color}-500/10 to-${color}-600/10 border border-${color}-500/20 rounded-2xl p-4 hover:from-${color}-500/15 hover:to-${color}-600/15 hover:border-${color}-500/30 transition-all duration-300 backdrop-blur-sm`}>
                    <div className={`text-3xl font-bold text-white group-hover:text-${color}-400 transition-colors mb-1`}>{value}</div>
                    <div className="text-[12px] md:text-sm text-gray-400 group-hover:text-gray-300 transition-colors">{label}</div>
                    <div className={`absolute -top-1 -right-1 w-3 h-3 bg-${color}-500 rounded-full animate-pulse ${delay}`} />
                  </div>
                </div>
              ))}
            </div>

            {/* Contact */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors group">
                <Mail size={18} className="text-blue-400 group-hover:text-blue-300" />
                <span className="text-sm">yuvikajindal241106@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors group">
                <MapPin size={18} className="text-purple-400 group-hover:text-purple-300" />
                <span className="text-sm">Ghaziabad, India</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a href="#projects" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg transition-all duration-300 font-medium shadow-lg hover:shadow-blue-500/25 transform hover:-translate-y-1">
                Explore My Work
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <button onClick={() => window.location.href = "https://drive.google.com/file/d/1MgNCi22gfChgY5rSz8ujZpSjz3hd1nun/view?usp=sharing"} className="inline-flex items-center px-6 py-3 border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white rounded-lg transition-all duration-300 font-medium hover:bg-gray-800/50 transform hover:-translate-y-1">
                <Download size={18} className="mr-2" />
                Download Resume
              </button>
            </div>

            {/* Socials */}
            <div className="flex items-center space-x-4">
              <a href="https://github.com/yuvika2411" className="p-3 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700 hover:border-gray-600 rounded-lg transition-all duration-300 backdrop-blur-sm transform hover:-translate-y-1 hover:shadow-lg">
                <Github size={20} className="text-gray-300 hover:text-white transition-colors" />
              </a>
              <a href="https://www.linkedin.com/in/yuvika-jindal-6b3181328/" className="p-3 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700 hover:border-gray-600 rounded-lg transition-all duration-300 backdrop-blur-sm transform hover:-translate-y-1 hover:shadow-lg">
                <Linkedin size={20} className="text-gray-300 hover:text-white transition-colors" />
              </a>
              <a href="https://www.figma.com/design/iXrVVTkNeOgOI8RTaYcY2D/All-Work?node-id=24-233&t=yXSEx2M4hoVScOhX-1" className="p-3 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700 hover:border-gray-600 rounded-lg transition-all duration-300 backdrop-blur-sm transform hover:-translate-y-1 hover:shadow-lg">
                <Figma size={20} className="text-gray-300 hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Right Side: Overlapping Image + Skills Card */}
{/* Right Side: Overlapping Image + Skills Card */}
<div className="relative animate-fade-in-right flex justify-center items-start">
  {/* Skills Box */}
  <div className="bg-gray-800/30 backdrop-blur-md border border-gray-700/50 rounded-2xl pt-35 pb-2 px-8 shadow-2xl hover:shadow-3xl transition-all duration-300 w-[350px] relative">
    
    {/* Profile Image (larger and neatly overlapping) */}
    <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 z-20">
      <div className="w-40 h-40 rounded-full overflow-hidden border-2 border-purple-500 shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:shadow-[0_0_45px_rgba(168,85,247,0.6)] transition-all duration-500 mt-10">
        <img
          src={MeImage}
          alt="Yuvika Jindal"
          className="w-full h-full object-cover"
        />
      </div>
    </div>

    {/* Header */}
    <h3 className="text-xl font-bold text-white mb-4 flex items-center justify-center">
      <Sparkles size={20} className="mr-2 text-blue-400" />
      What I Do
    </h3>

    {/* Skill Items (less vertical spacing) */}
    <div className="space-y-4">
      {[
        { key: 'W', title: 'Web Development', tech: 'React, JavaScript, HTML/CSS', color: 'blue' },
        { key: 'U', title: 'UI/UX Design', tech: 'Figma, Adobe Creative Suite', color: 'purple' },
        { key: 'P', title: 'Programming', tech: 'Java, Python, C', color: 'green' },
        { key: 'G', title: 'Graphic Design', tech: 'Adobe Photoshop, Visual Design', color: 'orange' },
      ].map(({ key, title, tech, color }) => (
        <div key={key} className="flex items-center space-x-4 p-3 rounded-xl hover:bg-gray-700/30 transition-all duration-300 group">
          <div className={`w-12 h-12 bg-gradient-to-br from-${color}-500/20 to-${color}-600/20 border border-${color}-500/30 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
            <span className={`text-${color}-400 font-bold text-lg`}>{key}</span>
          </div>
          <div>
            <h4 className={`text-white font-semibold group-hover:text-${color}-400 transition-colors`}>{title}</h4>
            <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">{tech}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>


        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fade-in-right {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-fade-in-right {
          animation: fade-in-right 0.8s ease-out 0.2s both;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
