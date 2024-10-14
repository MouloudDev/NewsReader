import { Link } from "react-router-dom";

const categories = [
  "Politics",
  "Technology",
  "Sports",
  "Entertainment",
  "Health",
];

export default function RightSideNav({ trendingArticles }) {

    return (
      <div className="p-3 rounded-lg bg-[#F1F1F1] flex-grow max-w-80 ml-auto hidden md:block ">
        <div>
          <h3 className="text-2xl font-medium text-start"> Categories </h3>
          <ul className="mt-2 list-none ml-auto text-start w-full">
            {categories.map((category, i) => {
              return (
                <li className="w-full text-xl font-normal" key={i}>
                  <Link
                    to={`/category/${category.toLowerCase()}`}
                    className="block pl-8 py-2 rounded-md min-w-full hover:bg-white transition-all duration-500"
                  >
                    {category}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-medium text-start"> Trending </h3>
          <ul className="mt-2 list-none ml-auto text-start w-full">
            {trendingArticles.map(({ id, title }, i) => {
              return (
                <li className="w-full text-xl font-normal" key={i}>
                  <Link
                    to={`/article/${id}`}
                    className="block pl-8 py-2 rounded-md min-w-full hover:bg-white transition-all duration-500"
                  >
                    {title.slice(0, 25)}...
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    )
}
