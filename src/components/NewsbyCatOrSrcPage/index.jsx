import { useParams } from "react-router";
import LatestByCatOrSrc from "./LatestByCatOrSrc";
import MainArticle from "./MainArticle";
import MoreNewsbyCatOrSrc from "./MoreNewsbyCatOrSrc";
import NoNewsAvailable from "./NoNewsAvailable";
import CategoriesNav from "../CategoriesNav";
import NewsSources from "../NewsSources";
import getNewsByCatOrSrc from "../../utils/getNewsByCatOrSrc";

export default function NewsbyCatOrSrcPage() {
  const { category } = useParams();
  const { source } = useParams();

  const {
    mainArticle, latest, more
  } = getNewsByCatOrSrc(category, source);

  const noNewsAvailable =
    !mainArticle && latest.length === 0 && more.length === 0;

  return (
    <div className="mx-auto mt-5 w-full max-w-screen-xl">
      <CategoriesNav />
      <h1 className="text-4xl font-semibold text-left mt-5 mb-3 dark:text-white">
        {category && (category?.charAt(0).toUpperCase() + category.slice(1))}
        {source && `News From ${source?.toUpperCase()}`}
      </h1>
      {mainArticle && <MainArticle article={mainArticle}/>}
      {latest.length > 0 && <LatestByCatOrSrc articles={latest}/>}
      {latest.length > 0 && <MoreNewsbyCatOrSrc articles={more}/>}
      {noNewsAvailable && <NoNewsAvailable />}
      <NewsSources />
    </div>
  )
}
