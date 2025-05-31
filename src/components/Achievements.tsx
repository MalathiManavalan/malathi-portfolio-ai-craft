
import React from 'react';
import { Trophy, Users, BookOpen, Award } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      title: "Hackathon: Innovatrix",
      platform: "Unstop",
      year: "2023",
      type: "Competition",
      icon: Trophy
    },
    {
      title: "Workshop: Robotics, Automation, Canva",
      platform: "SNS College",
      year: "Sep 2023",
      type: "Workshop",
      icon: BookOpen
    },
    {
      title: "Paper Presentation: Fire Detection System",
      platform: "Academic Conference",
      year: "2023",
      type: "Presentation",
      icon: Award
    },
    {
      title: "International Conference: ICCSICE'24",
      platform: "Karpagam College",
      year: "Mar 2024",
      type: "Conference",
      icon: Users
    },
    {
      title: "I Aspire GO FOR GOLD",
      platform: "Accenture",
      year: "Jan 2025",
      type: "Program",
      icon: Trophy
    }
  ];

  const role = {
    title: "Student Coordinator",
    event: "Colors Event",
    organization: "SNS College of Engineering",
    period: "Sep 2023",
    description: "Coordinated team activities and communication for event success."
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Achievements & Roles</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Achievements */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Achievements & Participation</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon;
                return (
                  <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-4 h-4 text-white" />
                      </div>
                      <span className="bg-white px-2 py-1 rounded-full text-xs font-medium text-gray-700">
                        {achievement.type}
                      </span>
                    </div>
                    
                    <h4 className="text-lg font-bold text-gray-800 mb-2">{achievement.title}</h4>
                    <p className="text-gray-600 text-sm mb-1">{achievement.platform}</p>
                    <p className="text-gray-500 text-sm">{achievement.year}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Role & Responsibilities */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Roles & Responsibilities</h3>
            <div className="max-w-2xl mx-auto">
              <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-lg shadow-lg p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-800">{role.title}</h4>
                    <p className="text-gray-600">{role.event}</p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <p className="text-gray-700"><strong>Organization:</strong> {role.organization}</p>
                  <p className="text-gray-700"><strong>Period:</strong> {role.period}</p>
                  <p className="text-gray-700 leading-relaxed"><strong>Description:</strong> {role.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
