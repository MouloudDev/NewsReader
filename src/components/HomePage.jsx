import LatestNewsPreview from "./LatestNewsPreview";
import TopStories from "./TopStories";

export default function HomePage() {

  return (
    <div className="flex flex-col">
        <TopStories />
        <LatestNewsPreview />
    </div>
  )
}
