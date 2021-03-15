import React from 'react'
import Layout from '../components/Layout'
import { GatsbyImage } from 'gatsby-plugin-image'
import * as styles from '../styles/project-details.module.css'
import { graphql } from 'gatsby'

export default function projectDetails({ data }) {
  console.log(data);
  const { html } = data.markdownRemark;
  const { title, stack, featuredImg } = data.markdownRemark.frontmatter;
  return (
    <div>
      <Layout>
        <div className={styles.details}>
          <h2>{title}</h2>
          <h3>{stack}</h3>
          <div className={styles.featured}>
            <GatsbyImage image={featuredImg.childImageSharp.gatsbyImageData} alt="Featured Image" />
          </div>
          <div className={styles.html} dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </Layout>
      
    </div>
  )
}

export const query = graphql`
  query ProjectsDetails($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        stack
        title
        featuredImg {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`