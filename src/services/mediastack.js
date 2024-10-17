import formatNews from "../utils/formatNews";
const apiKey = import.meta.env.VITE_MEDIASTACK_API_KEY;

// Fetches news by category from mediastack.
export const fetchMediaStackCategory = async (category) => {
  let url =  `https://api.mediastack.com/v1/news?access_key=${apiKey}&categories=${category}&language=en&limit=40`;

  if (category === "mixed") {
    url =  `https://api.mediastack.com/v1/news?access_key=${apiKey}&categories=general,politics,sports&language=en&limit=40`;
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
}
