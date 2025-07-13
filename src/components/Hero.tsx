import { useState, useEffect } from "react";
import { ChevronRight, Play, Phone, Mail, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-transparent animate-pulse"></div>
      </div>

      {/* Video Background Simulation */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-400/20 rounded-full blur-xl animate-bounce"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-yellow-400/10 rounded-full blur-2xl animate-pulse"></div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-yellow-400/20 border border-yellow-400/30 rounded-full px-4 py-2 mb-6 animate-fade-in">
            <Star className="w-4 h-4 text-yellow-400" />
            <span className="text-yellow-400 text-sm font-medium">#1 Real Estate VA Agency</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 bg-clip-text text-transparent animate-pulse">
              DOMINATE
            </span>
            <br />
            <span className="text-white">Real Estate</span>
            <br />
            <span className="text-yellow-400">WITH US</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Premium Virtual Assistant services for Real Estate professionals. 
            <span className="text-yellow-400 font-semibold"> Cold Calling, Acquisitions & Dispositions</span> 
            - we handle it all while you close deals.
          </p>

          {/* Stats Row */}
          <div className="flex flex-wrap justify-center gap-8 mb-10 text-center">
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="text-3xl font-bold text-yellow-400">500+</div>
              <div className="text-sm text-gray-400">Deals Closed</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <div className="text-3xl font-bold text-yellow-400">10M+</div>
              <div className="text-sm text-gray-400">Calls Made</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <div className="text-3xl font-bold text-yellow-400">98%</div>
              <div className="text-sm text-gray-400">Client Satisfaction</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              size="lg" 
              className="bg-yellow-400 text-black hover:bg-yellow-300 font-bold text-lg px-8 py-4 rounded-full shadow-2xl hover:shadow-yellow-400/25 transition-all duration-300 hover:scale-105 group"
            >
              Start Your Success Story
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 group"
            >
              <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              Watch Demo
            </Button>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-gray-300">
            <a href="tel:+1234567890" className="flex items-center space-x-2 hover:text-yellow-400 transition-colors">
              <Phone className="w-4 h-4" />
              <span>(123) 456-7890</span>
            </a>
            <span className="hidden sm:block">•</span>
            <a href="mailto:info@reva.com" className="flex items-center space-x-2 hover:text-yellow-400 transition-colors">
              <Mail className="w-4 h-4" />
              <span>info@reva.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-yellow-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-yellow-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};