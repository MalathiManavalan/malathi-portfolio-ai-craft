
import React from 'react';
import { Globe, Cpu, Brain } from 'lucide-react';

const Interests = () => {
  const interests = [
    {
      title: "Web Development",
      description: "Creating responsive and interactive web applications using modern technologies",
      icon: Globe,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Internet of Things (IoT)",
      description: "Developing connected devices and smart systems for automation and monitoring",
      icon: Cpu,
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Artificial Intelligence",
      description: "Exploring machine learning, deep learning, and AI applications in various domains",
      icon: Brain,
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Areas of Interest</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {interests.map((interest, index) => {
            const IconComponent = interest.icon;
            return (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center">
                <div className={`w-16 h-16 bg-gradient-to-br ${interest.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-4">{interest.title}</h3>
                <p className="text-gray-600 leading-relaxed">{interest.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Interests;
