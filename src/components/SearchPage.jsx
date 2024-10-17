import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { MdClear } from "react-icons/md";
import searchNews from "../utils/searchNews";
import Paginate from "./Paginate";

export default function SearchPage() {
  const [searchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(
    searchParams.get("query") || ""
  );
  const [foundArticles, setFoundArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const search = async () => {
      const articles = await searchNews(searchTerm);
      setFoundArticles(articles);
      setLoading(false);
    };
    search();
  }, []);

  const categories = ["All", "Technology", "Business", "Sports", "Entertainment"];

  const handleSearchChange = (e) => setSearchTerm(e.target.value);
  const handleCaegoryChange = (category) => {
    console.log("Search news in --", category, "-- category")
  };
  const handleClearSearch = () => setSearchTerm("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const articles = await searchNews(searchTerm);
    setFoundArticles(articles);
    setLoading(false);
  };

  if (loading) return <div className="text-center">Loading...</div>;

  return (
    <div className="p-5 max-w-screen-xl mx-auto w-full">
      <div className="flex items-center bg-gray-100 dark:[#2c2c2c] rounded-lg px-2 py-1">
        <form onSubmit={handleSubmit} className="flex justify-between w-full">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search for articles..."
            className="w-full bg-transparent outline-none p-[6px] text-gray-800 "
          />
          <button type="submit">
            <FiSearch className="text-[#2c2c2c] mr-2 dark:text-gray-300" />
          </button>
        </form>
        {searchTerm && (
          <MdClear
            onClick={handleClearSearch}
            className="text-gray-500 cursor-pointer ml-2 dark:text-gray-300"
          />
        )}
      </div>

      <div className="flex items-center gap-3 mt-5 mb-2">
        {categories.map((category, idx) => (
          <button
            key={idx}
            className="px-3 py-1 border border-gray-300 rounded-lg text-sm hover:bg-gray-200 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700"
            onClick={() => handleCaegoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <hr className="border-gray-300 my-4 dark:border-gray-200" />

      <Paginate
        articles={foundArticles}
        searchTerm={searchTerm}
      />
    </div>
  );
}
