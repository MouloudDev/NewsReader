import formatNews from "../utils/formatNews";
const apiKey = import.meta.env.VITE_MEDIASTACK_API_KEY;

// Fetches news by category from mediastack.
export const fetchMediaStackCategory = async (category) => {
  let url =  `https://api.mediastack.com/v1/news?access_key=${apiKey}&categories=${category}&languages=en&limit=40`;

  if (category === "mixed") {
    url =  `https://api.mediastack.com/v1/news?access_key=${apiKey}&categories=general,politics,sports&languages=en&limit=40`;
  }

  try {
    const response = await fetch(url);

    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    const data = await response.json();

    const formattedData = formatNews(data);

    if (category === "mixed") {
      return {news: groupMixedNews(formattedData)}
    }

    return {news: formattedData};
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error)
  }
}

function groupMixedNews(news) {
  const categories = ["general", "politics", "sports"];
  const groupedNews = {};

  categories.forEach(category => {
    groupedNews[category] = news.filter(({ category: newsCategory }) =>
      newsCategory.toLowerCase() === category
    );
  });

  return groupedNews;
};

const getDateRange = (days) => {
  const today = new Date();
  const pastDate = new Date();
  pastDate.setDate(today.getDate() - days);

  const formatDate = (date) => date.toISOString().split('T')[0];

  return `${formatDate(pastDate)},${formatDate(today)}`;
};

// Fetch top Stories in the last 3 days.
export const fetchStoriesFromMediaStack = async () => {
  const url = `https://api.mediastack.com/v1/news?access_key=${accessKey}&date=${getDateRange(4)}&languages=en`;
  try {
    const response = await fetch(url);

    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    const data = await response.json();

    const formattedData = formatNews(data);

    const topStories = formattedData?.slice(0, 6);
    const trendingArticles =
      formattedData?.slice(topStories.length, topStories.length + 6);

    return { topStories, trendingArticles }
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error)
  }
}

// Fetch latest news in the last 24 hours.
export const fetchLatestNewsFromMediastack = async () => {
  const url = `https://api.mediastack.com/v1/news?access_key=${accessKey}&date=${getDateRange(1)}&languages=en`;
  try {
    const response = await fetch(url);

    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    const data = await response.json();

    return {latestNews: formatNews(data)};
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error)
  }
}
