import React from "react"
import Link from "next/link"
import NextImage from "./image"

const Card = ({ plan }) => {
  return (
    <Link href={`/plan/${plan.attributes.slug}`}>
      <a className="uk-link-reset">
        <div className="uk-card uk-card-muted">
          <div className="uk-card-media-top uk-position-relative">
            {/* Aquí se incluye la imagen de fondo */}
            <NextImage image={plan.attributes.image} />
            {/* Overlay para el título y la categoría */}
            <div className="uk-position-cover uk-overlay uk-overlay-primary uk-flex uk-flex-center uk-flex-middle">
              <div className="uk-text-center">
                <p id="category" className="uk-text-uppercase uk-margin-remove">
                  {plan.attributes.category.name}
                </p>
                <p id="title" className="uk-text-large uk-margin-remove">
                  {plan.attributes.title}
                </p>
              </div>
            </div>
          </div>
        </div>
      </a>
    </Link>
  )
}

export default Card
