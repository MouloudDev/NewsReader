import { Link } from "react-router-dom";

export default function NewsCard({data, styles}) {
  if (!data) return null;

  const {
    id,
    image,
    title,
    summary,
    source,
    pubDate,
    publish_date,
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
        {title?.slice(0, 40)}{title?.length > 40 && "..."}
      </Link>

      <p className={summaryStyles}>
        {summary?.slice(0, 123)}{summary?.length > 123 && "..."}
      </p>

      <div className="flex justify-between mt-auto">
        <div className="flex gap-1">
          <span className={sourceStyles}>{source?.slice(0, 12)}{source?.length > 12 ? "..." : ""}</span>
          <span className={pubDateStyles}>
            {pubDate?.split(" ")[0] || publish_date?.split(" ")[0]}
          </span>
        </div>
        <Link to={`/article/${id}`} className={readTextStyles}> Read </Link>
      </div>
    </div>
  )
}
