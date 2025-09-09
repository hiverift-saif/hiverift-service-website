import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const TechnologyCards = () => {
  const [showAllTopics, setShowAllTopics] = useState(false);
  
  const mainTopics = [
    {
      id: 1,
      title: "AI and Data & Analytics",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Transform your business with artificial intelligence and advanced analytics solutions"
    },
    {
      id: 2,
      title: "Cloud",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Scale your operations with secure and flexible cloud infrastructure"
    },
    {
      id: 3,
      title: "Cognitive Business Operations",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Automate and optimize your business processes with intelligent operations"
    },
    {
      id: 4,
      title: "Consulting",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Strategic guidance and expertise to accelerate your digital transformation"
    }
  ];

  const additionalTopics = [
    {
      id: 5,
      title: "Cybersecurity",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Protect your business with advanced security solutions and threat detection"
    },
    {
      id: 6,
      title: "Digital Experience",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Create exceptional user experiences across all digital touchpoints"
    },
    {
      id: 7,
      title: "Enterprise Applications",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Modernize your enterprise systems with scalable application solutions"
    },
    {
      id: 8,
      title: "IoT and Edge Computing",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Connect and manage devices with intelligent IoT and edge solutions"
    },
    {
      id: 9,
      title: "Blockchain",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Build trust and transparency with secure blockchain technologies"
    },
    {
      id: 10,
      title: "Quantum Computing",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Explore next-generation computing with quantum technology solutions"
    },
    // {
    //   id: 11,
    //   title: "Automation",
    //   image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    //   description: "Streamline operations with intelligent process automation"
    // },
    // {
    //   id: 12,
    //   title: "5G and Networks",
    //   image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    //   description: "Enable ultra-fast connectivity with advanced networking solutions"
    // }
  ];

  const displayedTopics = showAllTopics ? [...mainTopics, ...additionalTopics] : mainTopics;

  return (
    <div className="w-full  bg-black text-white p-8">
      <div className="">
        {/* Header */}
        <div className="text-left mb-16">
          <h1 className="text-3xl font-light mb-8 leading-tight">
            Transform your business with advanced technologies
          </h1>
        </div>

        {/* Cards Grid */}
 <div
  className={`grid gap-6 mb-12 transition-all duration-500 justify-center
    ${showAllTopics 
      ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4' 
      : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
    }`}
>

          {displayedTopics.map((topic, index) => (
            <div
              key={topic.id}
              className={`
                relative group cursor-pointer rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl
                ${showAllTopics && index >= 4 ? 'opacity-0 animate-fadeInUp' : ''}
              `}
              style={{
                animationDelay: showAllTopics && index >= 4 ? `${(index - 4) * 100}ms` : '0ms',
                height: showAllTopics ? '500px' : '400px'
              }}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={topic.image}
                  alt={topic.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 group-hover:from-black/90 transition-all duration-300" />

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="transform transition-all duration-300 group-hover:translate-y-[-8px]">
                  <h3 className="text-2xl font-semibold mb-3 leading-tight">
                    {topic.title}
                  </h3>
                  {showAllTopics && (
                    <p className="text-sm text-gray-200 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {topic.description}
                    </p>
                  )}
                </div>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/30 rounded-2xl transition-all duration-300" />
            </div>
          ))}
        </div>

        {/* View All Topics Button */}
        <div className="text-center">
          <button
            onClick={() => setShowAllTopics(!showAllTopics)}
            className="group inline-flex items-center gap-3 px-8 py-4 border-2 border-white/30 rounded-full text-white hover:bg-white hover:text-gray-900 transition-all duration-300 hover:border-white"
          >
            <span className="text-lg font-medium">
              {showAllTopics ? 'Show less topics' : 'View all topics'}
            </span>
            {showAllTopics ? (
              <ChevronUp className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-[-2px]" />
            ) : (
              <ChevronDown className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-[2px]" />
            )}
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default TechnologyCards;