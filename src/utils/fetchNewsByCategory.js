import { fetchMediaStackCategory } from "../services/mediastack";
import { fetchNewsDataCategory } from "../services/NewsData";

const fetchNewsByCategory = async (category) => {
  const lowerCat= category.toLowerCase();
  const newsDataCategories = ["world", "general", "politics", "sports"];
  if (lowerCat === "mixed") {
    return await fetchMediaStackCategory(lowerCat);
  } else if (newsDataCategories.includes(lowerCat)) {
    return await fetchNewsDataCategory(lowerCat);
  }

  return await fetchMediaStackCategory(lowerCat)
}

export default fetchNewsByCategory;
