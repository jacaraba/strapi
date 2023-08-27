import Nav from "./nav"
import NextImage from "./image"

const Layout = ({ children, categories, seo, homepage }) => (
  <>
    <NextImage image={homepage.attributes.header} />
    <Nav categories={categories} />
    {children}
    <NextImage image={homepage.attributes.footer} />    
  </>
)

export default Layout
