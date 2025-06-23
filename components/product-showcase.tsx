import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, ArrowRight, Zap, Crown, Heart } from "lucide-react"
import { products } from "@/lib/products"

export function ProductShowcase() {
  const featuredProduct = products[0]
  const trendingProducts = products.slice(1, 4)
  const newArrivals = products.slice(4, 7)

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium px-4 py-2 rounded-full mb-4">
            <Crown className="h-4 w-4 mr-2" />
            Premium Collection
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Discover Our <span className="text-gradient">Bestsellers</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Handpicked products that our customers love most. Quality, style, and value in every item.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Featured Product */}
          <div className="lg:col-span-2">
            <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 group">
              <div className="absolute top-6 left-6 z-10">
                <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold px-4 py-2">
                  <Zap className="h-4 w-4 mr-1" />
                  Featured
                </Badge>
              </div>
              <div className="absolute top-6 right-6 z-10">
                <Button variant="ghost" size="sm" className="bg-white/80 backdrop-blur-sm hover:bg-white">
                  <Heart className="h-4 w-4" />
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative aspect-square">
                  <Image
                    src={featuredProduct.image || "/placeholder.svg"}
                    alt={featuredProduct.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center space-y-6">
                  <div>
                    <Badge variant="secondary" className="mb-3">
                      {featuredProduct.category}
                    </Badge>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{featuredProduct.name}</h3>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(featuredProduct.rating)
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">({featuredProduct.rating})</span>
                      <span className="text-sm text-gray-500">• 1.2k reviews</span>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-6">{featuredProduct.description}</p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl font-bold text-green-600">${featuredProduct.price}</span>
                      <span className="text-lg text-gray-400 line-through">
                        ${(featuredProduct.price * 1.3).toFixed(2)}
                      </span>
                      <Badge className="bg-red-100 text-red-800">Save 23%</Badge>
                    </div>
                    <Link href={`/products/${featuredProduct.id}`}>
                      <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 rounded-xl transition-all transform hover:scale-105">
                        Shop Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trending Products */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-6">
              <Zap className="h-5 w-5 text-orange-500" />
              <h3 className="text-xl font-bold text-gray-900">Trending Now</h3>
            </div>
            {trendingProducts.map((product, index) => (
              <Link key={product.id} href={`/products/${product.id}`}>
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-4 border border-gray-100 group card-hover">
                  <div className="flex gap-4">
                    <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-gray-900 line-clamp-2 mb-1 group-hover:text-blue-600 transition-colors">
                        {product.name}
                      </h4>
                      <div className="flex items-center gap-1 mb-2">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        <span className="text-xs text-gray-600">{product.rating}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-green-600">${product.price}</span>
                        <Badge className="bg-orange-100 text-orange-800 text-xs">#{index + 1}</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* New Arrivals */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">New Arrivals</h3>
              <p className="text-gray-600">Fresh products just added to our collection</p>
            </div>
            <Link href="/products?filter=new">
              <Button variant="outline" className="hover:bg-blue-50 hover:border-blue-500 hover:text-blue-600">
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {newArrivals.map((product) => (
              <Link key={product.id} href={`/products/${product.id}`}>
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group card-hover">
                  <div className="relative aspect-square">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-green-500 text-white font-bold">New</Badge>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="font-semibold text-gray-900 line-clamp-2 mb-2 group-hover:text-blue-600 transition-colors">
                      {product.name}
                    </h4>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-green-600">${product.price}</span>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm text-gray-600">{product.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
