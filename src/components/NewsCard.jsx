import { Link } from "react-router-dom";

export default function NewsCard({data, styles}) {
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
       <img src={image} className={imageStyles}/>

       <Link
         to={`/article/${id}`}
         className={titleStyles}
      >
        {title}
      </Link>
       <p className={summaryStyles}> {summary} </p>

       <div className="flex gap-1">
         <span className={sourceStyles}>{source}</span>
         <span className={pubDateStyles}>{pubDate}</span>
       </div>

       <Link to={`/article/${id}`} className={readTextStyles}> Read </Link>
    </div>
  )
}
