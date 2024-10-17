import { nanoid } from 'nanoid';

export default function formatNews(responseData) {
  let articles = [];
  let source;
  // Determine the source and extract articles
  if (responseData.data) {
      // Mediastack
      articles = responseData.data;
      source = "mediastack";
  } else if (responseData.news) {
      // Worldnews API
      articles = responseData.news;
      source = "worldnews";
  } else if (responseData.top_news) {
    // Worldnews API
    articles = responseData.top_news.map(news => news.news).flat(Infinity);
    source = "worldnews";
  }
  else if (responseData.results) {
      // Newdata.io
      articles = responseData.results;
      source = "newsdata";
  }

  // Format each article
  const formattedArticles = articles.map(article => {
    let articleCat;
    let articleCntry;
    if (source !== "newsdata") {
      articleCat = article.category;
      articleCntry = article.country
    } else {
      articleCat = article.country[0];
      articleCntry = article.country[0]
    }
    return {
      ...article, // Include all other original properties.
      id: article.id || article.article_id || nanoid(),
      image: article.image || article.image_url || null,
      title: article.title || "No Title Was Provided",
      summary: article.summary || article.description || "",
      content: article.text || article.content || "",
      source: article.source || article.source_name || "",
      sourceIcon: article.source_icon || "",
      url: article.url || article.source_url,
      country: articleCntry || "",
      category: articleCat || "",
      pubDate:
        article.published_at?.slice(0, 10) ||
        article.pubDate?.slice(0, 10) ||
        article.publish_date?.slice(0, 10) || "",
    }
  });

  const uniqueArtilces = removeDuplicates(formattedArticles);

   // Place articles with a thumbnail image first.
   return uniqueArtilces.sort((a, b) => {
    if (a.image !== null && b.image === null) return -1;
    else if (a.image === null && b.image !== null) return 1;
    return 0;
  });
}

function removeDuplicates(articles) {
  const isSimilar = (str1, str2) => {
    // Convert strings to lowercase, remove punctuation, and split into words
    const words1 = str1.toLowerCase().replace(/[^\w\s]/g, "").split(" ");
    const words2 = str2.toLowerCase().replace(/[^\w\s]/g, "").split(" ");

    // Find common words
    const commonWords = words1.filter(word => words2.includes(word));

    // Define a threshold; adjust as needed
    const threshold = Math.min(words1.length, words2.length) * 0.5;

    return commonWords.length >= threshold;
  };

  // Filter out duplicates
  const uniqueArticles = articles.reduce((unique, currentArticle) => {
    // Check if currentArticle is similar to any of the articles in the unique list
    const isDuplicate = unique.some(existingArticle =>
      isSimilar(currentArticle.title, existingArticle.title) ||
      isSimilar(currentArticle.summary, existingArticle.summary)
    );

    // If not a duplicate, add to the list
    if (!isDuplicate) {
      unique.push(currentArticle);
    }

    return unique;
  }, []);

  return uniqueArticles;
}
