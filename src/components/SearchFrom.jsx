import { useState } from "react"
import Magnifier from '../Icons/magnifier.jsx';

export default function SearchFrom() {
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
              className="rounded-md p-[6px] w-full sm:max-w-96 text-black"
            />
            <button
              type="submit"
            >
                <Magnifier />
            </button>
        </form>
    )
}
