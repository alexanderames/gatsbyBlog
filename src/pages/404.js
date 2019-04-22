import React from "react"
import styles from './404.module.scss';
import Layout from '../components/layout'
import { Link } from 'gatsby'

export default () => (
  <Layout>
    <div className={styles.content}>
      <h1 className={styles.header}>404 Page not found</h1>
      <p className={styles.errorMessage}>
      Lorem ipsum and all that fun shit.
      </p>
      <Link to='/'>Home</Link>
    </div>
  </Layout>
)
