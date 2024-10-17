export default function RightSideNavSkeleton() {
  return (
      <div className="p-3 rounded-lg bg-[#F1F1F1] w-full ml-auto hidden md:block md:col-span-2">
          <div>
              <h3 className="text-2xl font-medium text-start mb-2">
                  <div className="h-6 bg-gray-300 animate-pulse rounded-md w-3/4"></div>
              </h3>
              <ul className="mt-2 list-none ml-auto text-start w-full">
                  {Array(5).fill(0).map((_, i) => (
                      <li className="w-full text-xl font-normal" key={i}>
                          <div className="block pl-8 py-2">
                              <div className="h-5 bg-gray-300 animate-pulse rounded-md w-full"></div>
                          </div>
                      </li>
                  ))}
              </ul>
          </div>
          <div className="mt-6">
              <h3 className="text-2xl font-medium text-start mb-2">
                  <div className="h-6 bg-gray-300 animate-pulse rounded-md w-3/4"></div>
              </h3>
              <ul className="mt-2 list-none ml-auto text-start w-full">
                  {Array(4).fill(0).map((_, i) => (
                      <li className="w-full text-xl font-normal" key={i}>
                          <div className="block pl-8 py-2">
                              <div className="h-5 bg-gray-300 animate-pulse rounded-md w-full"></div>
                          </div>
                      </li>
                  ))}
              </ul>
          </div>
      </div>
  );
}
