import { useLatestNews } from "../stores/latestNews";

export default function getRecentArticles(article, allArticles) {
  const { category, country } = article;
  const { latestNews } = useLatestNews.getState();

  const getArticlesByCategory = (category) => {
    return allArticles.filter(({ category: articleCategory }) =>
      articleCategory?.toLowerCase() === category?.toLowerCase()
    ).slice(0, 4); // Get the first 4 articles
  };

  const getArticlesByCountry = (country) => {
    return allArticles.filter(({ country: articleCountry, source_country }) =>
      articleCountry?.toLowerCase() === country?.toLowerCase() ||
      source_country?.toLowerCase() === country?.toLowerCase()
    ).slice(0, 4); // Get the first 4 articles
  };

  // Check for category first, then country
  if (category) {
    return getArticlesByCategory(category);
  } else if (country) {
    return getArticlesByCountry(country);
  } else {
    return latestNews.slice(0, 4); // Fallback to latest articles if no category or country is provided
  }
}
