// Takes a str and abbrevites it based on a maximus length
export default function abbreviateStr(str, maxLen) {
  if (typeof str !== "string" || typeof maxLen !== "number") return "";
  if (str.length <= maxLen) return str;

  return str.slice(0, maxLen) + "...";
};
