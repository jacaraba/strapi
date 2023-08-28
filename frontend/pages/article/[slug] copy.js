import ReactMarkdown from "react-markdown"
import Moment from "react-moment"
import { fetchAPI } from "../../lib/api"
import Layout from "../../components/layout"
import NextImage from "../../components/image"
import Seo from "../../components/seo"
import { getStrapiMedia } from "../../lib/media"

const Article = ({ article, categories, homepage }) => {
  const imageUrl = getStrapiMedia(article.attributes.image)

  const seo = {
    metaTitle: article.attributes.title,
    metaDescription: article.attributes.description,
    shareImage: article.attributes.image,
    article: true,
  }

  return (
    <Layout categories={categories.data} homepage={homepage}>
      <Seo seo={seo} />
      <div className="uk-child-width-1-3@s" data-uk-grid="true">
      <div></div>
      <div
        id="banner"
        className="uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding uk-margin"
        data-src={imageUrl}
        data-srcset={imageUrl}
        data-uk-img
      >
        <h1>{article.attributes.title}</h1>
      </div>
      </div>
      <div className="uk-section">
        <div className="uk-container uk-container-small">
          <ReactMarkdown
            source={article.attributes.content}
            escapeHtml={false}
          />
          <hr className="uk-divider-small" />          
          <div className="uk-grid-small uk-flex-left" data-uk-grid="true">     
             <div className="uk-width-expand">
             <div>
              {article.attributes.author.data.attributes.picture && (
                <NextImage image={article.attributes.author.data.attributes.picture} />
              )}
             </div>  
              <p className="uk-margin-remove-bottom">
                By {article.attributes.author.data.attributes.name}
              </p>
              <p className="uk-text-meta uk-margin-remove-top">
                <Moment format="MMM Do YYYY">
                  {article.attributes.published_at}
                </Moment>
              </p>
            </div>
          </div>
        </div>
      </div>          
    </Layout>
  )
}

export async function getStaticPaths() {
  const articlesRes = await fetchAPI("/articles", { fields: ["slug"] })

  return {
    paths: articlesRes.data.map((article) => ({
      params: {
        slug: article.attributes.slug,
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const articlesRes = await fetchAPI("/articles", {
    filters: {
      slug: params.slug,
    },
    populate: { 
      image: "*",
      author: { populate: { picture: "*" }, 
    },
   },
  })
  const categoriesRes = await fetchAPI("/categories")
  const homepageRes = await fetchAPI("/homepage", {
    populate: {        
       header: "*",
       footer: "*",
    },
  })

  return {
    props: { article: articlesRes.data[0], 
             categories: categoriesRes,
             homepage: homepageRes.data,
            },
  
    revalidate: 1,
  }
}

export default Article
