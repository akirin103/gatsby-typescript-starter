import React, { ReactElement } from "react"
import styles from "../styles/hello.module.css"

interface helloProps {
  message: string
}

const hello = ({ message }: helloProps): ReactElement => (
  <React.Fragment>
    <p className={styles.hello}>Hello from Component!: {message}</p>
  </React.Fragment>
)

export default hello
