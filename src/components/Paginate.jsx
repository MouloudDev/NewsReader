import { useState } from "react";
import NewsCard from "./NewsCard";

export default function Paginate({ articles, searchTerm }) {
  if (!articles.length) return (
    <div className="text-left text-gray-600 mt-4 dark:text-white">
      <p>No search results were found for '{searchTerm}'.</p>
    </div>
  );

  const [currPage, setCurrPage] = useState(1);
  const articlesPerPage = 6;
  const numOfPages = Math.ceil(articles.length / articlesPerPage);

  const firstIndex = (currPage - 1) * articlesPerPage;
  const lastIndex = firstIndex + articlesPerPage;
  const currentArticles = articles.slice(firstIndex, lastIndex);

  const handlePrev = () => {
    if (currPage > 1) setCurrPage(currPage - 1);
  };

  const handleNext = () => {
    if (currPage < numOfPages) setCurrPage(currPage + 1);
  };

  const handleSortChange = (e) => {
    const sortOption = e.target.value;
    console.log("Sort articles by", sortOption);
  };

  const newsCardStyles = {
    wrapperStyles: "flex flex-col justify-start rounded-lg border border-zinc-200 shadow-md w-full p-2 hover:bg-zinc-100 transition-all duration-300 dark:bg-[#2c2c2c] dark:border-gray-300 dark:hover:bg-zinc-800",
    imageStyles: "object-cover w-full h-64 rounded-lg dark:border-gray-300",
    titleStyles: "text-md font-semibold text-left hover:underline transition-all duration-300 dark:text-white",
    summaryStyles: "text-sm font-normal text-left mb-2 dark:text-gray-300",
    sourceStyles: "text-sm font-bold dark:text-gray-200",
    pubDateStyles: "text-sm font-thin dark:text-gray-200",
    readTextStyles: "text-sm font-bold text-[#E40000] hover:underline transition-all duration-300 dark:text-[#E40000]"
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <span className="text-sm text-gray-600 dark:text-white">
          Displaying {((currPage - 1) * 6) +1}-{Math.min(currPage * 6, articles.length)} results out of {articles.length} for '{searchTerm}'
        </span>
        <select
          onChange={handleSortChange}
          className="text-sm bg-gray-100 border border-gray-300 rounded-lg px-2 py-1 dark:bg-[#2c2c2c] dark:border-gray-600 dark:text-white"
        >
          <option value="latest">Newest</option>
          <option value="oldest">Oldest</option>
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {currentArticles.map((article, idx) => (
          <NewsCard data={article} styles={newsCardStyles} key={idx} />
        ))}
      </div>
      <div className="flex justify-center items-center mt-8">
        <button
          onClick={handlePrev}
          disabled={currPage === 1}
          className={`px-4 py-2 border rounded-l-md ${currPage === 1 ? 'bg-gray-300 dark:bg-gray-600 cursor-not-allowed' : 'bg-gray-200 dark:bg-[#2c2c2c] hover:bg-gray-300 dark:hover:bg-gray-600'} dark:text-white`}
        >
          Prev
        </button>

        {Array.from({ length: numOfPages }, (_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrPage(idx + 1)}
            className={`px-4 py-2 border ${currPage === idx + 1 ? 'bg-[#E40000] text-white' : 'bg-gray-200 dark:bg-[#2c2c2c] hover:bg-gray-300 dark:hover:bg-gray-600'} dark:text-white`}
          >
            {idx + 1}
          </button>
        ))}

        <button
          onClick={handleNext}
          disabled={currPage === numOfPages}
          className={`px-4 py-2 border rounded-r-md ${currPage === numOfPages ? 'bg-gray-300 dark:bg-gray-600 cursor-not-allowed' : 'bg-gray-200 dark:bg-[#2c2c2c] hover:bg-gray-300 dark:hover:bg-gray-600'} dark:text-white`}
        >
          Next
        </button>
      </div>
    </div>
  );
}
