import React from "react"
import { Link } from "gatsby"
import Layout from '../components/layout'

export default () => (
  <Layout>
    <h1>This is the about page</h1>
    <div>
      <Link to="/">Blog</Link> | <Link to="/about">About</Link>
    </div>
    <p>
      Isn't a 'Home' page, really an 'About' page, really??
    </p>
  </Layout>
)
