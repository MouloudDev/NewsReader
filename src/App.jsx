import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopBar from "./components/TopBar";
import HomePage from "./components/HomePage";
import ArticleFullView from "./components/ArticleFullViews";
import { useEffect } from "react";
import { useTopStories } from "./stores/topStories";
import { useLatestNews } from "./stores/latestNews";
import { useNewsCategories } from "./stores/newsCategories";
import './App.css'

function App() {
  const fetchTopStories = useTopStories(state => state.fetchData);
  const fetchLatestNews = useLatestNews(state => state.fetchData);
  const fetchNewsCategories = useNewsCategories(state => state.fetchData);

  useEffect(() => {
    const fetchData = async () => {
      await Promise.all([
        fetchTopStories(),
        fetchLatestNews(),
        fetchNewsCategories()
      ]);
    }
    fetchData();
  }, [])

  return (
    <div>
      <Router>
        <TopBar />
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/article/:articleId" element={<ArticleFullView />} />
          <Route path="/latest-news" element={<div>Latest News articles</div>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
