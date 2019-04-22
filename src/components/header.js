import React from 'react'
import { Link } from 'gatsby'
import styles from './layout.module.scss'

export default () => (

  <header className={styles.container}>

    <div className={styles.row}>
      <Link to='/'>Gatsby blog</Link>
    </div>
    <div className={styles.row}>
      <Link to='/'>Blog</Link>
      <Link to='/about'>Articles</Link>
    </div>

  </header>
)
