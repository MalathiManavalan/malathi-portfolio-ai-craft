
import React from 'react';
import { Code, Zap, Shield } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Accident Prevention System",
      description: "Developed a comprehensive system to prevent accidents using advanced sensors and real-time monitoring.",
      icon: Shield,
      type: "Offline",
      technologies: ["Embedded Systems", "Sensors", "Safety Systems"]
    },
    {
      title: "Automatic Control of DC Microgrids",
      description: "Used RPM count for early-stage motor fault detection in DC microgrid systems to improve reliability and efficiency.",
      icon: Zap,
      type: "Offline",
      technologies: ["Power Systems", "Control Systems", "Fault Detection"]
    },
    {
      title: "Fire Detection System using Image Processing",
      description: "Applied advanced image processing techniques for real-time fire detection and rapid response system implementation.",
      icon: Code,
      type: "Offline",
      technologies: ["Image Processing", "Computer Vision", "Python"]
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs font-medium">
                    {project.type}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium">
                      {tech}
                    </span>
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

export default Projects;
