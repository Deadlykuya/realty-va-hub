import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent Successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: ""
      });
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/3 to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            <span className="text-white">Let's</span> <span className="text-yellow-400">Connect</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to transform your real estate business? Get in touch and let's discuss how our virtual assistant services can accelerate your success.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-6">Get Started Today</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors"
                    placeholder="(555) 123-4567"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors"
                    placeholder="Your Company"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Service Interest *
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-xl text-white focus:outline-none focus:border-yellow-400 transition-colors"
                >
                  <option value="">Select a service</option>
                  <option value="cold-calling">Cold Calling</option>
                  <option value="acquisitions">Property Acquisitions</option>
                  <option value="disposition">Property Disposition</option>
                  <option value="full-service">Full Service Package</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors resize-none"
                  placeholder="Tell us about your real estate goals and how we can help..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-yellow-400 text-black hover:bg-yellow-300 font-bold text-lg py-4 rounded-xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:scale-100"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center space-x-2">
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </div>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-yellow-400/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Phone</h4>
                    <p className="text-gray-300">+1 (555) 123-4567</p>
                    <p className="text-gray-400 text-sm">Mon-Fri, 8AM-8PM EST</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-yellow-400/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Email</h4>
                    <p className="text-gray-300">info@reva.com</p>
                    <p className="text-gray-400 text-sm">We respond within 2 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-yellow-400/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Location</h4>
                    <p className="text-gray-300">123 Business Ave</p>
                    <p className="text-gray-300">New York, NY 10001</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-yellow-400/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Business Hours</h4>
                    <p className="text-gray-300">Monday - Friday: 8AM - 8PM</p>
                    <p className="text-gray-300">Saturday: 9AM - 5PM</p>
                    <p className="text-gray-300">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Guarantee */}
            <div className="bg-gradient-to-br from-yellow-400/10 to-yellow-400/5 rounded-3xl p-8 border border-yellow-400/20">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Our Guarantee</h3>
                  <p className="text-gray-300">
                    We're so confident in our services that we offer a 30-day money-back guarantee. 
                    If you're not completely satisfied with our virtual assistant services, we'll refund your investment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};