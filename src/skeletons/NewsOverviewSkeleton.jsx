import CategoryHeader from '../components/CategoryHeader';
import NewsCardSkeleton from './NewsCardSkeleton';

export default function NewsOverviewSkeleton() {
  const SkeletonCard = () => (
    <div className="grid gap-2 grid-cols-1 p-1 border-b-2 border-b-zinc-200 rounded-md w-full xl:grid-cols-5 animate-pulse">
      <div className="flex flex-col xl:col-span-3">
        <div className="flex gap-1 items-center">
          <div className="h-8 w-8 rounded-full bg-gray-300"></div>
          <div className="h-6 w-32 bg-gray-300 rounded"></div>
        </div>
        <div className="h-6 w-3/4 bg-gray-300 rounded mt-2"></div>
        <div className="h-4 w-full bg-gray-300 rounded mt-2"></div>
        <div className="h-4 w-2/3 bg-gray-300 rounded my-1"></div>
        <div className="flex items-end mt-auto">
          <div className="h-4 w-20 bg-gray-300 rounded"></div>
          <div className="h-4 w-12 bg-gray-300 rounded ml-auto"></div>
        </div>
      </div>
      <div className="w-full h-48 bg-gray-300 rounded-lg order-[-1] xl:order-[1] xl:col-span-2"></div>
    </div>
  );

  const newsCardStyles = {
    wrapperStyles: "relative flex flex-col justify-start p-1 rounded-lg w-full",
    imageStyles: "w-full h-64 rounded-lg xl:max-h-56",
    titleStyles: "rounded text-md font-semibold text-left",
    summaryStyles: "rounded text-sm font-normal text-left mb-2",
    sourceStyles: "rounded text-sm font-bold",
    pubDateStyles: "rounded text-sm font-thin",
    readTextStyles: "rounded text-sm font-bold text-[#E40000] absolute right-1 bottom-1"
  };

  return (
    <div className="grid gap-2 mx-auto mt-5 w-full max-w-screen-xl xl:grid-cols-7">
      <div className="xl:col-span-4 grid content-between">
        <CategoryHeader category="general" />
        <div className="grid content-between gap-2 md:max-xl:grid-rows-2 md:max-xl:grid-cols-2">
          {[...Array(4)].map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        </div>
      </div>
      <div className="grid content-between gap-2 sm:max-xl:grid-cols-2 xl:col-span-3 xl:pl-3 xl:border-l xl:border-l-zinc-200">
        {['politics', 'sports'].map((category) => (
          <div key={category}>
            <CategoryHeader category={category} />
            <NewsCardSkeleton styles={newsCardStyles} />
          </div>
        ))}
      </div>
    </div>
  );
}
