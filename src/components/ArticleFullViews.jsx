import { useParams } from "react-router"

export default function ArticleFullView() {

  const { articleId } = useParams();

  return (
    <div>
      Article id is {articleId}
    </div>
  )
}
