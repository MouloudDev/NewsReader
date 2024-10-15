import { useState } from "react"
import Magnifier from '../Icons/magnifier.jsx';

export default function SearchForm() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Search term is ==>", searchTerm);
  }

  return (
      <form
        onSubmit={handleSubmit}
        className="flex gap-1 justify-center w-full row-start-2 col-span-2"
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
            className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
          >
              <Magnifier className="text-black dark:text-gray-200" />
          </button>
      </form>
  )
}
