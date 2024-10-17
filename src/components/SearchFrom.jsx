import { useState } from "react"
import Magnifier from '../Icons/magnifier.jsx';
import { useLocation, useNavigate } from "react-router";

export default function SearchForm() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const onSearchPage = pathname.startsWith("/search");

  const handleSubmit = (e) => {
      e.preventDefault();

      const query = searchTerm.trim();
      if (!query.length) return;

      const searchUrl = `/search?query=${query}`;
      navigate(searchUrl);
  }

  return (
      <form
        onSubmit={handleSubmit}
        className={`flex gap-1 justify-center w-full row-start-2 col-span-2 ${onSearchPage ? "hidden" : ""}`}
      >
          <input
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
            type="text"
            placeholder="Search NewsWave"
            className="rounded-md p-[6px] w-full sm:max-w-96 text-black dark:text-gray-200 bg-white dark:bg-[#2c2c2c] border border-gray-300 dark:border-gray-600 placeholder:text-gray-400 dark:placeholder:text-gray-500"
          />
          <button
            type="submit"
            className="p-2 border rounded-lg hover:border border-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
          >
              <Magnifier className="text-black dark:text-gray-200" />
          </button>
      </form>
  )
}
