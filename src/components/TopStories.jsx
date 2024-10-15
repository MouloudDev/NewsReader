import { useEffect } from "react";
import LeftDirectionArrow from "../Icons/LeftDirectionArrow";
import RightDirectionArrow from "../Icons/rightDirArrow";
import TopStoriesSkeleton from "../skeletons/TopStoriesSkeleton";
import RightSideNav from "./RightSideNav";
import { Link } from "react-router-dom";
import { useTopStories } from "../stores/topStories";

export default function TopStories() {
  const {
    isLoading,
    trendingArticles,
    currArticle,
    currArticleIdx,
    showNextRightArticle,
    showNextLeftArticle
  } = useTopStories();

  useEffect(() => {
    const id = setInterval(showNextRightArticle, 4000);
    return () => clearInterval(id)
  }, [currArticleIdx])

  if (isLoading) return <TopStoriesSkeleton />;

  return (
    <div className="flex justify-center gap-4 mx-auto mt-2 max-w-screen-xl">
      <div className="flex flex-col flex-grow h-[650px] rounded-lg dark:border dark:border-gray-200">
        <h1 className="text-4xl font-bold text-start mb-3 leading-tight dark:text-white dark:ml-1">Top Stories</h1>
        <div className="flex border-2 border-gray-300 rounded-lg shadow-sm max-w-[900px] flex-grow dark:border-gray-600 dark:bg-[#2c2c2c]">
          <div
            onClick={showNextLeftArticle}
            className="justify-center items-center w-10 bg-gradient-to-r from-[#262626] to-[#817676] cursor-pointer rounded-l-lg hidden sm:flex"
          >
            <LeftDirectionArrow className="w-10 h-10 fill-white" />
          </div>

          <div className="w-full transition-opacity duration-500 ease-in-out flex flex-col">
            <div className="relative h-96 flex-shrink-0">
              <img
                src={currArticle.image}
                alt="Article thumbnail"
                className="w-full h-full object-cover rounded-t-md"
              />
              <LeftDirectionArrow
                onClick={showNextLeftArticle}
                className="absolute bottom-2 left-2 rounded-full bg-white opacity-70 hover:opacity-100 fill-black w-8 h-8 cursor-pointer sm:hidden transition-opacity duration-300"
              />
              <RightDirectionArrow
                onClick={showNextRightArticle}
                className="absolute bottom-2 right-2 rounded-full bg-white opacity-70 hover:opacity-100 fill-black w-8 h-8 cursor-pointer sm:hidden transition-opacity duration-300"
              />
            </div>
            <div className="flex flex-col justify-between p-1 h-full">
              <div>
                <Link to={`/article/${currArticle.id}`}>
                  <h2 className="text-left font-bold text-xl mb-2 hover:underline transition-all duration-300 cursor-pointer line-clamp-2 dark:text-gray-200">
                    {currArticle.title.slice(0, 100) + "..."}
                  </h2>
                </Link>
                <p className="text-sm text-left line-clamp-4 hover:opacity-80 transition-opacity duration-300 dark:text-gray-300">
                  {currArticle.text.slice(0, 300) + "..."}
                </p>
              </div>
              <div className="flex items-center mt-2">
                <span className="text-base font-semibold truncate max-w-[150px] dark:text-gray-200">
                  {currArticle.source || currArticle.author}
                </span>
                <span className="text-sm font-normal text-[#A6A4A4] ml-1 truncate sm:ml-2 dark:text-gray-400">
                  {currArticle.publish_date.split(" ")[0]}
                </span>
                <Link
                  to={`/article/${currArticle.id}`}
                  className="ml-auto px-3 py-1 bg-[#E40000] text-white font-semibold rounded-lg hover:bg-red-700 transition-colors duration-300"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>

          <div
            onClick={showNextRightArticle}
            className="justify-center items-center w-10 bg-gradient-to-l from-[#262626] to-[#817676] cursor-pointer rounded-r-lg hidden sm:flex"
          >
            <RightDirectionArrow className="w-10 h-10 fill-white" />
          </div>
        </div>
      </div>
      <RightSideNav trendingArticles={trendingArticles} />
    </div>
  );
}
