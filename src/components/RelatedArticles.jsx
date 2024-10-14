import NewsCard from "./NewsCard"

export default function RelatedArticles({ articles }) {
  if (!articles.length) return null;

  const newsCardStyles = {
    wrapperStyles: "flex flex-col justify-start p-2 rounded-lg bg-white hover:bg-zinc-100 border border-white hover:border hover:border-gray-400 transition-all duration-300",
    imageStyles: "object-cover w-full max-w-full h-64 rounded-lg",
    titleStyles: "text-md font-semibold text-left hover:underline transition-all duration-300",
    summaryStyles: "text-sm font-normal text-left mb-2",
    sourceStyles: "text-sm font-bold",
    pubDateStyles: "text-sm font-thin",
    readTextStyles: "text-sm font-bold text-[#E40000] hover:underline transition-all duration-300"
  }

  return (
    <div className="lg:col-span-2">
      <h2 className="text-2xl text-left mb-1 font-semibold">Related articles</h2>
      <div className="grid gap-2 bg-[#F1F1F1] p-3 rounded-lg sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1">
        {articles.map(article => {
          return (
            <div className="last:sm:max-md:col-span-2" key={article.id}>
              <NewsCard data={article} styles={newsCardStyles}/>
            </div>
          )
        })}
      </div>
    </div>
  )
}
