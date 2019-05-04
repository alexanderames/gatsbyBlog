import React from "react"
import { Link } from "gatsby"
import Layout from '../components/layout'
import Title from '../components/title'

export default () => (
  <Layout>
    <Title text='Welcome'/>
    <div>
      <Link to="/">Blog</Link> | <Link to="/about">About</Link>
    </div>
    <p>
      The home page... and it feels so good.
    </p>
  </Layout>
)
