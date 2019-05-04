import React from "react"
import styles from './404.module.scss';
import Layout from '../components/layout'
import { Link } from 'gatsby'

export default () => (
  <Layout>
    <div className={styles.content}>
      <h1 className={styles.header}>404 Page not found</h1>
      <p className={styles.errorMessage}>
        These are not the droids you are looking for.
      </p>
      <Link to='/'>Blog</Link>
    </div>
  </Layout>
)
