import { Link } from "react-router-dom"
import NewsCardSkeleton from "./NewsCardSkeleton"

export default function WorldNewsSkeleton() {
  const lgCardStyles = {
    wrapperStyles: "flex flex-col justify-between h-full p-2 rounded-lg border border-zinc-500 shadow-md bg-gradient-to-t from-[#4d4c4c] to-transparent",
    imageStyles: "object-cover w-full max-h-96 rounded-lg border border-zinc-300",
    titleStyles: "text-white text-xl font-semibold text-left",
    summaryStyles: "text-white text-md font-normal text-left mb-2",
    sourceStyles: "text-white text-sm font-bold",
    pubDateStyles: "text-white text-sm font-thin",
    readTextStyles: "text-md font-bold text-[#E40000]"
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

  return (
    <div className="mx-auto mt-5 w-full max-w-screen-xl">
      <div className="flex justify-between items-end mb-2">
        <h2 className="text-2xl font-semibold">World</h2>
        <Link to="/general" className="text-md text-[#E40000] font-medium block hover:underline transition-all duration-300">
          See all
        </Link>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 xl:grid-cols-4">
        <div className="lg:col-span-2">
          <div className={lgCardStyles.wrapperStyles}>
            <div className={`${lgCardStyles.imageStyles} bg-gray-300 animate-pulse`}></div>
            <div className="space-y-2 mt-2">
              <div className="h-6 bg-gray-300 animate-pulse rounded w-3/4"></div>
              <div className="h-4 bg-gray-300 animate-pulse rounded w-full"></div>
              <div className="h-4 bg-gray-300 animate-pulse rounded w-2/3"></div>
            </div>
            <div className="flex justify-between items-center mt-2">
              <div className="flex gap-2">
                <div className="h-4 bg-gray-300 animate-pulse rounded w-20"></div>
                <div className="h-4 bg-gray-300 animate-pulse rounded w-16"></div>
              </div>
              <div className="h-4 bg-gray-300 animate-pulse rounded w-16"></div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
          <NewsCardSkeleton styles={smCardStyles} />
          <NewsCardSkeleton styles={smCardStyles} />
        </div>
        <div className="hidden xl:flex xl:flex-col xl:justify-between">
          {[...Array(5)].map((_, idx) => (
            <div className="flex-grow border-t-2 border-gray-300 py-3" key={idx}>
              <div className="h-6 bg-gray-300 animate-pulse rounded w-3/4"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
