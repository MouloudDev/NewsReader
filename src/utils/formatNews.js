export default function formatNews(data) {
  const res = data["results"];

  const formattedNews = res.map(article => {
    const {
      article_id, image_url, title,
      description, text, source_name,
      source_icon, pubDate
    } = article;

    return {
      id: article_id ,
      image: image_url,
      title: title,
      summary: description,
      content: text,
      source: source_name,
      sourceIcon: source_icon,
      pubDate: pubDate,
    }
  })

  // Place articles with a thumbnail image first.
  return formattedNews.sort((a, b) => {
    if (a.image !== null && b.image === null) return -1;
    else if (a.image === null && b.image !== null) return 1;
    return 0;
  });
}
