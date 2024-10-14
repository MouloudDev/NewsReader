import NewsCard from "./NewsCard";

export default function RecentNewsInCategoryOrCountry({ articles, article }) {
  if (!articles.length) return null;

  const newsCardStyles = {
    wrapperStyles: "grid gap-1 lg:grid-rows-5 lg:grid-cols-2 lg:h-52 p-2 rounded-lg border border-white hover:bg-zinc-100 hover:border hover:border-gray-400 transition-all duration-300",
    imageStyles: "row-span-5 col-span-1 object-cover w-full h-72 max-w-full max-h-full max-lg:rounded-tl-lg max-lg:rounded-tr-lg lg:rounded-tl-lg lg:rounded-bl-lg",
    titleStyles: "row-span-1 text-md font-semibold h-fit text-left hover:underline transition-all duration-300",
    summaryStyles: "row-span-3 text-sm font-normal text-left my-2",
    sourceStyles: "text-sm font-bold",
    pubDateStyles: "text-sm font-thin",
    readTextStyles: "text-sm font-bold text-[#E40000] hover:underline transition-all duration-300"
  }

  const { category, country } = article;

  // cap for capitalized.
  const capCategory = category?.charAt(0).toUpperCase() + category?.slice(1);
  // up for upper case
  const upCountry = country?.toUpperCase()

  return (
    <div className="mt-2">
      <h2 className="text-2xl text-left mb-1 font-semibold">
        Recent News {category ? `In ${capCategory}` : (country ? `In ${upCountry}` : '')}
      </h2>
      <div className="grid gap-2 md:grid-cols-2">
        {articles.map(article => {
          return (
            <NewsCard
              data={article}
              styles={newsCardStyles}
              key={article.id}
            />
          )
        })}
      </div>
    </div>
  )
}
