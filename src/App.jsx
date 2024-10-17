import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopBar from "./components/TopBar";
import HomePage from "./components/HomePage";
import ArticleFullView from "./components/ArticleFullView";
import { useEffect } from "react";
import { useTopStories } from "./stores/topStories";
import { useLatestNews } from "./stores/latestNews";
import { useNewsCategories } from "./stores/newsCategories";
import Footer from "./components/Footer";
import NewsbyCatOrSrcPage from "./components/NewsbyCatOrSrcPage";
import './App.css'
import UnderDevelopment from "./components/UnderDevelopment";
import NotFound from "./components/NotFound";
import SearchPage from "./components/SearchPage";

function App() {
  const fetchTopStories = useTopStories(state => state.fetchData);
  const fetchLatestNews = useLatestNews(state => state.fetchData);
  const fetchNewsCategories = useNewsCategories(state => state.fetchData);

  const quickLinks = [
    "Home", "About us",
    "contact", "Privacy policy",
    "terms of service"
  ];

  useEffect(() => {
    const fetchData = async () => {
      await fetchTopStories(),
      await fetchLatestNews(),
      await fetchNewsCategories()
    }
    fetchData();
  }, []);

  return (
    <div className="flex flex-col justify-between min-h-screen dark:bg-[#2c2c2c]">
      <Router>
        <TopBar />
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/article/:articleId" element={<ArticleFullView />} />
          <Route path="/news/:source" element={<NewsbyCatOrSrcPage />} />
          <Route path="/category/:category" element={<NewsbyCatOrSrcPage />} />
          <Route path="/search" element={<SearchPage />} />
          {quickLinks.map((link, idx) => {
            let formattedLink = link.toLowerCase().replace(/\s+/g, '-');
            const path = formattedLink === "home" ? "/" : `/${formattedLink}`;
            return (
              <Route
                path={path}
                element={<UnderDevelopment />}
                key={idx}
              />
            );
          })}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App;
