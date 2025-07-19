import { Briefcase, Calendar, Sparkles } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "UI/UX Designer",
      company: "ICanCaRe",
      period: "July 2025 - Present",
      current: true,
      description:
        "Currently interning with ICanCaRe, contributing to user interface redesign and enhancing overall user experience for the organization's digital platforms.Collaborating with developers and stakeholders to implement modern, accessible, and user-friendly design solutions",
      skills: ["Figma","UI/UX"],
    },
    {
      title: "Web Developer",
      company: "ECell KIET",
      period: "June 2025 - Present",
      current: true,
      description:
        "Recently joined the E-Cell tech team as a Web Developer, eager to contribute to upcoming projects and enhance user experiences through impactful web solutions.",
      skills: ["React", "JavaScript", "Web Development", "UI/UX"],
    },
    
    {
      title: "Graphic Designer",
      company: "ECell KIET",
      period: "Oct 2024 - May 2025",
      current: false,
      description:
        "Designed event creatives including banners, standees, and social media posts for various flagship events, strengthening brand presence and boosting engagement. Gained hands-on experience with Adobe Photoshop, significantly improving visual storytelling and design proficiency.",
      skills: [
        "Adobe Photoshop",
        "Graphic Design",
        "Brand Design",
        "Visual Storytelling",
      ],
    },
  ];

  const achievements = [
    "Finalist (Top 6 out of 150+ teams) in Tutedude’s Designathon 1.0 as Team Scribble Squad",
    "Represented KIET as Team Fantastic 5 in CodeWizard'25 SRMIST",
    "Ranked in Top 5000 teams out of 25,000 in Build with India Hackathon",
    "Volunteered at Smart India Hackathon 2024 – Hardware Edition",
    "Volunteered at Endeavour'25, E-Summit by E-Cell KIET",
    "Participated in Hackaccino 3.0 Hackathon by Coding Ninjas",
    "Finalist and Rewarded in Pears Hackathon with ₹1000 Amazon Pay Gift Card",
  ];

  return (
    <section id="experience" className="py-20 bg-white relative">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid-gray-900/[0.04] bg-[size:40px_40px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Work Experience
          </h2>
          <p className="text-xl text-gray-600">
            My professional journey and contributions
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-8 mb-20">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 border-l-4 border-l-blue-500 rounded-xl p-8 hover:border-gray-300 transition-colors duration-200"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                <div className="flex items-center space-x-4 mb-4 lg:mb-0">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Briefcase size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {exp.title}
                    </h3>
                    <p className="text-blue-600 font-medium">{exp.company}</p>
                  </div>
                </div>

                <div className="flex flex-col space-y-2">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Calendar size={16} />
                    <span className="text-sm font-medium">{exp.period}</span>
                  </div>
                  {exp.current && (
                    <div className="flex items-center space-x-2">
                      <Sparkles size={16} className="text-green-600" />
                      <span className="px-3 py-1 bg-green-50 border border-green-200 text-green-700 text-xs rounded-full font-medium">
                        Current Position
                      </span>
                    </div>
                  )}
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed mb-6">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-gray-50 border border-gray-200 text-gray-700 text-sm rounded-full font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Extracurricular Achievements
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 border-l-4 border-l-green-500 rounded-lg p-4 hover:border-gray-300 transition-colors duration-200"
              >
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {achievement}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
