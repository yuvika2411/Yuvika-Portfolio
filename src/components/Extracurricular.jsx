import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Users, Code, Award, Zap, Target } from 'lucide-react';

const Extracurricular = () => {
  const achievements = [
    {
      title: "CodeWizard'25 SRMIST",
      description: "Represented KIET as Team Fantastic 5",
      icon: <Code size={20} />,
      color: "from-blue-500 to-cyan-500",
      category: "Competition"
    },
    {
      title: "Build with India Hackathon",
      description: "Ranked in Top 5000 teams out of 25,000",
      icon: <Trophy size={20} />,
      color: "from-green-500 to-emerald-500",
      category: "Achievement"
    },
    {
      title: "Smart India Hackathon 2024",
      description: "Volunteered at Hardware Edition",
      icon: <Users size={20} />,
      color: "from-purple-500 to-pink-500",
      category: "Volunteer"
    },
    {
      title: "Endeavour'25, E-Summit",
      description: "Volunteered at E-Cell KIET event",
      icon: <Users size={20} />,
      color: "from-indigo-500 to-blue-500",
      category: "Volunteer"
    },
    {
      title: "Hackaccino 3.0 Hackathon",
      description: "Participated in Coding Ninjas event",
      icon: <Code size={20} />,
      color: "from-orange-500 to-red-500",
      category: "Competition"
    },
    {
      title: "Pears Hackathon",
      description: "Finalist and Rewarded with ₹1000 Amazon Pay Gift Card",
      icon: <Award size={20} />,
      color: "from-yellow-500 to-orange-500",
      category: "Achievement"
    }
  ];

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Achievement':
        return <Trophy size={16} className="text-yellow-400" />;
      case 'Competition':
        return <Target size={16} className="text-blue-400" />;
      case 'Volunteer':
        return <Zap size={16} className="text-purple-400" />;
      default:
        return <Award size={16} className="text-green-400" />;
    }
  };

  return (
    <section id="achievements" className="py-20 bg-black/[0.96] antialiased bg-grid-white/[0.02] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-8">
            Extracurricular Achievements
          </h2>
          <p className="text-xl text-gray-300">
            Competitions, hackathons, and community involvement
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className={`absolute -inset-1 bg-gradient-to-r ${achievement.color} opacity-75 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200 rounded-2xl`}></div>
              <div className="relative bg-black border border-gray-800 p-6 rounded-2xl hover:border-gray-600 transition-all duration-300 h-full">
                <div className="flex items-start justify-between mb-4">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-r ${achievement.color}`}>
                    <div className="text-white">{achievement.icon}</div>
                  </div>
                  <div className="flex items-center space-x-1">
                    {getCategoryIcon(achievement.category)}
                    <span className="text-xs text-gray-400 uppercase tracking-wider">
                      {achievement.category}
                    </span>
                  </div>
                </div>

                <div className="flex-grow">
                  <h3 className="text-lg font-bold text-white mb-3 leading-tight">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {achievement.description}
                  </p>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-800">
                  <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent border border-gray-700`}>
                    View Details
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Extracurricular;
