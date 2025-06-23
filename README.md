# Product Listing App - Cloudflex Frontend Assignment

A modern, responsive product listing interface built with Next.js, React, and Tailwind CSS.

## 🚀 Features

### Core Requirements ✅
- **Product Listing Page** (`/products`) - Displays products in a responsive grid
- **Product Cards** - Each card includes name, price, image, and "View Details" button
- **Responsive Design** - Grid layout on desktop/tablet, stacked cards on mobile
- **Local Data** - Uses JavaScript array for product data (no API required)
- **Tailwind CSS** - Utility-first CSS framework for styling

### Bonus Features ✅
- **Dynamic Routing** - Individual product detail pages (`/products/[id]`)
- **Hover Effects** - Smooth transitions and interactive elements
- **Component Structure** - Clean, reusable components (ProductCard, ProductGrid, etc.)
- **Enhanced UI** - Product categories, ratings, stock status, and more

## 🛠️ Tech Stack

- **Next.js 14** - React framework with App Router
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **shadcn/ui** - UI components

## 📦 Installation & Setup

1. **Clone the repository**
   \`\`\`bash
   git clone <repository-url>
   cd product-listing-app
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   \`\`\`

3. **Run the development server**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   \`\`\`

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

\`\`\`
├── app/
│   ├── products/
│   │   ├── [id]/
│   │   │   ├── page.tsx          # Individual product detail page
│   │   │   └── not-found.tsx     # 404 page for invalid products
│   │   └── page.tsx              # Main products listing page
│   ├── layout.tsx                # Root layout with navigation
│   ├── page.tsx                  # Home page
│   └── globals.css               # Global styles
├── components/
│   ├── product-card.tsx          # Individual product card component
│   ├── product-grid.tsx          # Products grid container
│   └── ui/                       # shadcn/ui components
├── lib/
│   └── products.ts               # Product data and utilities
└── README.md
\`\`\`

## 🎨 Design Features

- **Responsive Grid**: 1 column on mobile, 2 on tablet, 3-4 on desktop
- **Hover Effects**: Cards lift and images scale on hover
- **Status Indicators**: Visual indicators for stock status
- **Category Badges**: Color-coded product categories
- **Rating System**: Star ratings for each product
- **Smooth Transitions**: CSS transitions for better UX

## 📱 Responsive Breakpoints

- **Mobile**: `< 640px` - Single column layout
- **Tablet**: `640px - 1024px` - 2 column grid
- **Desktop**: `1024px - 1280px` - 3 column grid
- **Large Desktop**: `> 1280px` - 4 column grid

## 🔗 Routes

- `/` - Home page with welcome message and features
- `/products` - Main product listing page
- `/products/[id]` - Individual product detail page
- `/products/[id]/not-found` - 404 page for invalid product IDs

## 📊 Sample Data

The app includes 8 sample products across different categories:
- Electronics (Headphones, Phone Charger, Bluetooth Speaker)
- Wearables (Fitness Watch)
- Clothing (Organic T-Shirt)
- Lifestyle (Water Bottle)
- Accessories (Laptop Bag)
- Fitness (Yoga Mat)

## 🚀 Deployment

This project can be easily deployed on Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

## 👨‍💻 Development

### Adding New Products

Edit `lib/products.ts` to add new products to the array:

\`\`\`typescript
export const products: Product[] = [
  // Add your new product here
  {
    id: "9",
    name: "New Product",
    price: 99.99,
    image: "/placeholder.svg?height=300&width=300",
    description: "Product description",
    category: "Category",
    rating: 4.5,
    inStock: true,
  },
  // ... existing products
];
\`\`\`

### Customizing Styles

The project uses Tailwind CSS. Modify the classes in components or extend the theme in `tailwind.config.ts`.

## 📝 Assignment Completion

This project fulfills all requirements of the Cloudflex frontend assignment:

✅ **Core Requirements**
- [x] `/products` route created
- [x] Product grid with responsive layout
- [x] Product cards with all required fields
- [x] Local JavaScript data source
- [x] Tailwind CSS styling
- [x] Mobile-responsive design

✅ **Bonus Features**
- [x] Dynamic routing to `/products/[id]`
- [x] Hover effects and transitions
- [x] Clean component structure
- [x] Enhanced UI with categories and ratings

## 🤝 Contact

For any questions about this implementation, please reach out via the provided contact methods.

---

**Built with ❤️ for Cloudflex Frontend Assignment**
\`\`\`
