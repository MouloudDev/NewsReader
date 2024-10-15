import { Link } from "react-router-dom";
import CategoryHeader from "./CategoryHeader";
import NewsCard from "./NewsCard";
import { useNewsCategories } from "../stores/newsCategories";
import NewsOverviewSkeleton from "../skeletons/NewsOverviewSkeleton";

export default function NewsOverview() {
  const getNewsOverview = useNewsCategories(state => state.getNewsOverview);
  const {
    isLoading,
    general,
    politics,
    sports
  } = getNewsOverview();

  const otherCategories = [
    { category: "politics", article: politics },
    { category: "sports", article: sports },
  ];

  const newsCardStyles = {
    wrapperStyles: "flex flex-col justify-start p-1 rounded-lg w-full hover:bg-zinc-100 transition-all duration-300 rounded-lg px-1 dark:border dark:broder-gray-200 dark:bg-[#2c2c2c] dark:hover:bg-zinc-800",
    imageStyles: "object-cover w-full h-64 rounded-lg xl:max-h-56 dark:border-gray-200",
    titleStyles: "text-md font-semibold text-left hover:underline transition-all duration-300 dark:text-white",
    summaryStyles: "text-sm font-normal text-left mb-2 dark:text-gray-200",
    sourceStyles: "text-sm font-bold dark:text-gray-200",
    pubDateStyles: "text-sm font-thin dark:text-gray-200",
    readTextStyles: "text-sm font-bold text-[#E40000] hover:underline transition-all duration-300 dark:text-[#E40000]"
  };

  if (isLoading) return <NewsOverviewSkeleton />;

  return (
    <div className="grid gap-2 mx-auto mt-5 w-full max-w-screen-xl xl:grid-cols-7">
      <div className="xl:col-span-4 grid content-between">
        <CategoryHeader category="general" />
        <div className="grid content-between gap-2 md:max-xl:grid-rows-2 md:max-xl:grid-cols-2">
          {general.map((article) => {
            const {
              id, author, source,
              title, image, summary,
              sourceIcon, pubDate
            } = article;
            return (
              <div
                className="grid gap-2 grid-cols-1 p-1 border-b-2 border-b-zinc-200 rounded-md w-full xl:grid-cols-5 hover:bg-zinc-100 transition-all duration-300 dark:bg-[#2c2c2c] dark:border-gray-300 dark:hover:bg-zinc-800"
                key={id}
              >
                <div className="flex flex-col xl:col-span-3">
                  <div className="flex gap-1 items-center">
                    <img
                      src={sourceIcon}
                      alt="Source icon"
                      className="h-8 w-8 rounded-full border border-zinc-400 shadow-sm dark:border-gray-300"
                    />
                    <span className="text-xl font-medium text-left dark:text-gray-200">{author || source}</span>
                  </div>
                  <Link
                    to={`/article/${id}`}
                    className="text-xl font-semibold block text-left hover:underline transition-all duration-300 dark:text-white"
                  >
                    {title?.slice(0, 40)}{title?.length > 40 && "..."}
                  </Link>
                  <p
                    className="text-sm font-normal text-left dark:text-gray-300"
                  >
                    {summary?.slice(0, 123)}{summary?.length > 123 && "..."}
                  </p>
                  <div className="flex items-end mt-auto">
                    <span className="text-sm font-thin text-left dark:text-gray-200">{pubDate?.split(" ")[0]}</span>
                    <Link
                      to={`/article/${id}`}
                      className="ml-auto text-sm font-semibold text-[#E40000] hover:underline transition-all duration-300 dark:text-[#E40000]"
                    >
                      Read
                    </Link>
                  </div>
                </div>
                <img
                  src={image}
                  alt="thumbnail"
                  className="w-full rounded-lg order-[-1] xl:order-[1] xl:col-span-2 xl:max-h-48 dark:border-gray-300"
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="grid content-between gap-2 sm:max-xl:grid-cols-2 xl:col-span-3 xl:pl-3 xl:border-l xl:border-l-zinc-200 dark:border-l-gray-300">
        {otherCategories.map(({ category, article }, idx) => {
          return (
            <div key={idx}>
              <CategoryHeader category={category} />
              <NewsCard data={article} styles={newsCardStyles} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
