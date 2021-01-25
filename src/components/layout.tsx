import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styles from "../styles/layout.module.css"
import BackgroundImage from 'gatsby-background-image'

interface BackgroudImageQuery {
  file: {
    childImageSharp: {
      fluid: {
        base64: string
        aspectRatio: Number
        src: string,
        srcSet: string,
        srcWebp: string,
        srcSetWebp: string,
        sizes: string,
      }
    }
  }
}

const layout: React.FC = ({ children }) => {
  const data: BackgroudImageQuery = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "background.png"}) {
        childImageSharp {
          fluid {
            base64
            aspectRatio
            src
            srcSet
            srcWebp
            srcSetWebp
            sizes
            originalName
          }
        }
      }
    }
  `)
  const imageData = data.file.childImageSharp.fluid

  return (
    <BackgroundImage fluid={imageData}>
      <div className={styles.header}>
        <p>header</p>
      </div>
      <div className={styles.contents}>
        {children}
      </div>
      <div className={styles.footer}>
        <p>footer</p>
      </div>
    </BackgroundImage>
  )
}

export default layout

