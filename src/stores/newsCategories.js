import { create } from "zustand";
import { fetchNewsByCategory } from "../services/NewsData";

export const useNewsCategories = create((set, get) => ({
  isLoading: true,
  world: [],
  general: [],
  politics: [],
  sports: [],
  fetchData: async () => {
    try {
      const categories = ["world", "general", "politics", "sports"];
      const [
        {news: world},
        {news: general},
        {news: politics},
        {news: sports},
      ] = await Promise.all(categories.map(category => fetchNewsByCategory(category)));
      set({ isLoading: false, world, general, politics, sports, error: null });
    } catch (error) {
      console.log("Error ==>", error)
      set({
        isLoading: false,
        error: 'Failed to fetch news. Please try again later.',
      });
    }
  },
  getWorldNews: () => {
    const { isLoading, world } = get();
    return {
      isLoading,
      mainArticle: world[0],
      secArticles:  [world[1], world[2]],
      restOfArticles: world.slice(3)
    }
  },
  getNewsOverview: () => {
    const {general, politics, sports, isLoading} = get();
    const randIdx1 = Math.floor(Math.random() * (general.length - 4));
    const randIdx2 = Math.floor(Math.random() * politics.length);
    const randIdx3 = Math.floor(Math.random() * sports.length);
    return {
      isLoading,
      general: general.slice(randIdx1, randIdx1 + 4),
      politics: politics[randIdx2],
      sports: politics[randIdx3],
    }
  },
}))
