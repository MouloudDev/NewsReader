import { useEffect } from "react";
import LeftDirectionArrow from "../Icons/LeftDirectionArrow";
import RightDirectionArrow from "../Icons/rightDirArrow";
import TopStoriesSkeleton from "../skeletons/TopStoriesSkeleton";
import RightSideNav from "./RightSideNav";
import { Link } from "react-router-dom";
import { useTopStories } from "../stores/topStories";
import abbreviateStr from "../utils/abbreviateStr";
import ErrorComponent from "./ErrorComponent";

export default function TopStories() {
  const {
    isLoading,
    trendingArticles,
    currArticle,
    currArticleIdx,
    showNextRightArticle,
    showNextLeftArticle,
    error
  } = useTopStories();

  useEffect(() => {
    const id = setInterval(showNextRightArticle, 4000);
    return () => clearInterval(id)
  }, [currArticleIdx])

  const id = currArticle?.id;
  const image = currArticle?.image
  const title = currArticle?.title;
  const summary = currArticle?.summary;
  const source = currArticle?.source;
  const author = currArticle?.author;
  const pubDate = currArticle?.pubDate;

  if (isLoading) return <TopStoriesSkeleton />;

  if (error) return <ErrorComponent message={error} />

  return (
    <div className="grid md:grid-cols-6 gap-4 mx-auto mt-2 w-full max-w-screen-xl">
      <div className="flex flex-col flex-grow h-[650px] md:col-span-4 min-w-full">
        <h1 className="text-4xl font-bold text-start mb-3 leading-tight dark:text-white">Top Stories</h1>
        <div className="flex border-2 border-gray-400 rounded-lg shadow-sm max-w.-[900px] flex-grow ">
          <div
            onClick={showNextLeftArticle}
            className="justify-center items-center w-10 bg-gradient-to-r from-[#262626] to-[#817676] cursor-pointer rounded-l-lg hidden sm:flex"
          >
            <LeftDirectionArrow className="w-10 h-10 fill-white" />
          </div>

          <div className="w-full transition-opacity duration-500 ease-in-out flex flex-col">
            <div className="relative h-96 flex-shrink-0">
              <img
                src={image}
                alt="Article thumbnail"
                className="w-full h-full object-cover rounded-lg dark:border-b dark:border-b-gray-200"
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
                <Link
                  to={`/article/${id}`}
                >
                  <h2 className="text-left font-bold text-xl mb-2 hover:underline transition-all duration-300 cursor-pointer line-clamp-2 dark:text-gray-200">
                    {abbreviateStr(title, 100)}
                  </h2>
                </Link>
                <p className="text-sm text-left line-clamp-4 hover:opacity-80 transition-opacity duration-300 dark:text-gray-300">
                  {abbreviateStr(summary, 300)}
                </p>
              </div>
              <div className="flex items-center mt-2">
                <span className="text-base font-semibold truncate max-w-[150px] dark:text-gray-200">
                  {source ? abbreviateStr(source, 12) : abbreviateStr(author, 12)}
                </span>
                <span className="text-sm font-normal text-[#A6A4A4] ml-1 truncate sm:ml-2 dark:text-gray-400">
                  {pubDate?.slice(0, 10)}
                </span>
                <Link
                  to={`/article/${id}`}
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
