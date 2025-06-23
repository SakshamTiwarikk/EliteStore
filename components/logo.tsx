import Link from "next/link"
import { ShoppingBag, Sparkles } from "lucide-react"

interface LogoProps {
  variant?: "default" | "white" | "compact"
  className?: string
}

export function Logo({ variant = "default", className = "" }: LogoProps) {
  const isWhite = variant === "white"
  const isCompact = variant === "compact"

  return (
    <Link href="/" className={`flex items-center gap-3 group ${className}`}>
      <div className="relative">
        <div
          className={`p-2 rounded-xl transition-all duration-300 group-hover:scale-110 ${
            isWhite
              ? "bg-white/20 backdrop-blur-sm group-hover:bg-white/30"
              : "bg-gradient-to-br from-blue-600 to-purple-600 group-hover:from-blue-700 group-hover:to-purple-700"
          }`}
        >
          <ShoppingBag className={`h-6 w-6 ${isWhite ? "text-white" : "text-white"}`} />
        </div>
        <div className="absolute -top-1 -right-1">
          <Sparkles className={`h-4 w-4 ${isWhite ? "text-yellow-300" : "text-yellow-400"} animate-pulse-slow`} />
        </div>
      </div>
      {!isCompact && (
        <div className="flex flex-col">
          <span className={`text-xl font-bold tracking-tight ${isWhite ? "text-white" : "text-gray-900"}`}>
            Elite<span className="text-gradient">Store</span>
          </span>
          <span className={`text-xs font-medium tracking-wider ${isWhite ? "text-blue-200" : "text-gray-500"}`}>
            PREMIUM COLLECTION
          </span>
        </div>
      )}
    </Link>
  )
}
