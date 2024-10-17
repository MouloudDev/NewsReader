import { create } from "zustand";
import fetchNewsByCategory from "../utils/fetchNewsByCategory";

const fetchNewsForCategory = async (category) => {
  try {
    const { news } = await fetchNewsByCategory(category);
    return news;
  } catch (error) {
    console.error(`Failed to fetch news for category "${category}":`, error);
    return [];
  }
};

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

    const categoryResults = {
      mixed: [],
      world: [],
      general: [],
      politics: [],
      sports: []
    };

    try {
      // Fetch each category sequentially using the helper function
      for (const category of categories) {
        categoryResults[category] = await fetchNewsForCategory(category);
      }

      const { mixed, world, general, politics, sports } = categoryResults;

      set({
        isLoading: false,
        world,
        general: [...general, ...mixed.general],
        politics: [...politics, ...mixed.politics],
        sports: [...sports, ...mixed.sports],
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
    const {
      isLoading, error, world,
      politics, sports, business,
      science, technology, health,
      entertainment
    } = get();

    const allNews = [
      ...world, ...politics, ...sports,
      ...business, ...science, ...technology,
      ...health, ...entertainment
    ]

    const results = {isLoading, error};

    if (world.length < 3) {
      results.mainArticle = allNews[0]
      results.secArticles = [allNews[1], allNews[2]]
      results.restOfArticles = allNews.slice(3, 9)
    }

    return {
      ...results,
      mainArticle: world[0],
      secArticles: [world[1], world[2]],
      restOfArticles: world.slice(3),
    }
  },
  getNewsOverview: () => {
    const {
      isLoading, error, general, world,
      politics, sports, business,
      science, technology, health,
      entertainment
    } = get();

    const allNews = [
      ...world, ...politics, ...sports,
      ...business, ...science, ...technology,
      ...health, ...entertainment
    ];

    const safeRandomIndex = (arr) => Math.floor(Math.random() * arr.length);
    const safeRandomIndexForSlice = (arr, count) =>
      Math.floor(Math.random() * Math.max(0, arr.length - count));

    let randIdx1 = safeRandomIndexForSlice(general, 4);
    let randIdx2 = safeRandomIndex(politics);
    let randIdx3 = safeRandomIndex(sports);

    const results = { isLoading, error };

    // Select general news - fallback to allNews if insufficient general news
    if (general.length < 4) {
      randIdx1 = safeRandomIndexForSlice(allNews, 4);
      results.general = allNews.slice(randIdx1, randIdx1 + 4);
    } else {
      results.general = general.slice(randIdx1, randIdx1 + 4);
    }

    // Select one random political article - fallback to allNews if insufficient
    if (politics.length < 2) {
      randIdx2 = safeRandomIndex(allNews);
      results.politics = allNews[randIdx2];
    } else {
      results.politics = politics[randIdx2];
    }

    // Select one random sports article - fallback to allNews if insufficient
    if (sports.length < 2) {
      randIdx3 = safeRandomIndex(allNews);
      results.sports = allNews[randIdx3];
    } else {
      results.sports = sports[randIdx3];
    }

    return results;
  },
}))
