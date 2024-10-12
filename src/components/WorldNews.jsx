import { Link } from "react-router-dom";
import NewsCard from "./NewsCard";
import { useNewsCategories } from "../stores/newsCategories";
import WorldNewsSkeleton from "../skeletons/WorldNewsSkeleton";
import CategoryHeader from "./CategoryHeader";

export default function WorldNews() {
  const isLoading = useNewsCategories(state => state.isLoading);
  const world = useNewsCategories(state => state.world);
  const mainArticle = world[0];
  const secArticles = [world[1], world[2]];

  const lgCardStyles = {
    wrapperStyles: "flex flex-col justify-between h-full p-2 rounded-lg border border-zinc-500 shadow-md bg-gradient-to-t from-[#4d4c4c] to-transparent",
    imageStyles: "object-cover w-full h-2/3 rounded-lg border border-zinc-300",
    titleStyles: "text-white text-xl font-semibold text-left hover:underline transition-all duration-300 line-clamp-2",
    summaryStyles: "text-white text-md font-normal text-left mb-2 line-clamp-3",
    sourceStyles: "text-white text-sm font-bold",
    pubDateStyles: "text-white text-sm font-thin",
    readTextStyles: "text-md font-bold text-[#E40000] hover:underline transition-all duration-300"
  }

  const smCardStyles = {
    wrapperStyles: "flex flex-col justify-between h-full p-2 rounded-lg border border-zinc-500 shadow-md bg-gradient-to-t from-[#4d4c4c] to-[#ffffff]",
    imageStyles: "object-cover w-full h-64 rounded-lg border border-zinc-300 lg:h-48",
    titleStyles: "text-white text-lg font-semibold text-left hover:underline transition-all duration-300 line-clamp-2",
    summaryStyles: "text-white text-sm font-normal text-left mb-1 line-clamp-2",
    sourceStyles: "text-white text-xs font-bold",
    pubDateStyles: "text-white text-xs font-thin",
    readTextStyles: "text-sm font-bold text-[#E40000] hover:underline transition-all duration-300"
  }

  if (isLoading) return <WorldNewsSkeleton />

  return (
    <div className="mx-auto mt-5 w-full max-w-screen-xl">
      <CategoryHeader category="world" />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 xl:grid-cols-4">
        <div className="lg:col-span-2">
          <NewsCard data={mainArticle} styles={lgCardStyles} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
          {secArticles.map((article, idx) => (
            <NewsCard data={article} styles={smCardStyles} key={idx}/>
          ))}
        </div>
        <div className="hidden xl:flex xl:flex-col xl:justify-between">
          {world.slice(3).map(({ id, title }, idx) => (
            <div className="flex-grow border-t-2 border-gray-300 py-3 hover:bg-slate-100 transition-all duration-300" key={idx}>
              <Link to={`/article/${id}`} className="block text-left text-md font-semibold hover:underline">{title}</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
