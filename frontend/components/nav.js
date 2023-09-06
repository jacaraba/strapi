import React from "react"
import Link from "next/link"
import "animate.css/animate.min.css"

const Nav = ({ categories }) => {
  return (
    <div>
      <nav className="uk-navbar-container " data-uk-navbar >
        <div className="uk-navbar-left">
          <ul className="uk-navbar-nav" style={{ backgroundColor: "#87CEEB" }}>
            <li>
              <Link href="/">
                <a className="uk-link-reset" style={{ fontSize: "3rem" }}>INICIO</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="uk-navbar-right">
          <ul className="uk-navbar-nav" style={{ backgroundColor: "#87CEEB" }}>
            {categories.map((category) => {
              return (
                <li key={category.id}>
                  <Link href={`/${category.attributes.slug}`}>
                    <a className="uk-link-reset" style={{ fontSize: "3rem" }}>{category.attributes.name}</a>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Nav
