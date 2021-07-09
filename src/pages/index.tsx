import React from "react"
import { graphql, PageProps } from "gatsby"
import Hello from "../components/hello"
import Layout from "../components/layout"

interface IndexPageProps extends PageProps {
  data: {
    site: {
      siteMetadata: {
        siteName: string
      }
    }
  }
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        siteName
      }
    }
  }
`

const IndexPage: React.FC<IndexPageProps> = (props) => {
  const { siteName } = props.data.site.siteMetadata
  const buttonAlert = () => {
    alert('Clicked!');
  }
  return (
    <Layout>
      <p>gatsby.config.jsからタイトル取得(GraphQL): { siteName }</p>
      <button onClick={buttonAlert}>Click me</button>
      <Hello message="Helloコンポーネントのメッセージプロパティ"/>
    </Layout>
  )
}

export default IndexPage
