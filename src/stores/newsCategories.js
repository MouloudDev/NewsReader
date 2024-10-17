import { create } from "zustand";
import fetchNewsByCategory from "../utils/fetchNewsByCategory";

export const useNewsCategories = create((set, get) => ({
  isLoading: true,
  world: [],
  general: [],
  politics: [],
  sports: [],
  business: [],
  science: [],
  technology: [],
  health: [],
  entertainment: [],
  fetchData: async () => {
    try {
      const categories = [
        "mixed",
        "world",
        "general",
        "politics",
        "sports",
        // "business",
        // "science", "technology",
        // "health", "entertainment"
      ];
      const [
        {news: mixed},
        {news: world},
        {news: general},
        {news: politics},
        {news: sports},
        // { news: business },
        // {news: science},
        // {news: technology},
        // {news: health},
        // {news: entertainment},
      ] = await Promise.all(categories.map(category => fetchNewsByCategory(category)));
      set({
        isLoading: false,
        world,
        general: [...general, ...mixed.general],
        politics: [...politics, ...mixed.politics],
        sports: [...sports, ...mixed.sports],
        // business,
        // science,
        // technology,
        // health,
        // entertainment,
        error: null
      });
    } catch (error) {
      set({
        isLoading: false,
        error: 'Failed to fetch news. Please try again later.',
      });
    }
  },
  getWorldNews: () => {
    const { isLoading, world, error } = get();
    return {
      isLoading,
      mainArticle: world[0],
      secArticles: [world[1], world[2]],
      restOfArticles: world.slice(3),
      error
    }
  },
  getNewsOverview: () => {
    const { isLoading, general, politics, sports, error } = get();
    const randIdx1 = Math.floor(Math.random() * (general.length - 4));
    const randIdx2 = Math.floor(Math.random() * politics.length);
    const randIdx3 = Math.floor(Math.random() * sports.length);
    return {
      isLoading,
      general: general.slice(randIdx1, randIdx1 + 4),
      politics: politics[randIdx2],
      sports: politics[randIdx3],
      error
    }
  },
}))
