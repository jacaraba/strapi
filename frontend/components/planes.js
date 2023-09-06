import React from "react"
import Card from "./cardplan"

const Planes = ({ planes }) => {
  
  return (
    <div>
      <div className="uk-child-width-1-4@m uk-grid-match" data-uk-grid="true">
            {planes.map((article, i) => {
              return (
                <div>
                  <Card
                    plan={article}
                    key={`article__left__${article.attributes.slug}`}
                  />
                </div>
              )
            })}
        </div>
     </div>
  )
}

export default Planes
