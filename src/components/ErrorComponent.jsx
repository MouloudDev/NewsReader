export default function ErrorComponent({ message }) {
  return (
    <div className="p-4 bg-red-100 border border-red-300 text-red-700 rounded-md w-full max-w-screen-xl mx-auto my-3 text-center">
      <svg
        className="w-6 h-6 inline-block mr-2 text-red-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M18.364 5.636L5.636 18.364M5.636 5.636l12.728 12.728"
        ></path>
      </svg>
      <span>{message}</span>
    </div>
  );
}
