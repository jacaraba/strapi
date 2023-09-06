import React from "react"
import Link from "next/link"
import "animate.css/animate.min.css"

const Menu = ({ menues }) => {
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
            {menues.map((menu) => {
              return (
                <li key={menu.id}>
                  <Link href={`/${menu.attributes.slug}`}>
                    <a className="uk-link-reset" style={{ fontSize: "3rem" }}>{menu.attributes.name}</a>
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

export default Menu
