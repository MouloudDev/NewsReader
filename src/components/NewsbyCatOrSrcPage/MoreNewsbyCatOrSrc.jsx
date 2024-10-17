import { useParams } from "react-router";
import NewsCard from "../NewsCard";

export default function MoreNewsbyCatOrSrc({ articles }) {
  const { category } = useParams();
  const { source } = useParams();

  const newsCardStyles = {
    wrapperStyles: "grid gap-1 md:grid-rows-6 md:grid-cols-2 md:h-52 p-2 rounded-lg hover:bg-zinc-100 border border-gray-400 transition-all duration-300 dark:bg-[#2c2c2c] dark:border-gray-300 dark:hover:bg-zinc-800",
    imageStyles: "row-span-6 col-span-1 object-cover w-full h-72 max-w-full max-h-full max-md:rounded-tl-lg max-md:rounded-tr-lg md:rounded-tl-lg md:rounded-bl-lg dark:border-gray-300",
    titleStyles: "overflow-hidden h-full row-span-2 text-md font-semibold h-fit text-left hover:underline transition-all duration-300 dark:text-white",
    summaryStyles: "overflow-hidden h-full row-span-3 text-sm font-normal text-left dark:text-gray-300",
    sourceStyles: "text-sm font-bold dark:text-gray-200",
    pubDateStyles: "text-sm font-thin dark:text-gray-200",
    readTextStyles: "text-sm font-bold text-[#E40000] hover:underline transition-all duration-300 dark:text-[#E40000]"
  }

  return (
    <div className="mt-4">
      <h1 className="text-2xl text-left font-semibold my-1 dark:text-white">
        {category && `More In ${category?.charAt(0).toUpperCase() + category.slice(1)}`}
        {source === "source" && `More From ${source?.toUpperCase()}`}
      </h1>
      <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article, idx) => {
          return (
            <NewsCard
              data={article}
              styles={newsCardStyles}
              key={idx}
            />
          )
        })}
      </div>
    </div>
  )
}
