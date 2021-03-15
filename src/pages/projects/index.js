import { graphql, Link } from 'gatsby'
import React from 'react'
import Layout from '../../components/Layout'
import * as styles from '../../styles/projects.module.css'
import { GatsbyImage } from "gatsby-plugin-image"

export default function Projects({ data }) {
  console.log(data);
  const projects = data.project.nodes;
  const contact = data.contact.siteMetadata.contact;
  
  return (
    <Layout>
      <div className={styles.portfolio}>
        <h2>Daftar Projek</h2>
        <h3>Daftar Project yang telah Kami buat</h3>
        <div className={styles.projects}>
          {projects.map(project => (
            <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
              <div>
                <GatsbyImage image={project.frontmatter.thumb.childImageSharp.gatsbyImageData} alt="banner"/>
                <h3>{ project.frontmatter.title }</h3>
                <p>{ project.frontmatter.stack }</p>
              </div>
            </Link>
          ))}
        </div>
        <p>Contact me at {contact} soon!</p>
      </div>
    </Layout>
  )
}


export const query = graphql`
query ProjectsPage {
  project: allMarkdownRemark(sort: {fields: frontmatter___date, order: ASC}) {
    nodes {
      frontmatter {
        slug
        stack
        title
        thumb {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      id
    }
  }
  contact: site {
    siteMetadata {
      contact
    }
  }
}
`