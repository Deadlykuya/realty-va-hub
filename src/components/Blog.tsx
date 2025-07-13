import { Calendar, User, ArrowRight, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    id: 1,
    title: "10 Cold Calling Scripts That Convert in 2024",
    excerpt: "Discover the proven scripts our VAs use to generate $10M+ in real estate deals",
    category: "Cold Calling",
    categoryColor: "bg-red-500",
    author: "Sarah Mitchell",
    date: "Dec 15, 2024",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop",
    trending: true
  },
  {
    id: 2,
    title: "Market Analysis: Finding Hidden Gem Properties",
    excerpt: "How our acquisition team identifies undervalued properties before the competition",
    category: "Acquisitions",
    categoryColor: "bg-blue-500",
    author: "Marcus Johnson",
    date: "Dec 12, 2024",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=250&fit=crop",
    trending: false
  },
  {
    id: 3,
    title: "Disposition Strategies That Maximize ROI",
    excerpt: "Learn the advanced techniques that helped clients achieve 35% higher returns",
    category: "Disposition",
    categoryColor: "bg-green-500",
    author: "Jennifer Davis",
    date: "Dec 10, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?w=400&h=250&fit=crop",
    trending: true
  },
  {
    id: 4,
    title: "Building Your Virtual Assistant Team",
    excerpt: "A complete guide to scaling your real estate business with virtual assistants",
    category: "Business Growth",
    categoryColor: "bg-purple-500",
    author: "David Thompson",
    date: "Dec 8, 2024",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop",
    trending: false
  }
];

const categories = [
  { name: "Cold Calling", color: "bg-red-500", count: 12 },
  { name: "Acquisitions", color: "bg-blue-500", count: 8 },
  { name: "Disposition", color: "bg-green-500", count: 6 },
  { name: "Business Growth", color: "bg-purple-500", count: 10 },
  { name: "Market Insights", color: "bg-yellow-500", count: 15 }
];

export const Blog = () => {
  return (
    <section id="blog" className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"30\" height=\"30\" viewBox=\"0 0 30 30\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"M15 0L30 15L15 30L0 15L15 0Z\" fill=\"%23ffd700\" fill-opacity=\"0.02\"/%3E%3C/svg%3E')] bg-repeat"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            <span className="text-white">Industry</span> <span className="text-yellow-400">Insights</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Expert insights, proven strategies, and industry trends from real estate professionals who close deals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured Post */}
            <div className="mb-12">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden border border-gray-700 hover:border-yellow-400/50 transition-all duration-500 group cursor-pointer">
                <div className="relative h-64 md:h-80 overflow-hidden">
                  <img
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                  
                  {/* Category & Trending Badge */}
                  <div className="absolute top-6 left-6 flex items-center space-x-3">
                    <span className={`${blogPosts[0].categoryColor} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                      {blogPosts[0].category}
                    </span>
                    {blogPosts[0].trending && (
                      <div className="flex items-center space-x-1 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
                        <TrendingUp className="w-3 h-3" />
                        <span>Trending</span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">
                      {blogPosts[0].title}
                    </h3>
                    <p className="text-gray-300 mb-4 text-lg">{blogPosts[0].excerpt}</p>
                    
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{blogPosts[0].author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{blogPosts[0].date}</span>
                      </div>
                      <span>{blogPosts[0].readTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Other Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {blogPosts.slice(1).map((post) => (
                <article
                  key={post.id}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden border border-gray-700 hover:border-yellow-400/50 transition-all duration-500 group cursor-pointer hover:scale-105"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    
                    <div className="absolute top-4 left-4 flex items-center space-x-2">
                      <span className={`${post.categoryColor} text-white px-2 py-1 rounded-full text-xs font-semibold`}>
                        {post.category}
                      </span>
                      {post.trending && (
                        <div className="flex items-center space-x-1 bg-yellow-400 text-black px-2 py-1 rounded-full text-xs font-semibold">
                          <TrendingUp className="w-3 h-3" />
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3 leading-tight group-hover:text-yellow-400 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 mb-4 text-sm">{post.excerpt}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3 text-xs text-gray-400">
                        <span>{post.author}</span>
                        <span>•</span>
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                      
                      <ArrowRight className="w-4 h-4 text-yellow-400 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Categories */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Categories</h3>
              <div className="space-y-3">
                {categories.map((category, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-700/50 transition-colors cursor-pointer group"
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${category.color}`}></div>
                      <span className="text-gray-300 group-hover:text-white transition-colors">
                        {category.name}
                      </span>
                    </div>
                    <span className="text-gray-500 text-sm">{category.count}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gradient-to-br from-yellow-400/10 to-yellow-400/5 rounded-2xl p-6 border border-yellow-400/20">
              <h3 className="text-xl font-bold text-white mb-3">Stay Updated</h3>
              <p className="text-gray-300 mb-6 text-sm">
                Get weekly insights on real estate investing, VA strategies, and market trends.
              </p>
              
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors"
                />
                <Button className="w-full bg-yellow-400 text-black hover:bg-yellow-300 font-semibold">
                  Subscribe
                </Button>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Follow Us</h3>
              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" size="sm" className="border-gray-600 text-gray-400 hover:text-white hover:border-yellow-400">
                  LinkedIn
                </Button>
                <Button variant="outline" size="sm" className="border-gray-600 text-gray-400 hover:text-white hover:border-yellow-400">
                  Twitter
                </Button>
                <Button variant="outline" size="sm" className="border-gray-600 text-gray-400 hover:text-white hover:border-yellow-400">
                  YouTube
                </Button>
                <Button variant="outline" size="sm" className="border-gray-600 text-gray-400 hover:text-white hover:border-yellow-400">
                  Instagram
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
