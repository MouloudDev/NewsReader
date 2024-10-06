import { Link } from "react-router-dom";
import NewsCard from "./NewsCard";

export default function LatestNewsPreview() {


  const latestNews = [
    {
      id: 213324808,
      image: "https://media.cnn.com/api/v1/images/stellar/prod/jones-porch.jpg?c=16x9&q=h_653,w_1160,c_fill/f_webp",
      title: "Breaking News: Major Scientific Discovery",
      summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      source: "Source",
      pubDate: "10-11-2024 "
    },
    {
      id: 213324808,
      image: "https://media.cnn.com/api/v1/images/stellar/prod/jones-porch.jpg?c=16x9&q=h_653,w_1160,c_fill/f_webp",
      title: "Breaking News: Major Scientific Discovery",
      summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      source: "Source",
      pubDate: "10-11-2024 "
    },
    {
      id: 213324808,
      image: "https://media.cnn.com/api/v1/images/stellar/prod/jones-porch.jpg?c=16x9&q=h_653,w_1160,c_fill/f_webp",
      title: "Breaking News: Major Scientific Discovery",
      summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      source: "Source",
      pubDate: "10-11-2024 "
    },
    {
      id: 213324808,
      image: "https://media.cnn.com/api/v1/images/stellar/prod/jones-porch.jpg?c=16x9&q=h_653,w_1160,c_fill/f_webp",
      title: "Breaking News: Major Scientific Discovery",
      summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      source: "Source",
      pubDate: "10-11-2024 "
    },
  ]

  return (
    <div className="mx-auto mt-5 w-full max-w-screen-xl">
      <div className="flex justify-between items-end mb-2">
        <h2
          className="text-2xl font-semibold"
        >
          Latest News
        </h2>
        <Link
          to="/latest-news"
          className="text-md text-[#E40000] font-medium block"
        >
          See all
        </Link>
      </div>
      <div className="grid gap-4 grid-cols-1 justify-between min-[550px]:grid-cols-2 lg:gap-8 xl:gap-4 xl:grid-cols-4">
        {latestNews.map((article, i) => {
          const styles = {
            wrapperStyles: "relative flex flex-col justify-start h-fit rounded-lg shadow-md w-full p-3 hover:bg-zinc-100 transition-all duration-300",
            imageStyles: "object-cover w-full h-64 rounded-lg",
            titleStyles: "text-md font-semibold text-left hover:underline transition-all duration-300",
            summaryStyles: "text-sm font-normal text-left mb-2",
            sourceStyles: "text-sm font-bold",
            pubDateStyles: "text-sm font-thin",
            readTextStyles: "text-sm font-bold text-[#E40000] absolute right-3 bottom-3 hover:underline transition-all duration-300"
          }
          return <NewsCard  data={article} styles={styles} key={i}/>
        })}
      </div>
    </div>
  )
}
