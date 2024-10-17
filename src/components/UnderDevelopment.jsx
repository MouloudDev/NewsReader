import { Link } from "react-router-dom";

export default function UnderDevelopment() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-[#2c2c2c] text-gray-800 dark:text-gray-200 px-4">
      <div className="flex flex-col items-center text-center max-w-md">
        {/* SVG Placeholder */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          className="w-40 h-40 mb-6 text-gray-600 dark:text-gray-300"
        >
          <path
            d="M13 2a1 1 0 0 0-2 0v1h-2V2a1 1 0 1 0-2 0v1H6a2 2 0 0 0-2 2v1h16V5a2 2 0 0 0-2-2h-1V2a1 1 0 1 0-2 0v1h-2V2zm7 6H4v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zm-2 8a1 1 0 0 1-2 0v-3a1 1 0 0 1 2 0v3zm-6 0a1 1 0 0 1-2 0v-3a1 1 0 0 1 2 0v3zm-4 0a1 1 0 0 1-2 0v-3a1 1 0 0 1 2 0v3z"
            fill="currentColor"
          />
        </svg>

        <h1 className="text-2xl font-semibold mb-2">Page Under Development</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          We're working hard to bring you this feature. Please check back later.
        </p>

        <Link
          to="/"
          className="px-4 py-2 bg-[#E40000] text-white rounded-lg hover:bg-red-700 dark:bg-red-800 dark:hover:bg-red-600 transition-all duration-300"
        >
          Go Back to Home
        </Link>
      </div>
    </div>
  );
}
