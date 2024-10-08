import { create } from "zustand";
import { fetchTopStories } from "../services/WorldNews";

export const useTopStories = create((set) => ({
  isLoading: true,
  topStories: [],
  trendingArticles: [],
  currArticle: {},
  currArticleIdx: 0,
  fetchData: async () => {
    try {
      const { topStories, trendingArticles } = await fetchTopStories();
      set(state => ({
        isLoading: false,
        topStories,
        currArticle: topStories[state.currArticleIdx],
        trendingArticles,
        error: null,
      }));
    } catch (error) {
      set({
        isLoading: false,
        error: 'Failed to fetch top stories. Please try again later.',
      });
    }
  },

  showNextRightArticle: () => {
    set(state => {
      const maxArticles = state.topStories.length > 5 ? 5 : state.topStories.length ;
      const nextIdx = state.currArticleIdx === maxArticles ? 0 : state.currArticleIdx + 1;
      return {
        currArticleIdx: nextIdx,
        currArticle: state.topStories[nextIdx]
      };
    });
  },

  showNextLeftArticle: () => {
    set(state => {
      const maxArticles = state.topStories.length > 5 ? 5 : state.topStories.length ;
      const nextIdx = state.currArticleIdx === 0 ? maxArticles : state.currArticleIdx - 1;
      return {
        currArticleIdx: nextIdx,
        currArticle: state.topStories[nextIdx]
      };
    });
  }
}))
