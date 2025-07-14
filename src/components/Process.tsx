import { useState, useEffect, useRef } from "react";
import { Phone, Search, FileText, Handshake, TrendingUp, CheckCircle } from "lucide-react";

const processSteps = [
  {
    icon: Phone,
    title: "Initial Consultation",
    description: "We understand your goals, market, and specific requirements",
    duration: "Day 1",
    details: ["Needs assessment", "Goal setting", "Strategy planning", "Team assignment"]
  },
  {
    icon: Search,
    title: "Market Research",
    description: "Deep dive into your target market and opportunity analysis",
    duration: "Days 2-3",
    details: ["Competitor analysis", "Market trends", "Lead sources", "Pricing strategy"]
  },
  {
    icon: FileText,
    title: "Campaign Setup",
    description: "Custom scripts, CRM integration, and workflow optimization",
    duration: "Days 4-5",
    details: ["Script development", "CRM configuration", "Process documentation", "Quality standards"]
  },
  {
    icon: Handshake,
    title: "Execution Phase",
    description: "Active calling, lead generation, and appointment setting",
    duration: "Ongoing",
    details: ["Daily calling", "Lead qualification", "Appointment booking", "Progress reporting"]
  },
  {
    icon: TrendingUp,
    title: "Optimization",
    description: "Continuous improvement based on results and feedback",
    duration: "Weekly",
    details: ["Performance analysis", "Script refinement", "Process improvement", "Scale planning"]
  }
];

export const Process = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          
          // Auto-progress through steps
          const interval = setInterval(() => {
            setActiveStep((prev) => (prev + 1) % processSteps.length);
          }, 5000);

          return () => clearInterval(interval);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="process" ref={sectionRef} className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/3 to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            <span className="text-white">Our</span> <span className="text-yellow-400">Process</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A proven 5-step methodology that transforms your real estate business from day one.
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-700 rounded-full">
              <div 
                className="h-full bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-full transition-all duration-2000 ease-in-out"
                style={{ width: `${((activeStep + 1) / processSteps.length) * 100}%` }}
              ></div>
            </div>

            {/* Process Steps */}
            <div className="flex justify-between relative">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className={`relative cursor-pointer transition-all duration-1500 ease-in-out ${
                    index <= activeStep ? "scale-100" : "scale-90 opacity-70"
                  }`}
                  onClick={() => setActiveStep(index)}
                >
                  {/* Step Circle */}
                  <div className={`w-16 h-16 rounded-full border-4 flex items-center justify-center mb-6 transition-all duration-1500 ease-in-out ${
                    index <= activeStep 
                      ? "bg-yellow-400 border-yellow-400 shadow-lg shadow-yellow-400/50" 
                      : "bg-gray-800 border-gray-600"
                  }`}>
                    {index < activeStep ? (
                      <CheckCircle className="w-8 h-8 text-black" />
                    ) : (
                      <step.icon className={`w-8 h-8 ${index <= activeStep ? "text-black" : "text-gray-400"}`} />
                    )}
                  </div>

                  {/* Step Content */}
                  <div className={`text-center transition-all duration-1500 ease-in-out ${
                    index === activeStep ? "opacity-100 translate-y-0" : "opacity-70 translate-y-2"
                  }`}>
                    <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700 w-64">
                      <div className="text-yellow-400 text-sm font-semibold mb-2">{step.duration}</div>
                      <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                      <p className="text-gray-300 text-sm mb-4">{step.description}</p>
                      
                      {/* Details - Show only for active step */}
                      {index === activeStep && (
                        <div className="space-y-2 animate-fade-in">
                          {step.details.map((detail, detailIndex) => (
                            <div key={detailIndex} className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                              <span className="text-xs text-gray-400">{detail}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Process */}
        <div className="lg:hidden space-y-8">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-yellow-400/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <step.icon className="w-6 h-6 text-yellow-400" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="text-yellow-400 text-sm font-semibold mb-1">{step.duration}</div>
                    <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-gray-300 mb-4">{step.description}</p>
                    
                    <div className="grid grid-cols-2 gap-2">
                      {step.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                          <span className="text-sm text-gray-400">{detail}</span>
                        </div>
                      ))}
                    </div>
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