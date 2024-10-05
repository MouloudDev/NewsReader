const filterTopNews = (data) => {
    /***
      takes data as a param and returns
      unique artciles by removing duplicates
    ***/
    const topNews = data["top_news"].slice(0, 3);
    const possiblySimilarTitles = new Set();
    const filteredArticles = [];

    topNews.forEach(articlesArr => {
        const news = articlesArr["news"];
        news.forEach(article => {
            const title = article.title;
            const firstTwoWrods = title.split(" ").slice(0, 2).join("-").toLowerCase();
            if (!possiblySimilarTitles.has(firstTwoWrods)) {

                // Check if the article has the required props
                if (article.title
                    && article.text
                    && article.summary
                    && article.image
                    && article.publish_date
                    && (article.author || article.source)
                ) {
                    filteredArticles.push(article);
                }

                possiblySimilarTitles.add(firstTwoWrods)
            }
        })
    })

    return filteredArticles
}

const getTrendingArticles = (data) => {
    /***
      takes data as a param and returns
      the top 6 trending articles
    ***/

    if (!data || !data.top_news) {
        return [];
    }

    const allArticles = data.top_news.flatMap(category => category.news);

    const sortedArticles = allArticles.sort((a, b) => new Date(b.publish_date) - new Date(a.publish_date));

    // Return the top 6 trending articles
    return sortedArticles.slice(0, 6).map(article => ({
        id: article.id,
        title: article.title,
        text: article.text,
        summary: article.summary,
        url: article.url,
        image: article.image,
        video: article.video,
        publish_date: article.publish_date,
        author: article.author,
        authors: article.authors,
    }));
}

export async function fetchTopNews() {
    const url = 'https://api.worldnewsapi.com/top-news?source-country=us&language=en';

    const options = {
        method: 'GET',
        headers: {
            'x-api-key': import.meta.env.VITE_WORLD_NEWS_API_KEY
        }
    }

    try {
        const response = await fetch(url, options);

        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

        const data = await response.json();
        const filteredTopNews = filterTopNews(data);
        const trendingArticles = getTrendingArticles(data);

        return {
            filteredTopNews,
            trendingArticles
        }
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error)
    }
}
