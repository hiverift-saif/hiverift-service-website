import React, { useState } from 'react';
import { 
  DollarSign, 
  TrendingUp, 
  Radio, 
  ShoppingCart, 
  GraduationCap, 
  Zap, 
  Shield, 
  Cpu, 
  Umbrella, 
  Dna, 
  Settings, 
  Link, 
  ShoppingBag, 
  Plane 
} from 'lucide-react';

const IndustrySelector = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('Banking');
  
  const industries = [
    {
      id: 'banking',
      name: 'Banking',
      icon: DollarSign,
      description: 'Financial services and banking solutions'
    },
    {
      id: 'capital-markets',
      name: 'Capital Markets',
      icon: TrendingUp,
      description: 'Investment and trading platforms'
    },
    {
      id: 'communications',
      name: 'Communications, Media, and Information Services',
      icon: Radio,
      description: 'Media and communication technologies'
    },
    {
      id: 'consumer-goods',
      name: 'Consumer Packaged Goods and Distribution',
      icon: ShoppingCart,
      description: 'Retail and distribution networks'
    },
    {
      id: 'education',
      name: 'Education',
      icon: GraduationCap,
      description: 'Educational technology solutions'
    },
    {
      id: 'energy',
      name: 'Energy, Resources, and Utilities',
      icon: Zap,
      description: 'Power and utility management'
    },
    {
      id: 'healthcare',
      name: 'Healthcare',
      icon: Shield,
      description: 'Medical and healthcare systems'
    },
    {
      id: 'high-tech',
      name: 'High Tech',
      icon: Cpu,
      description: 'Technology and innovation'
    },
    {
      id: 'insurance',
      name: 'Insurance',
      icon: Umbrella,
      description: 'Insurance and risk management'
    },
    {
      id: 'life-sciences',
      name: 'Life Sciences',
      icon: Dna,
      description: 'Pharmaceutical and biotech'
    },
    {
      id: 'manufacturing',
      name: 'Manufacturing',
      icon: Settings,
      description: 'Industrial and manufacturing processes'
    },
    {
      id: 'public-services',
      name: 'Public Services',
      icon: Link,
      description: 'Government and public sector'
    },
    {
      id: 'retail',
      name: 'Retail',
      icon: ShoppingBag,
      description: 'Retail and e-commerce solutions'
    },
    {
      id: 'travel',
      name: 'Travel and Logistics',
      icon: Plane,
      description: 'Transportation and logistics'
    }
  ];

  return (
    <div className="w-full  bg-gray-50 p-8">
      <div className="container mx-auto ">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-normal text-gray-900 mb-2">
            Select your industry. Discover our impact.
          </h1>
        </div>

        {/* Industry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {industries.map((industry) => {
            const IconComponent = industry.icon;
            const isSelected = selectedIndustry === industry.name;
            
            return (
              <div
                key={industry.id}
                onClick={() => setSelectedIndustry(industry.name)}
                className={`
                  group cursor-pointer transition-all duration-300 ease-out
                  ${isSelected ? 'transform scale-102' : 'hover:transform hover:scale-101'}
                `}
              >
                <div className={`
                  flex items-center gap-4 p-6 rounded-lg border-b-2 transition-all duration-300
                  ${isSelected 
                    ? 'border-blue-500 bg-blue-50/50' 
                    : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50/80'
                  }
                `}>
                  {/* Icon */}
                  <div className={`
                    w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300
                    ${isSelected 
                      ? 'bg-blue-100 text-blue-600' 
                      : 'bg-gray-100 text-blue-500 group-hover:bg-blue-50'
                    }
                  `}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <h3 className={`
                      text-lg font-medium transition-colors duration-300
                      ${isSelected ? 'text-blue-900' : 'text-gray-900 group-hover:text-blue-800'}
                    `}>
                      {industry.name}
                    </h3>
                    {isSelected && (
                      <p className="text-sm text-blue-600 mt-1 opacity-0 animate-fadeIn">
                        {industry.description}
                      </p>
                    )}
                  </div>
                  
                  {/* Selection Indicator */}
                  <div className={`
                    w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300
                    ${isSelected 
                      ? 'border-blue-500 bg-blue-500' 
                      : 'border-gray-300 group-hover:border-blue-400'
                    }
                  `}>
                    {isSelected && (
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Industry Display */}
        {/* {selectedIndustry && (
          <div className="mt-12 p-8 bg-white rounded-xl shadow-lg border border-gray-200">
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                {selectedIndustry}
              </h2>
              <p className="text-gray-600 mb-6">
                Discover how we're making an impact in the {selectedIndustry.toLowerCase()} industry
              </p>
              <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium">
                Explore Solutions
              </button>
            </div>
          </div>
        )} */}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default IndustrySelector;