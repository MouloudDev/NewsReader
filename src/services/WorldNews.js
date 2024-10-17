import formatNews from "../utils/formatNews";

export const fetchTopStories = async () => {
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

        const formattedData = formatNews(data);

        const topStories = formattedData?.slice(0, 6);
        const trendingArticles =
          formattedData?.slice(topStories.length, topStories.length + 6);

        return { topStories, trendingArticles }
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error)
    }
}
