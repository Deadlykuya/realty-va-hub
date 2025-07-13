import { useState } from "react";
import { Phone, Home, TrendingUp, Users, ChevronRight, Star, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Phone,
    title: "Cold Calling Mastery",
    description: "Professional cold calling that converts prospects into deals",
    features: ["Lead qualification", "Appointment setting", "Follow-up sequences", "CRM integration"],
    metrics: { calls: "2000+", conversion: "15%", deals: "50+" },
    caseStudy: "Generated $2.3M in deals for Johnson Real Estate Group in just 6 months"
  },
  {
    icon: Home,
    title: "Property Acquisitions",
    description: "End-to-end acquisition support from lead to closing",
    features: ["Market analysis", "Deal evaluation", "Negotiation support", "Documentation"],
    metrics: { properties: "300+", roi: "25%", time: "30 days" },
    caseStudy: "Helped acquire 45 properties worth $8.5M for Premier Investments LLC"
  },
  {
    icon: TrendingUp,
    title: "Property Disposition",
    description: "Strategic disposition services to maximize your returns",
    features: ["Market positioning", "Buyer outreach", "Price optimization", "Closing coordination"],
    metrics: { sold: "250+", profit: "18%", speed: "21 days" },
    caseStudy: "Increased client profits by 23% through strategic disposition planning"
  },
  {
    icon: Users,
    title: "Client Relations",
    description: "Comprehensive client management and relationship building",
    features: ["Client onboarding", "Regular updates", "Satisfaction tracking", "Retention programs"],
    metrics: { clients: "150+", satisfaction: "98%", retention: "94%" },
    caseStudy: "Achieved 98% client satisfaction rate with 24/7 dedicated support"
  }
];

export const Services = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width=\"100\" height=\"100\" viewBox=\"0 0 100 100\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"M50 50L25 25L50 0L75 25L50 50Z\" fill=\"%23ffd700\" fill-opacity=\"0.02\"/%3E%3C/svg%3E')] bg-repeat"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-yellow-400/20 border border-yellow-400/30 rounded-full px-4 py-2 mb-6">
            <Star className="w-4 h-4 text-yellow-400" />
            <span className="text-yellow-400 text-sm font-medium">Premium Services</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            <span className="text-white">Our</span> <span className="text-yellow-400">Expertise</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Full-service virtual assistant solutions designed specifically for real estate professionals who demand excellence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700 hover:border-yellow-400/50 transition-all duration-500 cursor-pointer overflow-hidden"
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
            >
              {/* Hover Background Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-yellow-400/10 transition-opacity duration-500 ${
                hoveredService === index ? "opacity-100" : "opacity-0"
              }`}></div>

              <div className="relative z-10">
                {/* Service Icon & Title */}
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-yellow-400/20 rounded-2xl flex items-center justify-center mr-4 group-hover:bg-yellow-400/30 transition-colors">
                    <service.icon className="w-8 h-8 text-yellow-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-6 text-lg">{service.description}</p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Metrics - Show on Hover */}
                <div className={`transition-all duration-500 overflow-hidden ${
                  hoveredService === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}>
                  <div className="bg-black/50 rounded-xl p-4 mb-4">
                    <h4 className="text-yellow-400 font-semibold mb-2">Key Metrics</h4>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      {Object.entries(service.metrics).map(([key, value]) => (
                        <div key={key}>
                          <div className="text-lg font-bold text-white">{value}</div>
                          <div className="text-xs text-gray-400 capitalize">{key}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Case Study */}
                  <div className="bg-yellow-400/10 rounded-xl p-4 border border-yellow-400/20">
                    <h4 className="text-yellow-400 font-semibold mb-2">Success Story</h4>
                    <p className="text-sm text-gray-300">{service.caseStudy}</p>
                  </div>
                </div>

                {/* CTA */}
                <Button 
                  className="w-full bg-transparent border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all duration-300 group-hover:scale-105"
                >
                  Learn More
                  <ChevronRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-yellow-400 text-black hover:bg-yellow-300 font-bold text-lg px-8 py-4 rounded-full shadow-2xl hover:shadow-yellow-400/25 transition-all duration-300 hover:scale-105"
          >
            Get Custom Service Package
          </Button>
        </div>
      </div>
    </section>
  );
};