import { Link } from "react-router-dom";

export default function ArticleNotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">
        We're sorry, we couldn't find this article.
      </h1>
      <p className="text-gray-600 dark:text-gray-400 text-lg mb-8">
        The article you are looking for may have been moved or deleted.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-[#E40000] text-white rounded-lg hover:bg-red-700 dark:bg-red-800 dark:hover:bg-red-600 transition-all duration-300"
      >
        Go Back Home
      </Link>
    </div>
  );
}
