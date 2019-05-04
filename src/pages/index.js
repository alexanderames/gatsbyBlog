import React from "react"
import { Link } from "gatsby"
import Layout from '../components/layout'

export default () => (
  <Layout>
    <h1>This is the index page</h1>
    <div>
      <Link to="/">Blog</Link> | <Link to="/about">About</Link>
    </div>
    <p>
      The home page... and it feels so good.
    </p>
  </Layout>
)
