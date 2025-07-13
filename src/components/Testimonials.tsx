import { useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Sarah Johnson",
    title: "Real Estate Investor",
    company: "Johnson Properties",
    rating: 5,
    text: "REVA completely transformed our acquisition process. Their cold calling team generated over $3M in deals in just 8 months. The ROI is incredible!",
    avatar: "SJ",
    deals: "$3.2M",
    properties: "47"
  },
  {
    name: "Marcus Rivera",
    title: "Broker",
    company: "Rivera Realty Group",
    rating: 5,
    text: "Professional, reliable, and results-driven. Their virtual assistants feel like part of our in-house team. Client satisfaction has never been higher.",
    avatar: "MR",
    deals: "$1.8M",
    properties: "32"
  },
  {
    name: "Jennifer Chen",
    title: "Property Developer",
    company: "Chen Development Co.",
    rating: 5,
    text: "The disposition services are outstanding. They helped us sell 25 properties 30% faster than our previous methods. Highly recommended!",
    avatar: "JC",
    deals: "$5.1M",
    properties: "68"
  },
  {
    name: "David Thompson",
    title: "Real Estate Agent",
    company: "Thompson & Associates",
    rating: 5,
    text: "Their cold calling expertise is unmatched. We went from 10 leads per month to 150+ qualified prospects. Game changer for our business!",
    avatar: "DT",
    deals: "$2.7M",
    properties: "41"
  }
];

export const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%23ffd700\" fill-opacity=\"0.03\"%3E%3Cpath d=\"M20 20c0 11.046-8.954 20-20 20s-20-8.954-20-20 8.954-20 20-20 20 8.954 20 20zM0 20c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20S0 8.954 0 20z\"/%3E%3C/g%3E%3C/svg%3E')]"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            <span className="text-white">Client</span> <span className="text-yellow-400">Success</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real stories from real estate professionals who transformed their business with our virtual assistant services.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 md:p-12 border border-gray-700 relative overflow-hidden">
            {/* Quote Icon */}
            <div className="absolute top-6 right-6 opacity-20">
              <Quote className="w-20 h-20 text-yellow-400" />
            </div>

            <div className="relative z-10">
              {/* Rating */}
              <div className="flex items-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-2xl md:text-3xl text-white font-medium leading-relaxed mb-8">
                "{testimonials[currentTestimonial].text}"
              </blockquote>

              {/* Client Info */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
                    <span className="text-black font-bold text-lg">
                      {testimonials[currentTestimonial].avatar}
                    </span>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-white">
                      {testimonials[currentTestimonial].name}
                    </div>
                    <div className="text-yellow-400">
                      {testimonials[currentTestimonial].title}
                    </div>
                    <div className="text-gray-400">
                      {testimonials[currentTestimonial].company}
                    </div>
                  </div>
                </div>

                {/* Results */}
                <div className="hidden md:flex space-x-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-400">
                      {testimonials[currentTestimonial].deals}
                    </div>
                    <div className="text-sm text-gray-400">Total Deals</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-400">
                      {testimonials[currentTestimonial].properties}
                    </div>
                    <div className="text-sm text-gray-400">Properties</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8">
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial 
                        ? "bg-yellow-400 w-8" 
                        : "bg-gray-600 hover:bg-gray-500"
                    }`}
                    onClick={() => {
                      setCurrentTestimonial(index);
                      setIsAutoPlaying(false);
                    }}
                  />
                ))}
              </div>

              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-gray-600 text-gray-400 hover:text-white hover:border-yellow-400"
                  onClick={prevTestimonial}
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-gray-600 text-gray-400 hover:text-white hover:border-yellow-400"
                  onClick={nextTestimonial}
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* All Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border transition-all duration-300 cursor-pointer ${
                index === currentTestimonial
                  ? "border-yellow-400 shadow-lg shadow-yellow-400/20"
                  : "border-gray-700 hover:border-gray-600"
              }`}
              onClick={() => {
                setCurrentTestimonial(index);
                setIsAutoPlaying(false);
              }}
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-black font-bold">{testimonial.avatar}</span>
                </div>
                <div>
                  <div className="font-semibold text-white text-sm">{testimonial.name}</div>
                  <div className="text-yellow-400 text-xs">{testimonial.company}</div>
                </div>
              </div>

              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-300 text-sm line-clamp-3">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};