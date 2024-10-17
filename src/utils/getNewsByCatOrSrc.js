import { useLatestNews } from "../stores/latestNews";
import { useNewsCategories } from "../stores/newsCategories";
import { useTopStories } from "../stores/topStories";

const getNewsFromOtherStores = (category, source) => {
  const latestNews = useLatestNews.getState().latestNews;
  const topStories = useTopStories.getState().topStories;
  const trendingArticles = useTopStories.getState().trendingArticles;

  const news = [
    ...latestNews,
    ...topStories,
    ...trendingArticles
  ]

  return news.filter(({category: cat, source: src}) =>
    cat?.toLowerCase() === category?.toLowerCase() ||
    src?.toLowerCase() === source?.toLowerCase()
  );
}

export default function (category, source) {
  // Get news from either category or sourc
  // (from categories store)
  const get = useNewsCategories.getState;
  const newsFromCatStore = get()[category] || get()[source] || [];

  // Get news from other stores
  const newsFromOtherStores =
    getNewsFromOtherStores(category, source);

  // Combine all news.
  let news = [
    ...newsFromCatStore,
    ...newsFromOtherStores
  ];

  // Check if `category` is `latest-news`
  // and use latest news from the store
  if (category?.toLowerCase() === "latest-news") {
    const { latestNews } = useLatestNews.getState()
    news = [...news, ...latestNews]
  }

  // Separate articles with and without images
  const articlesWithImgs = news.filter(article => article.image);
  const articlesWithNoImgs = news.filter(article => !article.image);

  // Select a random article with image as the main article
  const randIdx = Math.floor(Math.random() * articlesWithImgs.length);
  const mainArticle = articlesWithImgs[randIdx];

  // Remove the main article from articlesWithImgs
  articlesWithImgs.splice(randIdx, 1);

  // Select up to 3 articles with images for latest
  const latestWithImages = articlesWithImgs.slice(0, 3);

  // Combine with articles without images.
  const latest = [
    ...latestWithImages,
    ...articlesWithNoImgs
  ];

  // The rest of the articles with images go to 'more'
  const more = articlesWithImgs.slice(3);

  return { mainArticle, latest, more };
}
