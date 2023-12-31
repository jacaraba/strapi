import React from "react"
import Card from "./card"

const Articles = ({ articles }) => {
  
  return (
    <div>
      <div className="uk-child-width-1-4@m uk-grid-match" data-uk-grid="true">
            {articles.map((article, i) => {
              return (
                <div>
                  <Card
                    article={article}
                    key={`article__left__${article.attributes.slug}`}
                  />
                </div>
              )
            })}
        </div>
     </div>
  )
}

export default Articles
