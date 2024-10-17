import { Link } from "react-router-dom";
import abbreviateStr from "../utils/abbreviateStr";

const categories = [
  "Politics",
  "Technology",
  "Sports",
  "Entertainment",
  "Health",
];

export default function RightSideNav({ trendingArticles }) {
  return (
    <div className="p-3 w-full md:col-span-2 bg-[#F1F1F1] ml-auto hidden md:block dark:bg-[#2c2c2c] dark:border-l dark:border-l-gray-200">
      <div>
        <h3 className="text-2xl font-medium text-start text-black dark:text-gray-200"> Categories </h3>
        <ul className="mt-2 list-none ml-auto text-start w-full">
          {categories.map((category, i) => {
            return (
              <li className="w-full text-xl font-normal" key={i}>
                <Link
                  to={`/category/${category.toLowerCase()}`}
                  className="block pl-8 py-2 rounded-md min-w-full text-black dark:text-gray-200 hover:bg-white dark:hover:bg-zinc-200 dark:hover:text-gray-900 transition-all duration-500"
                >
                  {category}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
      <div>
        <h3 className="text-2xl font-medium text-start text-black dark:text-gray-200"> Trending </h3>
        <ul className="mt-2 list-none ml-auto text-start w-full">
          {trendingArticles.map(({ id, title }, i) => {
            return (
              <li className="w-full text-xl font-normal" key={i}>
                <Link
                  to={`/article/${id}`}
                  className="block pl-8 py-2 rounded-md min-w-full text-black dark:text-gray-200 hover:bg-white dark:hover:bg-zinc-200 dark:hover:text-gray-900 transition-all duration-500"
                >
                  {abbreviateStr(title, 30)}...
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
