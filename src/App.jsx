import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopBar from "./components/TopBar";
import HomePage from "./components/HomePage";
import ArticleFullView from "./components/ArticleFullViews";
import './App.css'

function App() {

  return (
    <div>
      <Router>
        <TopBar />
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/article/:articleId" element={<ArticleFullView />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
