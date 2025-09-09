import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const CustomerStoriesSwiper = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const stories = [
    {
      id: 1,
      title: "Puratos",
      description: "Enhances procurement efficiency with TCS TAP™",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: "Fanatics",
      description: "Enables a seamless fan experience across commerce, collectibles, and gaming.",
      image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: "Proximus",
      description: "Boosts efficiency with business process management",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      title: "TechCorp",
      description: "Revolutionizes digital transformation with AI-powered solutions",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 5,
      title: "SecureBank",
      description: "Strengthens cybersecurity infrastructure with advanced threat detection",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 6,
      title: "ConnectPlus",
      description: "Improves team collaboration with unified communication platform",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 7,
      title: "GlobalTrade",
      description: "Expands international reach through automated trading systems",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 8,
      title: "PowerGrid",
      description: "Optimizes energy distribution with smart grid technology",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 9,
      title: "DataInsights",
      description: "Transforms business intelligence with advanced analytics dashboard",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    }
  ];

  const cardsToShow = 3;
  const maxIndex = Math.max(0, stories.length - cardsToShow);

  const nextSlide = () => {
    setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex(prev => Math.max(prev - 1, 0));
  };

  return (
    <div className="w-full  bg-white p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <h1 className="text-5xl font-normal text-black">Customer Stories</h1>
          
          {/* Navigation Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className="p-2 rounded-full border border-gray-300 bg-white hover:bg-gray-50 transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <button
              onClick={nextSlide}
              disabled={currentIndex === maxIndex}
              className="p-2 rounded-full border border-gray-300 bg-white hover:bg-gray-50 transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Cards Container */}
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-out"
            style={{ 
              transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)`,
              width: `${(stories.length / cardsToShow) * 100}%`
            }}
          >
            {stories.map((story, index) => (
              <div 
                key={story.id}
                className="px-3"
                style={{ width: `${100 / stories.length}%` }}
              >
                <div className="relative rounded-3xl overflow-hidden h-96 group cursor-pointer">
                  {/* Background Image */}
                  <img 
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300"></div>
                  
                  {/* Content */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-between text-white">
                    {/* Empty space for top */}
                    <div></div>
                    
                    {/* Bottom content */}
                    <div>
                      <h3 className="text-4xl font-normal mb-4 leading-tight">
                        {story.title}
                      </h3>
                      <p className="text-lg text-white/90 leading-relaxed mb-6">
                        {story.description}
                      </p>
                      
                      {/* Read More Button */}
                      <button className="flex items-center gap-3 text-white hover:text-white/80 transition-colors duration-200 group-hover:translate-x-1 transform">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                        </svg>
                        <span className="text-sm font-medium tracking-wider uppercase">
                          READ MORE
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerStoriesSwiper;