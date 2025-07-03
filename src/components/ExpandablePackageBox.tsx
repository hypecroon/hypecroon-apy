import React, { useState } from 'react';
import { ChevronDown, ChevronUp, CheckCircle } from 'lucide-react';
import AddToCartButton from './AddToCartButton';

interface PackageBoxProps {
  pkg: {
    id: string;
    name: string;
    price: number;
    icon: React.ComponentType<any>;
    color: string;
    borderColor: string;
    popular?: boolean;
    premium?: boolean;
    features: string[];
    service: string;
    image: string;
    packageType: string;
  };
  index: number;
}

const ExpandablePackageBox: React.FC<PackageBoxProps> = ({ pkg, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const coreFeatures = pkg.features.slice(0, 4);
  const additionalFeatures = pkg.features.slice(4);
  const hasMoreFeatures = additionalFeatures.length > 0;

  const handleToggle = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setIsExpanded(!isExpanded);
    
    // Reset animation state after animation completes
    setTimeout(() => setIsAnimating(false), 600);
  };

  return (
    <div
      className={`${pkg.color} rounded-xl shadow-lg relative overflow-hidden border-2 ${pkg.borderColor} ${
        pkg.popular ? 'ring-2 ring-pink-500 transform scale-105' : ''
      } ${pkg.premium ? 'ring-2 ring-gray-400 transform scale-105' : ''} 
      hover:scale-105 transition-all duration-300 hover:shadow-glow cursor-pointer
      ${isExpanded ? 'transform scale-105 shadow-glow-lg' : ''}
      ${isAnimating ? 'animate-bounce-3d' : ''}`}
      style={{ 
        minHeight: isExpanded ? '420px' : '320px',
        maxWidth: '240px',
        margin: '0 auto',
        transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
      }}
      onClick={!isExpanded ? handleToggle : undefined}
    >
      {/* Popular/Premium Badges */}
      {pkg.popular && (
        <div className="absolute top-0 left-0 right-0 bg-pink-500 text-white text-center py-1.5 text-xs font-semibold z-10">
          <span className="inline-flex items-center">
            ⭐ Most Popular
          </span>
        </div>
      )}
      {pkg.premium && (
        <div className="absolute top-0 left-0 right-0 bg-gray-400 text-black text-center py-1.5 text-xs font-semibold z-10">
          <span className="inline-flex items-center">
            👑 Premium Choice
          </span>
        </div>
      )}
      
      <div className={`p-4 ${pkg.popular || pkg.premium ? 'pt-8' : ''} h-full flex flex-col`}>
        {/* Header Section */}
        <div className="text-center mb-4">
          <div className="flex items-center justify-center mb-2">
            <pkg.icon className="h-5 w-5 text-pink-400 mr-1" />
            <h3 className="text-sm font-bold text-white">{pkg.name}</h3>
          </div>
          <div className="text-xl font-bold text-white mb-1">${pkg.price}</div>
          <div className="text-gray-400 text-xs">per campaign</div>
        </div>

        {/* Core Features - Always Visible */}
        <div className="flex-1">
          <ul className="space-y-1.5 mb-4">
            {coreFeatures.map((feature, featureIndex) => (
              <li 
                key={featureIndex} 
                className="flex items-start opacity-100 transform translate-y-0"
                style={{
                  animation: isExpanded ? `fadeIn 0.5s ease-out ${featureIndex * 0.1}s both` : 'none'
                }}
              >
                <CheckCircle className="h-2.5 w-2.5 text-green-400 mr-1.5 mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-xs leading-tight">{feature}</span>
              </li>
            ))}
          </ul>

          {/* Expandable Additional Features */}
          {hasMoreFeatures && (
            <div 
              className={`overflow-hidden transition-all duration-600 ease-in-out ${
                isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <ul className="space-y-1.5 mb-4">
                {additionalFeatures.map((feature, featureIndex) => (
                  <li 
                    key={featureIndex + coreFeatures.length} 
                    className={`flex items-start transform transition-all duration-300 ${
                      isExpanded 
                        ? 'translate-y-0 opacity-100' 
                        : 'translate-y-4 opacity-0'
                    }`}
                    style={{
                      transitionDelay: isExpanded ? `${(featureIndex + 4) * 0.1}s` : '0s',
                      animation: isExpanded ? `slideIn 0.4s ease-out ${(featureIndex + 4) * 0.1}s both` : 'none'
                    }}
                  >
                    <CheckCircle className="h-2.5 w-2.5 text-green-400 mr-1.5 mt-1 flex-shrink-0" />
                    <span className="text-gray-300 text-xs leading-tight relative">
                      {feature}
                      {/* Highlight effect for newly revealed features */}
                      <span 
                        className={`absolute inset-0 bg-pink-300/20 rounded transition-opacity duration-1000 ${
                          isExpanded ? 'opacity-100' : 'opacity-0'
                        }`}
                        style={{
                          animationDelay: `${(featureIndex + 4) * 0.1 + 0.3}s`,
                          animation: isExpanded ? 'highlight 1.5s ease-out forwards' : 'none'
                        }}
                      />
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Show More/Less Button */}
          {hasMoreFeatures && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleToggle();
              }}
              className={`w-full text-xs text-pink-300 hover:text-pink-200 transition-all duration-200 flex items-center justify-center space-x-1 py-2 rounded-lg hover:bg-gray-800/50 ${
                isAnimating ? 'pointer-events-none' : ''
              }`}
              disabled={isAnimating}
            >
              <span>
                {isExpanded ? 'Show Less' : `+${additionalFeatures.length} more features`}
              </span>
              {isExpanded ? (
                <ChevronUp className="h-3 w-3 transition-transform duration-300" />
              ) : (
                <ChevronDown className="h-3 w-3 transition-transform duration-300" />
              )}
            </button>
          )}
        </div>

        {/* Add to Cart Button - Always at Bottom */}
        <div className="mt-auto pt-4">
          <AddToCartButton
            product={{
              id: pkg.id,
              name: pkg.name,
              service: pkg.service,
              price: pkg.price,
              features: pkg.features,
              image: pkg.image,
              packageType: pkg.packageType
            }}
            size="sm"
            variant="primary"
          />
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes highlight {
          0% {
            opacity: 0;
            transform: scale(0.95);
          }
          50% {
            opacity: 1;
            transform: scale(1.02);
          }
          100% {
            opacity: 0;
            transform: scale(1);
          }
        }

        @keyframes bounce3d {
          0%, 100% {
            transform: translateY(0) scale(1.05) rotateX(0deg);
          }
          50% {
            transform: translateY(-5px) scale(1.08) rotateX(2deg);
          }
        }

        .animate-bounce-3d {
          animation: bounce3d 0.6s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default ExpandablePackageBox;