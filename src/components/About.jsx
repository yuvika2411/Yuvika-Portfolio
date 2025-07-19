import React from 'react';
import { Code, Palette, Zap, Brain, Rocket, Heart } from 'lucide-react';

const About = () => {
  const features = [
    {
      title: "Web Development",
      description: "Skilled in creating dynamic web applications using React, JavaScript, and modern CSS frameworks with a focus on performance and user experience.",
      icon: <Code size={24} />,
      color: "blue"
    },
    {
      title: "UI/UX Design",
      description: "Experienced in designing user-centered interfaces using Figma and Adobe Creative Suite, creating intuitive and visually appealing designs.",
      icon: <Palette size={24} />,
      color: "purple"
    },
    {
      title: "Problem Solving",
      description: "Strong foundation in programming languages like Java, Python, and C with algorithmic thinking and creative problem-solving abilities.",
      icon: <Zap size={24} />,
      color: "green"
    },
    {
      title: "Creative Thinking",
      description: "Passionate about leveraging technology to create impactful solutions that push the boundaries of what's possible.",
      icon: <Brain size={24} />,
      color: "orange"
    },
    {
      title: "Innovation",
      description: "Always eager to learn new technologies and take on challenging projects that drive innovation and growth.",
      icon: <Rocket size={24} />,
      color: "red"
    },
    {
      title: "Passion",
      description: "Driven by a genuine love for technology and design, constantly seeking to improve and create meaningful digital experiences.",
      icon: <Heart size={24} />,
      color: "pink"
    },
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: "bg-blue-50 text-blue-600 border-blue-200",
      purple: "bg-purple-50 text-purple-600 border-purple-200",
      green: "bg-green-50 text-green-600 border-green-200",
      orange: "bg-orange-50 text-orange-600 border-orange-200",
      red: "bg-red-50 text-red-600 border-red-200",
      pink: "bg-pink-50 text-pink-600 border-pink-200"
    };
    return colors[color] || colors.blue;
  };

  return (
    <section id="about" className="py-20 bg-white relative">
      <div className="absolute inset-0 bg-grid-gray-900/[0.04] bg-[size:40px_40px]" />
    
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate Computer Science student with a keen interest in web development 
            and user experience design. Currently pursuing my degree at KIET Group of Institutions 
            with a CGPA of 9.04, I'm dedicated to creating impactful digital solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:border-gray-300 transition-all duration-200"
            >
              <div className={`w-12 h-12 rounded-lg border ${getColorClasses(feature.color)} flex items-center justify-center mb-4`}>
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              My journey in computer science has equipped me with both technical skills and creative 
              problem-solving abilities. I believe in the power of technology to transform ideas into 
              reality and create meaningful experiences for users.
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 inline-block">
              <p className="text-gray-700 font-medium italic">
                "Design is not just what it looks like and feels like. Design is how it works." - Steve Jobs
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
