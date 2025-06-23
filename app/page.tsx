import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ProductShowcase } from "@/components/product-showcase"
import { ArrowRight, Star, Shield, Truck, RefreshCw, Award, Heart, Zap, Crown, Users, TrendingUp } from "lucide-react"

export default function HomePage() {
  const stats = [
    { icon: Users, value: "50K+", label: "Happy Customers", color: "text-blue-600" },
    { icon: Star, value: "4.9", label: "Average Rating", color: "text-yellow-500" },
    { icon: Crown, value: "100+", label: "Premium Brands", color: "text-purple-600" },
    { icon: TrendingUp, value: "99%", label: "Satisfaction Rate", color: "text-green-600" },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Fashion Enthusiast",
      content:
        "EliteStore has completely transformed my shopping experience. The quality is unmatched and the customer service is exceptional!",
      rating: 5,
      avatar: "/w.png",
      verified: true,
    },
    {
      name: "Michael Chen",
      role: "Tech Professional",
      content:
        "I've been shopping here for over a year. The product selection is amazing and delivery is always on time. Highly recommended!",
      rating: 5,
      avatar: "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?semt=ais_hybrid&w=740",
      verified: true,
    },
    {
      name: "Emily Rodriguez",
      role: "Interior Designer",
      content:
        "The attention to detail and quality of products is outstanding. EliteStore is now my go-to for all premium purchases.",
      rating: 5,
      avatar: "https://imageio.forbes.com/specials-images/imageserve/5f6a779460548326baf6d730//960x0.jpg?format=jpg&width=960",
      verified: true,
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 animate-gradient min-h-[90vh] flex items-center">
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 animate-float">
            <div className="w-32 h-32 bg-white/10 rounded-full backdrop-blur-sm"></div>
          </div>
          <div className="absolute bottom-20 right-10 animate-float" style={{ animationDelay: "2s" }}>
            <div className="w-24 h-24 bg-white/10 rounded-full backdrop-blur-sm"></div>
          </div>
          <div className="absolute top-1/2 right-1/4 animate-float" style={{ animationDelay: "4s" }}>
            <div className="w-16 h-16 bg-white/10 rounded-full backdrop-blur-sm"></div>
          </div>
          <div className="absolute bottom-1/3 left-1/4 animate-float" style={{ animationDelay: "1s" }}>
            <div className="w-20 h-20 bg-white/10 rounded-full backdrop-blur-sm"></div>
          </div>
        </div>

        <div className="relative container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 text-sm font-medium">
                  <Crown className="h-4 w-4 text-yellow-400" />
                  Premium Collection 2024
                </div>

                <h1 className="text-5xl lg:text-7xl font-bold leading-tight font-poppins">
                  Elevate Your
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 animate-gradient">
                    Lifestyle
                  </span>
                  <span className="block">with Premium</span>
                </h1>

                <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed max-w-2xl">
                  Discover our curated collection of premium products designed for those who appreciate quality, style,
                  and innovation. Every item tells a story of excellence.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/products">
                  <Button
                    size="lg"
                    className="bg-white text-blue-600 hover:bg-gray-100 font-bold px-8 py-4 rounded-2xl text-lg transition-all transform hover:scale-105 shadow-2xl"
                  >
                    <Zap className="mr-2 h-5 w-5" />
                    Shop Collection
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold px-8 py-4 rounded-2xl text-lg backdrop-blur-sm transition-all"
                >
                  <Heart className="mr-2 h-5 w-5" />
                  View Wishlist
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-6 pt-8">
                <div className="flex items-center gap-2 text-blue-200">
                  <Shield className="h-5 w-5" />
                  <span className="text-sm font-medium">Secure Shopping</span>
                </div>
                <div className="flex items-center gap-2 text-blue-200">
                  <Truck className="h-5 w-5" />
                  <span className="text-sm font-medium">Free Shipping</span>
                </div>
                <div className="flex items-center gap-2 text-blue-200">
                  <Award className="h-5 w-5" />
                  <span className="text-sm font-medium">Premium Quality</span>
                </div>
              </div>
            </div>

            {/* Hero Image/Product Showcase */}
            <div className="relative">
              <div className="relative z-10">
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-4">
                      <div className="aspect-square rounded-2xl overflow-hidden bg-white/20 backdrop-blur-sm">
                        <Image
                          src="/tshirt.png"
                          alt="Premium Product 1"
                          width={200}
                          height={200}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="aspect-square rounded-2xl overflow-hidden bg-white/20 backdrop-blur-sm">
                        <Image
                          src="/laptop.png"
                          alt="Premium Product 2"
                          width={200}
                          height={200}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-white/20 backdrop-blur-sm w-full">
                        <Image
                          src="/watch1.png"
                          alt="Featured Product"
                          width={225}
                          height={300}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-12 border-t border-white/20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center text-white">
                <div className="flex justify-center mb-3">
                  <div className="p-3 bg-white/20 backdrop-blur-sm rounded-2xl">
                    <stat.icon className={`h-6 w-6 ${stat.color.replace("text-", "text-white")}`} />
                  </div>
                </div>
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-blue-200 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <ProductShowcase />

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 font-medium px-4 py-2 rounded-full mb-4">
              Why Choose EliteStore
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-poppins">
              Unmatched <span className="text-gradient">Shopping Experience</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're committed to providing you with the finest products and exceptional service that exceeds your
              expectations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "Premium Quality",
                description:
                  "Every product is carefully curated and tested to meet our highest standards of excellence",
                color: "green",
                gradient: "from-green-500 to-emerald-500",
              },
              {
                icon: Truck,
                title: "Lightning Fast Delivery",
                description: "Express shipping worldwide with real-time tracking and white-glove delivery service",
                color: "blue",
                gradient: "from-blue-500 to-cyan-500",
              },
              {
                icon: RefreshCw,
                title: "Hassle-Free Returns",
                description: "30-day return policy with free return shipping and instant refunds guaranteed",
                color: "purple",
                gradient: "from-purple-500 to-violet-500",
              },
              {
                icon: Award,
                title: "Award-Winning Service",
                description: "Recognized globally for outstanding customer service and product innovation",
                color: "yellow",
                gradient: "from-yellow-500 to-orange-500",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group text-center p-8 rounded-3xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:shadow-2xl transition-all duration-500 card-hover"
              >
                <div
                  className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-purple-100 text-purple-800 font-medium px-4 py-2 rounded-full mb-4">
              Customer Stories
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-poppins">
              Loved by <span className="text-gradient">Thousands</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our community of satisfied customers who have discovered the EliteStore difference
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 card-hover relative"
              >
                {testimonial.verified && (
                  <div className="absolute -top-3 -right-3">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white p-2 rounded-full">
                      <Shield className="h-4 w-4" />
                    </div>
                  </div>
                )}

                <div className="flex items-center gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <blockquote className="text-gray-700 mb-6 leading-relaxed text-lg italic">
                  "{testimonial.content}"
                </blockquote>

                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden bg-gradient-to-r from-blue-500 to-purple-500 p-0.5">
                    <div className="w-full h-full rounded-full overflow-hidden bg-white">
                      <Image
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={26}
                        height={26}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 flex items-center gap-2">
                      {testimonial.name}
                      {testimonial.verified && <Badge className="bg-green-100 text-green-800 text-xs">Verified</Badge>}
                    </div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
          <div
            className="absolute bottom-10 right-10 w-16 h-16 bg-white/10 rounded-full animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/3 w-12 h-12 bg-white/10 rounded-full animate-float"
            style={{ animationDelay: "4s" }}
          ></div>
        </div>

        <div className="container mx-auto px-4 text-center relative">
          <div className="max-w-4xl mx-auto text-white space-y-8">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 text-sm font-medium mb-4">
              <Zap className="h-4 w-4 text-yellow-400" />
              Limited Time Offer
            </div>

            <h2 className="text-4xl lg:text-6xl font-bold font-poppins">
              Ready to Experience
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                Premium Shopping?
              </span>
            </h2>

            <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
              Join thousands of satisfied customers and discover why EliteStore is the premier destination for quality
              products and exceptional service.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <Link href="/products">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100 font-bold px-10 py-5 rounded-2xl text-xl transition-all transform hover:scale-105 shadow-2xl"
                >
                  <Crown className="mr-2 h-6 w-6" />
                  Shop Premium Collection
                  <ArrowRight className="ml-2 h-6 w-6" />
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold px-10 py-5 rounded-2xl text-xl backdrop-blur-sm transition-all"
              >
                <Heart className="mr-2 h-6 w-6" />
                Create Wishlist
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-8 pt-12 text-blue-200">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                <span className="font-medium">Secure & Safe</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="h-5 w-5" />
                <span className="font-medium">Free Worldwide Shipping</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5" />
                <span className="font-medium">Premium Quality Guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
