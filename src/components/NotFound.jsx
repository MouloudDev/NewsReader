import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-[#2c2c2c] text-gray-800 dark:text-gray-200 px-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-24 w-24 text-gray-400 mb-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12h6m-6 4h6m1 7H8a2 2 0 01-2-2V5a2 2 0 012-2h8a2 2 0 012 2v16a2 2 0 01-2 2z"
        />
      </svg>
      <h1 className="text-2xl font-semibold mb-2">404 - Page Not Found</h1>
      <p className="text-center mb-6">
        Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
      </p>
      <Link
        to="/"
        className="px-4 py-2 bg-[#E40000] text-white rounded-lg hover:bg-red-700 dark:bg-red-800 dark:hover:bg-red-600 transition-all duration-300"
      >
        Go Back Home
      </Link>
    </div>
  );
}
