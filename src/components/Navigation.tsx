
import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-black/90 backdrop-blur-lg border-b border-yellow-400/20" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="text-2xl font-bold text-yellow-400">
            RE<span className="text-white">VA</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-white hover:text-yellow-400 transition-colors">Services</a>
            <a href="#process" className="text-white hover:text-yellow-400 transition-colors">Process</a>
            <a href="#portfolio" className="text-white hover:text-yellow-400 transition-colors">Portfolio</a>
            <a href="#testimonials" className="text-white hover:text-yellow-400 transition-colors">Reviews</a>
            <a href="#blog" className="text-white hover:text-yellow-400 transition-colors">Blog</a>
            <div className="flex items-center space-x-4">
              <a href="tel:+1234567890" className="text-yellow-400 hover:text-white transition-colors">
                <Phone className="w-4 h-4" />
              </a>
              <a href="mailto:info@reva.com" className="text-yellow-400 hover:text-white transition-colors">
                <Mail className="w-4 h-4" />
              </a>
            </div>
            <Button className="bg-yellow-400 text-black hover:bg-yellow-300 font-semibold">
              Get Started
            </Button>
          </div>

          <button 
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-lg border-t border-yellow-400/20">
            <div className="px-4 py-6 space-y-4">
              <a href="#services" className="block text-white hover:text-yellow-400 transition-colors">Services</a>
              <a href="#process" className="block text-white hover:text-yellow-400 transition-colors">Process</a>
              <a href="#portfolio" className="block text-white hover:text-yellow-400 transition-colors">Portfolio</a>
              <a href="#testimonials" className="block text-white hover:text-yellow-400 transition-colors">Reviews</a>
              <a href="#blog" className="block text-white hover:text-yellow-400 transition-colors">Blog</a>
              <Button className="w-full bg-yellow-400 text-black hover:bg-yellow-300 font-semibold mt-4">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
