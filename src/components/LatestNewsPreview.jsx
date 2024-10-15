import { Link } from "react-router-dom";
import NewsCard from "./NewsCard";
import NewsCardSkeleton from "../skeletons/NewsCardSkeleton";
import { useLatestNews } from "../stores/latestNews";

export default function LatestNewsPreview() {
  const isLoading = useLatestNews(state => state.isLoading);
  const latestNewsPreview = useLatestNews(state => state.latestNewsPreview);

  const newsCardStyles = {
    wrapperStyles: "flex flex-col justify-start rounded-lg border border-zinc-200 shadow-md w-full p-2 hover:bg-zinc-100 transition-all duration-300 dark:bg-[#2c2c2c] dark:border-gray-300 dark:hover:bg-zinc-800",
    imageStyles: "object-cover w-full h-64 rounded-lg dark:border-gray-300",
    titleStyles: "text-md font-semibold text-left hover:underline transition-all duration-300 dark:text-white",
    summaryStyles: "text-sm font-normal text-left mb-2 dark:text-gray-300",
    sourceStyles: "text-sm font-bold dark:text-gray-200",
    pubDateStyles: "text-sm font-thin dark:text-gray-200",
    readTextStyles: "text-sm font-bold text-[#E40000] hover:underline transition-all duration-300 dark:text-[#E40000]"
  };

  return (
    <div className="mx-auto mt-5 w-full max-w-screen-xl">
      <div className="flex justify-between items-end mb-2">
        <h2 className="text-2xl font-semibold dark:text-white">
          Latest News
        </h2>
        <Link
          to="/latest-news"
          className="text-md text-[#E40000] font-medium block hover:underline transition-all duration-300 dark:text-[#E40000]"
        >
          See all
        </Link>
      </div>
      <div className="grid gap-4 grid-cols-1 justify-between min-[550px]:grid-cols-2 lg:gap-8 xl:gap-4 xl:grid-cols-4">
        {isLoading ? (
          [0, 1, 2, 3].map(value => (
            <NewsCardSkeleton styles={newsCardStyles} key={value} />
          ))
        ) : (
          latestNewsPreview.map((article, i) => (
            <NewsCard data={article} styles={newsCardStyles} key={i} />
          ))
        )}
      </div>
    </div>
  );
}
