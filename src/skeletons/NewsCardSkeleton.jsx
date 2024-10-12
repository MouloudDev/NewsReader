export default function NewsCardSkeleton({styles}) {
  const {
    wrapperStyles,
    imageStyles,
    titleStyles,
    summaryStyles,
    sourceStyles,
    pubDateStyles,
    readTextStyles
  } = styles;

  return (
    <div className={wrapperStyles}>
       <div className={`${imageStyles} bg-gray-300 animate-pulse`}></div>

       <div className={`${titleStyles} bg-gray-300 animate-pulse h-6 mt-3 w-3/4`}></div>

       <div className={`${summaryStyles} bg-gray-300 animate-pulse h-4 w-full mt-2`}></div>
       <div className={`${summaryStyles} bg-gray-300 animate-pulse h-4 w-full mt-1`}></div>

       <div className="flex gap-1 mt-2">
         <div className={`${sourceStyles} bg-gray-300 animate-pulse h-4 w-20`}></div>
         <div className={`${pubDateStyles} bg-gray-300 animate-pulse h-4 w-12`}></div>
       </div>

       <div className={`${readTextStyles} bg-gray-300 animate-pulse h-4 w-16`}></div>
    </div>
  );
}
