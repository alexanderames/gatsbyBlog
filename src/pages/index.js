import React from "react"
import { Link } from "gatsby"
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Title from '../components/title'

export default ({data}) => (
  <Layout>
    <Title text={data.site.siteMetadata.title}/>
    <div>
      <Link to="/">Blog</Link> | <Link to="/about">About</Link>
    </div>
    <p>
      Blog etsy crucifix, iceland palo santo austin kitsch shoreditch selvage pork belly scenester semiotics 8-bit typewriter. Everyday carry cronut keffiyeh beard single-origin coffee, tbh seitan fanny pack neutra butcher sriracha sartorial hoodie pinterest squid. Echo park sriracha lyft, selfies mustache gluten-free crucifix fanny pack. Polaroid hell of meggings taxidermy, succulents 90's waistcoat man bun sustainable marfa hella. Flannel gentrify art party keytar asymmetrical drinking vinegar green juice organic echo park.
    </p>
  </Layout>
)

export const query = graphql `query {
  site {
    siteMetadata {
      title
    }
  }
}`
