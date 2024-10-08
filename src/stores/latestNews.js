import { create } from "zustand";
import { fetchLatestNews } from "../services/NewsData";

export const useLatestNews = create((set) => ({
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
      set({
        isLoading: false,
        error: 'Failed to fetch latest news. Please try again later.',
      });
    }
  }
}))
