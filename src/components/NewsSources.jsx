import { Link } from "react-router-dom"
import AftenpostenIcon from "../Icons/Aftenposten"
import AlJazeeraEnglishIcon from "../Icons/al-Jazeera"
import BBCIcon from "../Icons/bbc"
import CNNIcon from "../Icons/cnn"
import TheworldIcon from "../Icons/theworld"
import CNBCIcon from "../Icons/cnbc"

export default function NewsSources() {
  const sources = [
    { name: "CNN", icon: CNNIcon },
    { name: "BBC", icon: BBCIcon },
    { name: "CNBC", icon: CNBCIcon },
    { name: "Aftenposten", icon: AftenpostenIcon },
    { name: "The World", icon: TheworldIcon },
    { name: "Al Jazeera", icon: AlJazeeraEnglishIcon },
  ];

  return (
    <div className="mx-auto my-5 w-full max-w-screen-xl">
      <h2 className="text-2xl font-semibold text-left mb-4">News Sources</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {sources.map(({ name, icon: Icon }) => (
          <Link
            to={`/news/${name.toLowerCase().replace(' ', '')}`}
            key={name}
            className="flex flex-col items-center justify-center p-4 border rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            <div className="w-20 h-12 flex items-center justify-center mb-2">
              <Icon className="max-w-full max-h-full object-contain" />
            </div>
            <h3 className="text-sm font-medium text-center">{name}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
}
