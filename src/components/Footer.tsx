import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-t from-black to-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/2 to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-2">
            <div className="text-3xl font-bold text-yellow-400 mb-4">
              RE<span className="text-white">VA</span>
            </div>
            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
              The premier virtual assistant agency for real estate professionals. 
              We specialize in cold calling, property acquisitions, and dispositions 
              to help you scale your business and maximize profits.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-yellow-400" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-yellow-400" />
                <span className="text-gray-300">info@reva.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-yellow-400" />
                <span className="text-gray-300">123 Business Ave, New York, NY 10001</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Services</h3>
            <ul className="space-y-3">
              <li><a href="#services" className="text-gray-300 hover:text-yellow-400 transition-colors">Cold Calling</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-yellow-400 transition-colors">Property Acquisitions</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-yellow-400 transition-colors">Property Disposition</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-yellow-400 transition-colors">Client Relations</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-yellow-400 transition-colors">Market Analysis</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-300 hover:text-yellow-400 transition-colors">About Us</a></li>
              <li><a href="#process" className="text-gray-300 hover:text-yellow-400 transition-colors">Our Process</a></li>
              <li><a href="#portfolio" className="text-gray-300 hover:text-yellow-400 transition-colors">Portfolio</a></li>
              <li><a href="#testimonials" className="text-gray-300 hover:text-yellow-400 transition-colors">Testimonials</a></li>
              <li><a href="#blog" className="text-gray-300 hover:text-yellow-400 transition-colors">Blog</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-yellow-400 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="py-12 border-t border-gray-800">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-6">
              Get weekly insights on real estate trends, VA strategies, and industry best practices.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors"
              />
              <Button className="bg-yellow-400 text-black hover:bg-yellow-300 font-semibold px-8">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Social Media & Bottom Bar */}
        <div className="py-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Social Links */}
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <span className="text-gray-400">Follow us:</span>
              <div className="flex space-x-3">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-gray-400 hover:text-yellow-400 transition-colors"
            >
              <span>Back to top</span>
              <ChevronUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="py-6 border-t border-gray-800 text-center">
          <div className="flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm">
            <p>&copy; 2024 REVA - Real Estate Virtual Assistants. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-yellow-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-yellow-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-yellow-400 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};