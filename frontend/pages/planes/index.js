import React from "react"
import Planes from "../../components/planes"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { fetchAPI } from "../../lib/api"

const Home = ({ planes, categories, homepage }) => {

  return (
    <Layout categories={categories} homepage={homepage} >
      <Seo seo={homepage.attributes.seo} />
      <div className="uk-section">
        <div className="uk-container uk-container-large">        
          <Planes planes={planes} />
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [planesRes, categoriesRes, homepageRes] = await Promise.all([
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
      planes: planesRes.data,
      categories: categoriesRes.data,
      homepage: homepageRes.data,
    },
    revalidate: 1,
  }
}

export default Home
