import { Link } from "react-router-dom";
import abbreviateStr from "../utils/abbreviateStr";

export default function NewsCard({data, styles}) {
  if (!data) return null;

  const {
    id,
    image,
    title,
    summary,
    source,
    pubDate,
  } = data;
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
      <img src={image} className={imageStyles} />

      <Link
        to={`/article/${id}`}
        className={titleStyles}
      >
        {abbreviateStr(title, 35)}
      </Link>

      <p className={summaryStyles}>
        {abbreviateStr(summary, 100)}
      </p>

      <div className="flex justify-between mt-auto">
        <div className="flex gap-1 w-full">
          <span className={sourceStyles}>
            {abbreviateStr(source, 8)}
          </span>
          <span className={pubDateStyles}>
            {pubDate}
          </span>
        </div>
        <Link to={`/article/${id}`} className={readTextStyles}> Read </Link>
      </div>
    </div>
  )
}
