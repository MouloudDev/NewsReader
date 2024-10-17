import formatNews from "../utils/formatNews";

const apiKey = import.meta.env.VITE_NEWS_DATA_IO_API_KEY;

export const fetchLatestNews = async () => {
  const url = `https://newsdata.io/api/1/latest?apikey=${apiKey}&language=en&removeduplicate=1`;

  try {
    const response = await fetch(url);

    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    const data = await response.json();

    return {latestNews: formatNews(data)};
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error)
  }
}

// Fetches news by category from NewsData.io
export const fetchNewsDataCategory = async (category) => {
  let url = `https://newsdata.io/api/1/latest?apikey=${apiKey}&language=en&removeduplicate=1&`
  if (category.toLowerCase() === "general") {
    url += "category=business,entertainment,food";
  } else url += `category=${category.toLowerCase()}`

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    const data = await response.json();
    return {news: formatNews(data)};
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error)
  }
}
