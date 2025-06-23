import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Heart, ShoppingCart, Eye, Zap } from "lucide-react"
import type { Product } from "@/lib/products"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const discountPercentage = Math.floor(Math.random() * 30) + 10 // Random discount for demo
  const originalPrice = (product.price * (1 + discountPercentage / 100)).toFixed(2)

  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 card-hover border border-gray-100">
      {/* Discount Badge */}
      {discountPercentage > 15 && (
        <div className="absolute top-4 left-4 z-10">
          <Badge className="bg-gradient-to-r from-red-500 to-pink-500 text-white font-bold px-3 py-1 text-sm">
            -{discountPercentage}%
          </Badge>
        </div>
      )}

      {/* Category Badge */}
      <div className="absolute top-4 right-4 z-10">
        <Badge variant="secondary" className="glass-effect text-gray-700 font-medium">
          {product.category}
        </Badge>
      </div>

      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Overlay Actions */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <div className="flex gap-3">
            <Button size="sm" variant="secondary" className="glass-effect hover:bg-white/90">
              <Heart className="h-4 w-4" />
            </Button>
            <Button size="sm" variant="secondary" className="glass-effect hover:bg-white/90">
              <Eye className="h-4 w-4" />
            </Button>
            <Button
              size="sm"
              variant="secondary"
              className="glass-effect hover:bg-white/90"
              disabled={!product.inStock}
            >
              <ShoppingCart className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Stock Overlay */}
        {!product.inStock && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <Badge variant="destructive" className="text-white font-bold px-4 py-2">
              Out of Stock
            </Badge>
          </div>
        )}

        {/* Trending Badge */}
        {product.rating > 4.5 && (
          <div className="absolute bottom-4 left-4">
            <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold flex items-center gap-1">
              <Zap className="h-3 w-3" />
              Trending
            </Badge>
          </div>
        )}
      </div>

      {/* Product Details */}
      <div className="p-6 space-y-4">
        {/* Rating */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                }`}
              />
            ))}
            <span className="text-sm text-gray-600 ml-2">({product.rating})</span>
          </div>
          <div className="text-xs text-gray-500">{Math.floor(Math.random() * 500) + 50} reviews</div>
        </div>

        {/* Product Name */}
        <div>
          <h3 className="font-bold text-lg text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
            {product.name}
          </h3>
        </div>

        {/* Price Section */}
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <span className="text-2xl font-bold text-green-600">${product.price}</span>
            {discountPercentage > 15 && <span className="text-lg text-gray-400 line-through">${originalPrice}</span>}
          </div>
          {discountPercentage > 15 && (
            <div className="text-sm text-green-600 font-medium">
              You save ${(Number.parseFloat(originalPrice) - product.price).toFixed(2)}
            </div>
          )}
        </div>

        {/* Action Button */}
        <Link href={`/products/${product.id}`} className="block">
          <Button
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-105"
            disabled={!product.inStock}
          >
            {product.inStock ? "View Details" : "Notify When Available"}
          </Button>
        </Link>

        {/* Quick Info */}
        <div className="flex items-center justify-between text-xs text-gray-500 pt-2 border-t border-gray-100">
          <span className="flex items-center gap-1">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            Free Shipping
          </span>
          <span>Fast Delivery</span>
        </div>
      </div>
    </div>
  )
}
