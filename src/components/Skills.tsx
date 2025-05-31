
import React from 'react';
import { Code, Palette, Monitor, Users, Clock, Zap } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      icon: Code,
      skills: ["Python", "HTML"],
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Tools",
      icon: Palette,
      skills: ["Canva", "MS Office", "Figma"],
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Operating System",
      icon: Monitor,
      skills: ["Windows"],
      color: "from-green-500 to-green-600"
    },
    {
      title: "Soft Skills",
      icon: Users,
      skills: ["Teamwork", "Adaptability", "Time Management"],
      color: "from-pink-500 to-pink-600"
    },
    {
      title: "Languages",
      icon: Zap,
      skills: ["English", "Tamil"],
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center`}>
                    <IconComponent className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{category.title}</h3>
                </div>
                
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="bg-white rounded-lg p-3 shadow-sm border border-gray-100">
                      <span className="text-gray-700 font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
