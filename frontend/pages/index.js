import React from "react"
import Articles from "../components/articles"
import Planes from "../components/planes"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { fetchAPI } from "../lib/api"

const Home = ({ articles, planes, categories, homepage }) => {

  return (
    <Layout categories={categories} homepage={homepage} >
      <Seo seo={homepage.attributes.seo} />
      <div className="uk-section">
        <div className="uk-container uk-container-large">
           <Articles articles={articles} />          
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [articlesRes, planesRes, categoriesRes, homepageRes] = await Promise.all([
    fetchAPI("/articles", { populate: "*" }),
    fetchAPI("/planes", { populate: "*" }),
    fetchAPI("/categories", { populate: "*" }),
    fetchAPI("/homepage", {
      populate: { 
         hero: "*",
         seo: { populate: "*" },
         header: "*",
         footer: "*",
      },
    }),
  ])

  return {
    props: {
      articles: articlesRes.data,
      planes: planesRes.data,
      categories: categoriesRes.data,
      homepage: homepageRes.data,
    },
    revalidate: 1,
  }
}

export default Home
