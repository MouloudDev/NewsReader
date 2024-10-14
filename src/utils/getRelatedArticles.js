export default function getRelatedArticles(article, allArticles) {
  const { category, source, author } = article;

  // Check for related articles by the same category
  if (category) {
    const relatedByCategory = allArticles.filter(
      ({ id, category: articleCategory }) =>
        articleCategory?.toLowerCase() === category?.toLowerCase() && id !== article.id
    );

    if (relatedByCategory.length > 0) return relatedByCategory.slice(0, 3);
  }

  // If no related articles by category, check for articles by the same source
  if (source) {
    const relatedBySource = allArticles.filter(
      ({ id, source: articleSource }) =>
        articleSource?.toLowerCase() === source?.toLowerCase() && id !== article.id
    );

    if (relatedBySource.length > 0) return relatedBySource.slice(0, 3);
  }

  // If no related articles by source, check for articles by the same author
  if (author) {
    const relatedByAuthor = allArticles.filter(
      ({ id, author: articleAuthor }) =>
        articleAuthor && articleAuthor?.toLowerCase() === author?.toLowerCase() && id !== article.id
    );

    if (relatedByAuthor.length > 0) return relatedByAuthor.slice(0, 3);
  }

  // Fallback: If no related articles found, return the last 3 articles
  return allArticles.slice(allArticles.length - 3);
}
