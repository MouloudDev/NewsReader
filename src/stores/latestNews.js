import { create } from "zustand";
import { fetchLatestNews } from "../services/NewsData";
import { fetchLatestNewsFromMediastack } from "../services/mediastack";

export const useLatestNews = create((set, get) => ({
  isLoading: true,
  latestNews: [],
  latestNewsPreview: [],
  fetchData: async () => {
    try {
      const { latestNews } = await fetchLatestNews();
      set({
        isLoading: false,
        latestNews,
        latestNewsPreview: latestNews.slice(0, 4),
        error: null,
      });
    } catch (error) {
      // Attempt to fetch from the alternative source if the first fetch fails
      try {
        const { latestNews } = await fetchLatestNewsFromMediastack();
        set({
          isLoading: false,
          latestNews,
          latestNewsPreview: latestNews.slice(0, 4),
          error: null,
        });
      } catch (secondError) {
        set({
          isLoading: false,
          error: 'Failed to fetch latest news. Please try again later.',
        });
      }
    }
  }
}))
