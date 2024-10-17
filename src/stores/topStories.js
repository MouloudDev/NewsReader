import { create } from "zustand";
import { fetchTopStories } from "../services/WorldNews";

export const useTopStories = create((set) => ({
  isLoading: true,
  topStories: [],
  trendingArticles:  [],
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
      console.log("Error ===>", error)
      set({
        isLoading: false,
        error: 'Failed to fetch top stories. Please try again later.',
      });
    }
  },
  showNextRightArticle: () => {
    set(state => {
      const topStoriesLen = state.topStories.length;
      const currIdx = state.currArticleIdx;

      const maxArticles = topStoriesLen > 5 ? 5 : topStoriesLen ;
      const nextIdx = currIdx === maxArticles -1 ? 0 : currIdx + 1;
      return {
        currArticleIdx: nextIdx,
        currArticle: state.topStories[nextIdx]
      };
    });
  },
  showNextLeftArticle: () => {
    set(state => {
      const topStoriesLen = state.topStories.length;
      const currIdx = state.currArticleIdx;

      const maxArticles = topStoriesLen > 5 ? 5 : topStoriesLen ;
      const nextIdx = currIdx === 0 ? (maxArticles - 1) : currIdx - 1;
      return {
        currArticleIdx: nextIdx,
        currArticle: state.topStories[nextIdx]
      };
    });
  }
}))
