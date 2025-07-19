import React from 'react';
import { GraduationCap, Calendar, Award, MapPin } from 'lucide-react';

const Education = () => {
  const education = [
    {
      institution: "KIET Group of Institutions",
      location: "Ghaziabad, India",
      degree: "Computer Science",
      grade: "CGPA: 9.04",
      period: "2024 - 2028",
      current: true,
      color: "blue"
    },
    {
      institution: "Nehru World School",
      location: "Ghaziabad, India",
      degree: "CBSE (Class XII)",
      grade: "91.8%",
      period: "2023 - 2024",
      current: false,
      color: "purple"
    },
    {
      institution: "Ryan International School",
      location: "Ghaziabad, India",
      degree: "CBSE (Class X)",
      grade: "93%",
      period: "2021 - 2022",
      current: false,
      color: "green"
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: "bg-blue-600 text-white",
      purple: "bg-purple-600 text-white",
      green: "bg-green-600 text-white"
    };
    return colors[color] || colors.blue;
  };

  const getBorderColor = (color) => {
    const colors = {
      blue: "border-blue-500",
      purple: "border-purple-500",
      green: "border-green-500"
    };
    return colors[color] || colors.blue;
  };

  return (
    <section id="education" className="py-20 bg-slate-900 relative">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Education</h2>
          <p className="text-xl text-gray-300">My academic journey and achievements</p>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className={`bg-gray-800/50 backdrop-blur-sm border ${getBorderColor(edu.color)} border-l-4 rounded-xl p-8 hover:bg-gray-800/70 transition-colors duration-200`}
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                <div className="flex items-start space-x-4 mb-6 lg:mb-0">
                  <div className={`w-12 h-12 rounded-lg ${getColorClasses(edu.color)} flex items-center justify-center flex-shrink-0`}>
                    <GraduationCap size={24} />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-white mb-2">{edu.institution}</h3>
                    <div className="flex items-center space-x-2 text-gray-300 mb-2">
                      <MapPin size={16} />
                      <span className="text-sm">{edu.location}</span>
                    </div>
                    <p className="text-gray-200 font-medium">{edu.degree}</p>
                  </div>
                </div>

                <div className="flex flex-col space-y-3 lg:text-right">
                  <div className="flex items-center space-x-2 lg:justify-end">
                    <Award size={16} className="text-yellow-400" />
                    <span className="text-yellow-400 font-semibold">{edu.grade}</span>
                  </div>
                  <div className="flex items-center space-x-2 lg:justify-end text-gray-300">
                    <Calendar size={16} />
                    <span className="text-sm">{edu.period}</span>
                    {edu.current && (
                      <span className="ml-2 px-3 py-1 bg-green-500/20 border border-green-500/30 text-green-400 text-xs rounded-full font-medium">
                        Current
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
