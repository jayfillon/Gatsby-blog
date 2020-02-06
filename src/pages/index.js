import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <div>
      <h1>Jericho's Thoughts</h1>
      <h4>{data.allMarkdownRemark.totalCount}</h4>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <span>
            {node.frontmatter.title} - {node.frontmatter.date}
          </span>
          <p>{node.excerpt}</p>
        </div>
      ))}
    </div>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            date
            description
            title
          }
          excerpt
          fields{
            slug
          }
        }
      }
    }
  }
`

// What I've done so far is:
/*
  -> npm install gatsby-transformer-remark --S to parse Markdown files using Remark from Gatsby
  -> using the query (graphql) imported from 'gatsby'
  -> allMarkdownRemark parses the .md files from markdown-pages folder.
  -> deconstruct the props into 'data'
  -> display the data 
  */
