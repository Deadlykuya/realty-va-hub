
import { useState, useEffect, useRef } from "react";
import { TrendingUp, Users, Phone, Award } from "lucide-react";

const stats = [
  {
    icon: TrendingUp,
    number: 2500,
    suffix: "+",
    label: "Properties Acquired",
    description: "Successfully acquired for our clients"
  },
  {
    icon: Phone,
    number: 50000,
    suffix: "+",
    label: "Cold Calls Made",
    description: "Professional calls every month"
  },
  {
    icon: Users,
    number: 150,
    suffix: "+",
    label: "Happy Clients",
    description: "Real estate professionals served"
  },
  {
    icon: Award,
    number: 98,
    suffix: "%",
    label: "Success Rate",
    description: "Client satisfaction guarantee"
  }
];

export const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedNumbers, setAnimatedNumbers] = useState(stats.map(() => 0));
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          
          // Animate numbers
          stats.forEach((stat, index) => {
            let startTime: number;
            const duration = 2000;
            const startNumber = 0;
            const endNumber = stat.number;

            const animate = (currentTime: number) => {
              if (!startTime) startTime = currentTime;
              const progress = Math.min((currentTime - startTime) / duration, 1);
              const currentNumber = Math.floor(startNumber + (endNumber - startNumber) * progress);
              
              setAnimatedNumbers(prev => {
                const newNumbers = [...prev];
                newNumbers[index] = currentNumber;
                return newNumbers;
              });

              if (progress < 1) {
                requestAnimationFrame(animate);
              }
            };

            requestAnimationFrame(animate);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffd700\" fill-opacity=\"0.03\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-yellow-400">Proven</span> <span className="text-white">Results</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Numbers don't lie. See why top real estate professionals choose us as their virtual assistant partner.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className={`text-center group transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-yellow-400/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/10">
                <div className="w-16 h-16 mx-auto mb-6 bg-yellow-400/20 rounded-full flex items-center justify-center group-hover:bg-yellow-400/30 transition-colors">
                  <stat.icon className="w-8 h-8 text-yellow-400" />
                </div>
                
                <div className="text-4xl md:text-5xl font-black text-yellow-400 mb-2">
                  {animatedNumbers[index].toLocaleString()}{stat.suffix}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{stat.label}</h3>
                <p className="text-gray-400 text-sm">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
