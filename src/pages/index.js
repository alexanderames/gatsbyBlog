import React from "react"
import { Link } from "gatsby"
import Layout from '../components/layout'

export default () => (
  <Layout>
    <h1>This is the index page</h1>
    <div>
      <Link to="/">HOME</Link> | <Link to="/about">ABOUT</Link>
    </div>
    <p>
    Lorem ipsum and all that fun shit.
    </p>
  </Layout>
)
