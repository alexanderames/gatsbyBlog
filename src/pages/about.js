import React from "react"
import { Link } from "gatsby"
import Layout from '../components/layout'
import Title from '../components/title'

export default () => (
  <Layout>
    <Title text='About'/>
    <div>
      <Link to="/">Blog</Link> | <Link to="/about">About</Link>
    </div>
    <p>
      Isn't a 'Home' page, really an 'About' page, really??
    </p>
  </Layout>
)
