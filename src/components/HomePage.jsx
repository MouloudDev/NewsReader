import { useEffect } from "react";
import LatestNewsPreview from "./LatestNewsPreview";
import TopStories from "./TopStories";
import { useTopStories } from "../stores/topStories";
import { useLatestNews } from "../stores/latestNews";

export default function HomePage() {
  const fetchTopStories = useTopStories(state => state.fetchData);
  const fetchLatestNews = useLatestNews(state => state.fetchData);

  useEffect(() => {
    const fetchData = async () => {
      await Promise.all([fetchTopStories(), fetchLatestNews()])
    }
    fetchData();
  }, [])

  return (
    <div className="flex flex-col">
        <TopStories />
        <LatestNewsPreview />
    </div>
  )
}
