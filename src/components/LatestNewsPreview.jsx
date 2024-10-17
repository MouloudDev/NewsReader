import NewsCard from "./NewsCard";
import NewsCardSkeleton from "../skeletons/NewsCardSkeleton";
import { useLatestNews } from "../stores/latestNews";
import CategoryHeader from "./CategoryHeader";

export default function LatestNewsPreview() {
  const isLoading = useLatestNews(state => state.isLoading);
  const latestNewsPreview = useLatestNews(state => state.latestNewsPreview);
  const error = useLatestNews(state => state.error);

  const newsCardStyles = {
    wrapperStyles: "flex flex-col justify-start rounded-lg border border-zinc-200 shadow-md w-full p-2 hover:bg-zinc-100 transition-all duration-300 dark:bg-[#2c2c2c] dark:border-gray-300 dark:hover:bg-zinc-800",
    imageStyles: "object-cover w-full h-64 rounded-lg dark:border-gray-300",
    titleStyles: "text-md font-semibold text-left hover:underline transition-all duration-300 dark:text-white",
    summaryStyles: "text-sm font-normal text-left mb-2 dark:text-gray-300",
    sourceStyles: "text-sm font-bold dark:text-gray-200",
    pubDateStyles: "text-sm font-thin dark:text-gray-200",
    readTextStyles: "text-sm font-bold text-[#E40000] hover:underline transition-all duration-300 dark:text-[#E40000]"
  };

  if (isLoading) {
    return (
      <div className="mx-auto mt-5 w-full max-w-screen-xl">
        <CategoryHeader category={"Latest News"} />
        <div className="grid gap-4 grid-cols-1 justify-between min-[550px]:grid-cols-2 lg:gap-8 xl:gap-4 xl:grid-cols-4">
          {[0, 1, 2, 3].map(value => (
            <NewsCardSkeleton styles={newsCardStyles} key={value} />
          ))}
        </div>
      </div>
    )
  }

  if (error) return <ErrorComponent message={error}/>;

  return (
    <div className="mx-auto mt-5 w-full max-w-screen-xl">
      <CategoryHeader category="Latest News"/>
      <div className="grid gap-4 grid-cols-1 justify-between min-[550px]:grid-cols-2 lg:gap-8 xl:gap-4 xl:grid-cols-4">
        {latestNewsPreview.map((article, i) => (
          <NewsCard data={article} styles={newsCardStyles} key={i} />
        ))}
      </div>
    </div>
  );
}
