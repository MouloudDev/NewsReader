import { Link } from "react-router-dom";

export default function CategoryHeader({ category }) {

  const formattedPath = `
    /category/${category?.toLowerCase().replaceAll(" ", "-")}
  `.trim();
  return (
    <div className="flex justify-between items-end mb-2">
      <h2 className="text-2xl font-semibold dark:text-white">
        {category.charAt(0).toUpperCase() + category.slice(1)}
      </h2>
      <Link
        to={formattedPath}
        className="text-md text-[#E40000] font-medium block hover:underline transition-all duration-300"
      >
        See all
      </Link>
    </div>
  )
}
