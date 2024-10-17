import { useParams } from "react-router"
import { Link } from "react-router-dom";
import RelatedArticles from "./RelatedArticles";
import CategoriesNav from "./CategoriesNav";
import NewsSources from "./NewsSources";
import getArticleDataById from "../utils/getArticleDataById";
import ArticleNotFound from "./ArticleNotFound";
import RecentNewsInCategoryOrCountry from "./RecentNewsInCategoryOrCountry.JSX";
import abbreviateStr from "../utils/abbreviateStr";

export default function ArticleFullView() {
  const { articleId } = useParams();
  const articleDate = getArticleDataById(articleId);

  if (!articleDate) return <ArticleNotFound />;

  const { article, relatedArticles, recentArticles } = articleDate;
  const { image, title, author, source, country, pubDate,
          content, summary, description, category, url
        } = article;

  return (
    <div className="mx-auto mt-5 w-full max-w-screen-xl">
      <CategoriesNav />
      <div className="mt-5">
        <img
          src={image}
          alt="article thumbnail"
          className="w-full border border-gray-400 rounded-lg min-h-[400px] max-h-[700px]"
          onError={(e) => e.target.style.display = 'none'}
        />
        <h1 className="text-3xl font-semibold text-left mt-1 dark:text-white">
          {title}
        </h1>
        <div className="flex flex-start flex-wrap mt-1">
          <span
            className={`text-[#3C3A3A] font-medium pr-3 mr-3 border-r border-r-gray-300 dark:text-gray-100 ${source ? "" : `${country ? "" : "hidden"}`}`}
          >
            {source? abbreviateStr(source, 13) : abbreviateStr(country, 10)}
          </span>
          <span
            className={`text-[#3C3A3A] font-medium pr-3 mr-3 border-r border-r-gray-300 dark:text-gray-100 ${author ? "" : "hidden"}`}
          >
            {author}
          </span>
          <span className="text-[#3C3A3A] font-medium pr-3 mr-3 border-r border-r-gray-300 dark:text-gray-100">{pubDate?.split(" ")[0]}</span>
          <Link
            to={`/category/${category?.toLowerCase()}`}
            className={`text-[#E40000] font-medium pr-3 mr-3 hover:underline transition-all duration-300 dark:text-red-400 ${category ? "" : "hidden"}`}
          >
            {category}
          </Link>
        </div>
      </div>
      <div className="grid gap-2 mt-2 lg:grid-cols-6  xl:grid-cols-7">
        <div className="lg:col-span-4 xl:col-span-5">
          {content && content.split("\n\n").map((paragraph, idx) => {
            return <p className="text-lg text-left font-normal mb-2 dark:text-white" key={idx}>{paragraph}</p>
          })}
          {!content && (<div>
            <p className="text-red-800 text-left border border-red-800 my-1 px-2 py-1 rounded-lg bg-red-300 dark:text-red-600 dark:bg-red-100">
              The API does not provide the full article content. Please read the summary below.
              You can <a href={url} target="_blank" className="underline hover:text-blue-600 transition-all">read the full article</a> directly from the source.
            </p>
            <p className="text-lg text-left font-normal dark:text-white">{summary || description }</p>
          </div>)}
        </div>
        <RelatedArticles
          articles={relatedArticles}
        />
      </div>
      <RecentNewsInCategoryOrCountry
        article={article}
        articles={recentArticles}
      />
      <NewsSources />
    </div>
  )
}
