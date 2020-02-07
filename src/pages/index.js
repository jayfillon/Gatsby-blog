import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

//Styled Components
//could refactor into it's own folder structure for organization
const BlogLink = styled(Link)`
  text-decoration: none;
`
const BlogTitle = styled.h3`
  margin-bottom: 20px;
  color: rgb(110, 110, 110);
`

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <div>
      <h1>Jericho's Thoughts</h1>
      <h2>{data.allMarkdownRemark.totalCount} total posts</h2>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <BlogLink to={node.fields.slug}>
            <BlogTitle>
              {node.frontmatter.title} - {node.frontmatter.date}
            </BlogTitle>
          </BlogLink>
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
          fields {
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
