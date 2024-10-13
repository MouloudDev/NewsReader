import TopStories from "./TopStories";
import NewsOverview from "./NewsOverview";
import LatestNewsPreview from "./LatestNewsPreview";
import WorldNews from "./WorldNews";
import NewsResouces from "./NewsSources";

export default function HomePage() {

  return (
    <div className="flex flex-col">
        <TopStories />
        <LatestNewsPreview />
        <WorldNews />
        <NewsOverview />
        <NewsResouces />
    </div>
  )
}
