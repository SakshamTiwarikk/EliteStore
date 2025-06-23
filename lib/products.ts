export interface Product {
  id: string
  name: string
  price: number
  image: string
  description: string
  category: string
  rating: number
  inStock: boolean
}

export const products: Product[] = [
  {
    id: "1",
    name: "Wireless Bluetooth Headphones",
    price: 79.99,
    image: "/headphones.png",
    description:
      "Premium wireless headphones with noise cancellation and 30-hour battery life. Perfect for music lovers and professionals.",
    category: "Electronics",
    rating: 4.5,
    inStock: true,
  },
  {
    id: "2",
    name: "Smart Fitness Watch",
    price: 199.99,
    image: "/watch.png",
    description:
      "Advanced fitness tracking with heart rate monitoring, GPS, and smartphone integration. Track your health goals.",
    category: "Wearables",
    rating: 4.8,
    inStock: true,
  },
  {
    id: "3",
    name: "Organic Cotton T-Shirt",
    price: 29.99,
    image: "/tshirt.png",
    description: "Comfortable and sustainable organic cotton t-shirt. Available in multiple colors and sizes.",
    category: "Clothing",
    rating: 4.2,
    inStock: true,
  },
  {
    id: "4",
    name: "Stainless Steel Water Bottle",
    price: 24.99,
    image: "/waterbottle.png",
    description: "Insulated stainless steel water bottle that keeps drinks cold for 24 hours or hot for 12 hours.",
    category: "Lifestyle",
    rating: 4.6,
    inStock: false,
  },
  {
    id: "5",
    name: "Wireless Phone Charger",
    price: 39.99,
    image: "/wireless.png",
    description: "Fast wireless charging pad compatible with all Qi-enabled devices. Sleek and efficient design.",
    category: "Electronics",
    rating: 4.3,
    inStock: true,
  },
  {
    id: "6",
    name: "Leather Laptop Bag",
    price: 89.99,
    image: "/leatherbag.png",
    description: "Professional leather laptop bag with multiple compartments. Perfect for business and travel.",
    category: "Accessories",
    rating: 4.7,
    inStock: true,
  },
  {
    id: "7",
    name: "Bluetooth Speaker",
    price: 59.99,
    image: "/speaker.png",
    description:
      "Portable Bluetooth speaker with 360-degree sound and waterproof design. Great for outdoor activities.",
    category: "Electronics",
    rating: 4.4,
    inStock: true,
  },
  {
    id: "8",
    name: "Yoga Mat",
    price: 34.99,
    image: "/yogamat.png",
    description: "Non-slip yoga mat made from eco-friendly materials. Perfect for yoga, pilates, and fitness routines.",
    category: "Fitness",
    rating: 4.1,
    inStock: true,
  },
]

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id)
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((product) => product.category === category)
}
