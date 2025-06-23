// app/products/[id]/page.tsx
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  Star,
  ShoppingCart,
  Heart,
  Share2,
  Shield,
  Truck,
  RefreshCw,
  Award,
  Minus,
  Plus,
} from "lucide-react";
import { getProductById, products } from "@/lib/products";

interface ProductDetailPageProps {
  params: {
    id: string;
  };
}

export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  const product = getProductById(params.id);

  if (!product) {
    notFound();
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const discountPercentage = Math.floor(Math.random() * 30) + 10;
  const originalPrice = (
    product.price *
    (1 + discountPercentage / 100)
  ).toFixed(2);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-8">
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>
          <span>/</span>
          <Link href="/products" className="hover:text-blue-600">
            Products
          </Link>
          <span>/</span>
          <span className="text-gray-900 font-medium">{product.name}</span>
        </div>

        {/* Back Button */}
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-8 transition-colors bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded-xl"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Products
        </Link>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Product Images */}
            <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 p-8">
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-white shadow-lg">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover"
                />

                {/* Badges */}
                <div className="absolute top-4 left-4 space-y-2">
                  {discountPercentage > 15 && (
                    <Badge className="bg-gradient-to-r from-red-500 to-pink-500 text-white font-bold">
                      -{discountPercentage}% OFF
                    </Badge>
                  )}
                  {product.rating > 4.5 && (
                    <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold">
                      ⭐ Bestseller
                    </Badge>
                  )}
                </div>

                {!product.inStock && (
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                    <Badge
                      variant="destructive"
                      className="text-white font-bold text-lg px-6 py-3"
                    >
                      Out of Stock
                    </Badge>
                  </div>
                )}
              </div>

              {/* Thumbnail Gallery */}
              <div className="flex gap-3 mt-6 justify-center">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="w-16 h-16 rounded-lg overflow-hidden bg-white shadow-md border-2 border-transparent hover:border-blue-500 cursor-pointer transition-all"
                  >
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={`${product.name} view ${i + 1}`}
                      width={64}
                      height={64}
                      className="object-cover w-full h-full"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div className="p-8 lg:p-12 space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Badge
                    variant="secondary"
                    className="bg-blue-100 text-blue-800 font-medium"
                  >
                    {product.category}
                  </Badge>
                  <div className="flex items-center gap-1">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="p-2 hover:bg-red-50 hover:text-red-600"
                    >
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="p-2 hover:bg-blue-50 hover:text-blue-600"
                    >
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                  {product.name}
                </h1>

                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(product.rating)
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                    <span className="font-semibold ml-2">{product.rating}</span>
                  </div>
                  <span className="text-gray-500">•</span>
                  <span className="text-gray-600">
                    {Math.floor(Math.random() * 500) + 50} reviews
                  </span>
                  <span className="text-gray-500">•</span>
                  <span className="text-green-600 font-medium">
                    {Math.floor(Math.random() * 100) + 20} sold today
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-4">
                  <span className="text-4xl font-bold text-green-600">
                    ${product.price}
                  </span>
                  {discountPercentage > 15 && (
                    <span className="text-2xl text-gray-400 line-through">
                      ${originalPrice}
                    </span>
                  )}
                </div>
                {discountPercentage > 15 && (
                  <div className="text-green-600 font-semibold">
                    You save $
                    {(Number.parseFloat(originalPrice) - product.price).toFixed(
                      2
                    )}{" "}
                    ({discountPercentage}% off)
                  </div>
                )}
              </div>

              <div className="space-y-3">
                <h3 className="font-bold text-lg">Description</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {product.description}
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold">Quantity</h3>
                <div className="flex items-center gap-3">
                  <div className="flex items-center border border-gray-300 rounded-xl">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="p-3 hover:bg-gray-50"
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="px-4 py-2 font-semibold">1</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="p-3 hover:bg-gray-50"
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  <span className="text-gray-600">
                    {product.inStock ? "In stock" : "Out of stock"}
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <Button
                  size="lg"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 rounded-xl text-lg transition-all transform hover:scale-105"
                  disabled={!product.inStock}
                >
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  {product.inStock ? "Add to Cart" : "Notify When Available"}
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="w-full border-2 border-gray-300 hover:border-blue-500 hover:text-blue-600 font-semibold py-4 rounded-xl text-lg"
                >
                  Buy Now
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Shield className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Secure Payment</div>
                    <div className="text-xs text-gray-500">SSL encrypted</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Truck className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Free Shipping</div>
                    <div className="text-xs text-gray-500">Orders over $50</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <RefreshCw className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Easy Returns</div>
                    <div className="text-xs text-gray-500">30-day policy</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-yellow-100 rounded-lg">
                    <Award className="h-5 w-5 text-yellow-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Warranty</div>
                    <div className="text-xs text-gray-500">1 year included</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                You Might Also Like
              </h2>
              <p className="text-gray-600">
                Similar products in the same category
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  href={`/products/${relatedProduct.id}`}
                >
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 card-hover">
                    <div className="relative aspect-square">
                      <Image
                        src={relatedProduct.image || "/placeholder.svg"}
                        alt={relatedProduct.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 line-clamp-2 mb-2">
                        {relatedProduct.name}
                      </h3>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold text-green-600">
                          ${relatedProduct.price}
                        </span>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm text-gray-600">
                            {relatedProduct.rating}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
