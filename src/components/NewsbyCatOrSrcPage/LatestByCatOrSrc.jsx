import { Link } from "react-router-dom";
import abbreviateStr from "../../utils/abbreviateStr";
import NewsCard from "../NewsCard";

export default function LatestByCatOrSrc({ articles }) {
  const leftMostArticle = articles[0];
  const twinArticles = articles?.slice(1, 4);
  const restOfArticles = articles?.slice(4);

  const id = leftMostArticle?.id;
  const title = leftMostArticle?.title;
  const image = leftMostArticle?.image;
  const summary = leftMostArticle?.summary;
  const source = leftMostArticle?.source;
  const pubDate = leftMostArticle?.pubDate;
  const author = leftMostArticle?.author;

  const newsCardStyles = {
    wrapperStyles: "grid gap-1 md:grid-rows-5 md:grid-cols-2 md:h-52 p-2 rounded-lg last:hidden last:lg:grid hover:bg-zinc-100 border border-gray-400 transition-all duration-300 dark:bg-[#2c2c2c] dark:border-gray-300 dark:hover:bg-zinc-800",
    imageStyles: "row-span-5 col-span-1 object-cover w-full h-72 max-w-full max-h-full max-md:rounded-tl-lg max-md:rounded-tr-lg md:rounded-tl-lg md:rounded-bl-lg dark:border-gray-300",
    titleStyles: "row-span-1 text-md font-semibold h-fit text-left hover:underline transition-all duration-300 dark:text-white",
    summaryStyles: "row-span-3 text-sm font-normal text-left my-2 dark:text-gray-300",
    sourceStyles: "text-sm font-bold dark:text-gray-200",
    pubDateStyles: "text-sm font-thin dark:text-gray-200",
    readTextStyles: "text-sm font-bold text-[#E40000] hover:underline transition-all duration-300 dark:text-[#E40000]"
  }

  return (
    <div className="rounded-lg my-3">
      <h2 className="text-2xl text-left font-semibold mb-1 dark:text-white">
        Latest
      </h2>
      <div className="grid gap-2 md:grid-cols-2 rounded-lg">
        <div className="relative max-h-sm rounded-lg dark:border dark:border-gray-200">
          <img
            src={image}
            alt="article thumbnail"
            className="w-full h-full border border-gray-400 rounded-lg min-h-[400px] max-h-[700px]"
            onError={(e) => e.target.style.display = 'none'}
          />
          <div className="absolute top-0 left-0 w-full h-full rounded-lg p-2 flex justify-center items-end bg-gradient-to-t from-[#4d4c4c] to-transparent dark:from-[#3a3a3a] dark:border-gray-600">
            <div className="bg-gray-100 rounded-lg w-fit max-w-96 h-fit mb-4 mx-1 p-2">
              <h2 className="text-sm text-left font-bold">{abbreviateStr(title, 69)}</h2>
              <p className="text-sm text-left font-thin my-1">{abbreviateStr(summary, 100)}</p>
              <div className="flex justify-between items-end">
                <div className="flex items-end gap-1">
                  <span className="text-sm text-left font-normal text-gray-900">
                    {source ? abbreviateStr(source, 8) : abbreviateStr(author, 8)}
                  </span>
                  <span className="text-sm text-left font-light text-gray-700">{pubDate?.split(" ")[0]}</span>
                </div>
                <Link
                  to={`/article/${id}`}
                  className="text-sm font-semibold text-[#E40000] hover:underline transition-all duration-300"
                >
                  Read
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="grid gap-1 content-between sm:max-md:grid-cols-2">
          {twinArticles.map((article, idx) => {
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
      <div className="grid gap-x-3 mt-3 sm:grid-cols-2 md:grid-cols-3">
        {restOfArticles.map(({ id, title }, idx) => (
          <div className="flex-grow border-t-2 border-gray-300 py-3 hover:bg-slate-100 dark:border-gray-300 dark:hover:bg-gray-700 transition-all duration-300" key={idx}>
            <Link
              to={`/article/${id}`}
              className="block text-left text-md font-semibold hover:underline dark:text-gray-200"
            >
              {abbreviateStr(title, 69)}
            </Link>
          </div>
        ))}
        <div className="border-t-2 border-gray-300"></div>
        <div className="border-t-2 border-gray-300 hidden sm:block"></div>
        <div className="border-t-2 border-gray-300 hidden md:block"></div>
      </div>
    </div>
  )
}
