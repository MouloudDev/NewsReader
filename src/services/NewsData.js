const formatLatestNews = (data) => {
  const res = data["results"];
  const formattedNews = res.map(article => {
    const {
      article_id, image_url, title,
      description, text, source_name,
      source_icon, pubDate
    } = article;

    return {
      id: article_id,
      image: image_url,
      title: title,
      summary: description,
      content: text,
      source: source_name,
      sourceIcon: source_icon,
      pubDate: pubDate,
    }
  })

  return formattedNews
}

export const fetchLatestNews = async () => {
  const apiKey = import.meta.env.VITE_NEWS_DATA_IO_API_KEY;
  const url = `https://newsdata.io/api/1/latest?apikey=${apiKey}&language=en&removeduplicate=1`;

  try {
    const response = await fetch(url);

    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    const data = await response.json();
    return {latestNews: formatLatestNews(data)};
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error)
  }
}
