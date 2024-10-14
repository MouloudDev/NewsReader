import { Link } from "react-router-dom"

export default function CategoriesNav() {
  const categories = [
    "politics", "technology",
    "sprots", "entertainment",
    "health", "business", "science"
  ]

  return (
    <div className="grid gap-2 grid-cols-2 sm:grid-cols-3 mb-2 md:grid-cols-4 lg:flex lg:justify-between">
      {categories.map((category, idx) => {
        return (
          <Link
            to={`/${category}`}
            className="text-xl font-medium rounded-2xl border border-black px-5 py-1 hover:bg-black hover:text-white transition-all duration-300"
            key={idx}
          >
            {category.charAt(0).toUpperCase()}{category.slice(1)}
          </Link>
        )
      })}
    </div>
  )
}
