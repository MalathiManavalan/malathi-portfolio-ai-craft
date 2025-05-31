
import React from 'react';
import { Award, Calendar } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "Python",
      issuer: "Prep Insta",
      date: "Feb 2022",
      status: "Completed"
    },
    {
      title: "Power BI",
      issuer: "Microsoft",
      date: "Sep 2024",
      status: "Completed"
    },
    {
      title: "Fundamentals of Generative AI",
      issuer: "Microsoft",
      date: "Sep 2024",
      status: "Completed"
    },
    {
      title: "AI Associate",
      issuer: "Salesforce",
      date: "Oct 2024",
      status: "Completed"
    },
    {
      title: "Oracle Certified Foundations Associate",
      issuer: "Oracle",
      date: "Feb 2025",
      status: "Expected"
    },
    {
      title: "Certified Appsec Practitioner",
      issuer: "The Secops Group",
      date: "Mar 2025",
      status: "Expected"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Certifications</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                </div>
                
                <div className="flex-grow">
                  <h3 className="text-lg font-bold text-gray-800 mb-1">{cert.title}</h3>
                  <p className="text-gray-600 mb-2">{cert.issuer}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span>{cert.date}</span>
                    </div>
                    
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      cert.status === 'Completed' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {cert.status}
                    </span>
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

export default Certifications;
