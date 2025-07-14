import { useState } from "react";
import { ExternalLink, TrendingUp, Home, DollarSign, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const portfolioItems = [
  {
    id: 1,
    title: "Luxury Residential Portfolio",
    category: "Acquisitions",
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=500&h=300&fit=crop",
    value: "$8.5M",
    properties: 45,
    duration: "6 months",
    roi: "28%",
    description: "Complete acquisition campaign for luxury residential properties in prime locations",
    highlights: ["Premium market targeting", "High-value negotiations", "Rapid closing process"]
  },
  {
    id: 2,
    title: "Commercial Real Estate Campaign",
    category: "Cold Calling",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=500&h=300&fit=crop",
    value: "$12.3M",
    properties: 23,
    duration: "8 months",
    roi: "35%",
    description: "Systematic cold calling campaign targeting commercial property owners",
    highlights: ["5000+ qualified calls", "150+ appointments set", "23 successful acquisitions"]
  },
  {
    id: 3,
    title: "Multi-Family Development",
    category: "Disposition",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=500&h=300&fit=crop",
    value: "$6.7M",
    properties: 34,
    duration: "4 months",
    roi: "22%",
    description: "Strategic disposition of multi-family properties with optimized pricing",
    highlights: ["Market analysis", "Buyer network activation", "Price optimization"]
  },
  {
    id: 4,
    title: "Investment Property Network",
    category: "Full Service",
    image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=500&h=300&fit=crop",
    value: "$15.2M",
    properties: 78,
    duration: "12 months",
    roi: "31%",
    description: "End-to-end service for building investment property portfolio",
    highlights: ["Acquisition to disposition", "Portfolio management", "Investor relations"]
  }
];

const categories = ["All", "Acquisitions", "Cold Calling", "Disposition", "Full Service"];

export const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const filteredItems = selectedCategory === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/2 to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            <span className="text-white">Success</span> <span className="text-yellow-400">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real results from real campaigns. See how we've helped clients achieve exceptional returns.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-yellow-400 text-black"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white border border-gray-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden border border-gray-700 hover:border-yellow-400/50 transition-all duration-500 cursor-pointer"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
                  {item.category}
                </div>

                {/* Quick Stats - Show on Hover */}
                <div className={`absolute top-4 right-4 transition-all duration-300 ${
                  hoveredItem === item.id ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                }`}>
                  <div className="bg-black/80 backdrop-blur-sm rounded-lg p-3 space-y-1">
                    <div className="flex items-center space-x-2 text-white text-sm">
                      <DollarSign className="w-4 h-4 text-yellow-400" />
                      <span>{item.value}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-white text-sm">
                      <Home className="w-4 h-4 text-yellow-400" />
                      <span>{item.properties} Properties</span>
                    </div>
                    <div className="flex items-center space-x-2 text-white text-sm">
                      <TrendingUp className="w-4 h-4 text-yellow-400" />
                      <span>{item.roi} ROI</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-300 mb-6">{item.description}</p>

                {/* Key Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-xl font-bold text-yellow-400">{item.value}</div>
                    <div className="text-xs text-gray-400">Total Value</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-yellow-400">{item.properties}</div>
                    <div className="text-xs text-gray-400">Properties</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-yellow-400">{item.roi}</div>
                    <div className="text-xs text-gray-400">ROI</div>
                  </div>
                </div>

                {/* Highlights - Show on Hover */}
                <div className={`overflow-hidden transition-all duration-500 ${
                  hoveredItem === item.id ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}>
                  <div className="space-y-2 mb-6">
                    {item.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                        <span className="text-sm text-gray-300">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Duration & CTA */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-gray-400">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{item.duration}</span>
                  </div>
                  
                  <Button 
                    size="sm" 
                    className="bg-transparent border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all duration-300 group-hover:scale-105"
                  >
                    View Details
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Button 
            size="lg" 
            className="bg-yellow-400 text-black hover:bg-yellow-300 font-bold text-lg px-8 py-4 rounded-full shadow-2xl hover:shadow-yellow-400/25 transition-all duration-300 hover:scale-105"
          >
            Start Your Success Story
          </Button>
        </div>
      </div>
    </section>
  );
};