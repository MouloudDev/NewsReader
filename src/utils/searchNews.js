import getAllArticlesInStore from "./getAllArticlesInStore";

export default function searchNews(searchTerm) {
  return new Promise(resolve => {
    const news = getAllArticlesInStore();
    const lowerCaseTerm = searchTerm?.toLowerCase().trim() || "";

    if (!lowerCaseTerm.length) resolve([]);

    const results = news.filter(article => {
      const { title, summary, content } = article;

      // Check if the search term exists in title, summary, or content
      return (
        title.toLowerCase().includes(lowerCaseTerm) ||
        summary.toLowerCase().includes(lowerCaseTerm) ||
        content.toLowerCase().includes(lowerCaseTerm)
      );
    });
    return resolve(results)
  })
}
