import getAllArticlesInStore from "./getAllArticlesInStore";
import getRecentArticles from "./getRecentArticles";
import getRelatedArticles from "./getRelatedArticles";

export default function getArticleDataById(id) {
  const allArticles = getAllArticlesInStore();
  let article = allArticles.find(article => article.id.toString() === id.toString());

  if (!article) return null;

  // Format the article
  article = {
    ...article,
    content: article.content || article.text,
    pubDate: article.pubDate || article.publish_date,
    country: article.country || article.source_country
  }

  const relatedArticles = getRelatedArticles(article, allArticles);
  const recentArticles = getRecentArticles(article, allArticles);

  return {
    article,
    relatedArticles,
    recentArticles
  }
}
