import React from "react"
import styles from "../styles/layout.module.css"

const layout: React.FC = ({ children }) => {
  return (
    <React.Fragment>
      <div className={styles.header}>
        <p>header</p>
      </div>
      <div className={styles.contents}>
        {children}
      </div>
      <div className={styles.footer}>
        <p>footer</p>
      </div>
    </React.Fragment>
  )
}

export default layout

