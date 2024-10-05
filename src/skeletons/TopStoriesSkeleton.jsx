import LeftDirectionArrow from "../Icons/LeftDirectionArrow";
import RightDirectionArrow from "../Icons/rightDirArrow";
import RightSideNavSkeleton from "./RightSideNavSkeleton";

export default function TopStoriesSkeleton() {
  return (
    <div className="w-full flex justify-center gap-4 m-1 max-w-screen-xl mx-auto">
      <div className="flex-grow">
        <h1 className="text-4xl font-bold text-start mb-3 leading-tight">Top Stories</h1>

        <div className="flex border-2 border-gray-300 rounded-lg shadow-sm w-full">

          <div className="justify-center items-center w-10 bg-gradient-to-r from-[#262626] to-[#817676] rounded-l-lg hidden sm:flex">
            <LeftDirectionArrow className="w-10 h-10 fill-white" />
          </div>

          <div className="w-full p-4 transition-opacity duration-500 ease-in-out">
            <div className="relative">
              <div className="w-full h-72 bg-gray-200 animate-pulse rounded-md mb-4 sm:h-80 "></div>

              <div className="absolute bottom-2 left-2 rounded-full bg-white opacity-70 w-8 h-8 sm:hidden"></div>

              <div className="absolute bottom-2 right-2 rounded-full bg-white opacity-70 w-8 h-8 sm:hidden"></div>
            </div>

            <div className="h-6 bg-gray-200 animate-pulse rounded-md w-3/4 mb-2"></div>

            <div className="h-4 bg-gray-200 animate-pulse rounded-md w-full mb-2"></div>
            <div className="h-4 bg-gray-200 animate-pulse rounded-md w-11/12 mb-2"></div>
            <div className="h-4 bg-gray-200 animate-pulse rounded-md w-10/12 mb-4"></div>

            <div className="flex w-full mt-2">
              <div className="h-5 bg-gray-200 animate-pulse rounded-md w-1/4 mr-4"></div>
              <div className="h-4 bg-gray-200 animate-pulse rounded-md w-16 ml-2"></div>
              <div className="h-8 bg-gray-300 animate-pulse rounded-lg w-24 ml-auto"></div>
            </div>
          </div>

          <div className="justify-center items-center w-10 bg-gradient-to-l from-[#262626] to-[#817676] rounded-r-lg hidden sm:flex">
            <RightDirectionArrow className="w-10 h-10 fill-white" />
          </div>
        </div>
      </div>
      <RightSideNavSkeleton />
    </div>
  );
}
