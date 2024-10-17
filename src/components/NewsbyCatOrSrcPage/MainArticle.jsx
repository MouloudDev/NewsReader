import { Link } from "react-router-dom";
import abbreviateStr from "../../utils/abbreviateStr";

export default function MainArticle({ article }) {
  const {
    id, title, image,
    summary, source, author
  } = article;

  return (
    <div>
      <div className="relative w-full rounded-lg">
        <img
          src={image}
          alt="article thumbnail"
          className="w-full border border-gray-400 rounded-lg min-h-[400px] max-h-[700px]"
          onError={(e) => e.target.style.display = 'none'}
        />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-end items-center p-2 rounded-lg bg-gradient-to-t from-[#4d4c4c] to-transparent dark:from-[#3a3a3a] dark:border-gray-600 ">
          <div className="w-fit max-w-xl mb-3 pl-3 border-l border-l-gray-300 sm:mg-5 md:mb-32">
            <h2 className="text-3xl text-left text-white font-semibold hover:underline dark:text-gray-200">
              <Link
                to={`/article/${id}`}
              >
                {abbreviateStr(title, 75)}
              </Link>
            </h2>
            <p className="text-lg text-gray-200 text-left font-normal ">
              {abbreviateStr(summary, 267)}
            </p>
          </div>
        </div>
      </div>
      <div className="w-fit ml-auto mt-[2px]">
        <span className={`text-[#3C3A3A] font-medium pr-3 mr-3 border-r border-r-gray-300 dark:text-gray-100 ${source ? "" : "hidden"}`}>
          {abbreviateStr(source, 10)}
        </span>
        <span className={`text-[#3C3A3A] font-medium pr-3 border-r border-r-gray-300 dark:text-gray-100 ${author ? "" : "hidden"}`}>
          {abbreviateStr(author, 10)}
        </span>
      </div>
    </div>
  )
}
