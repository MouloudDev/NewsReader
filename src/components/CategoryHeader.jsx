import { Link } from "react-router-dom";

export default function CategoryHeader({ category }) {


  return (
    <div className="flex justify-between items-end mb-2">
      <h2 className="text-2xl font-semibold">
         {category.charAt(0).toUpperCase() + category.slice(1)}
      </h2>
      <Link
        to={`/${category}`}
        className="text-md text-[#E40000] font-medium block hover:underline transition-all duration-300"
      >
        See all
      </Link>
    </div>
  )
}
