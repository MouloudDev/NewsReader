import { useLatestNews } from "../stores/latestNews";
import { useNewsCategories } from "../stores/newsCategories";
import { useTopStories } from "../stores/topStories";

export default function getAllArticlesInStore() {
  const latestNews = useLatestNews.getState().latestNews;
  const topStories = useTopStories.getState().topStories;
  const trendingArticles = useTopStories.getState().trendingArticles;
  const {
    world, general,
    politics, sports
  } = useNewsCategories.getState();

  return [
    ...latestNews,
    ...topStories,
    ...trendingArticles,
    ...world, ...general,
    ...politics, ...sports
  ]
}
