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

      Craft beer salvia food truck flexitarian biodiesel 8-bit tousled aesthetic mixtape before they sold out affogato disrupt. Hoodie pickled hell of hexagon XOXO cray tofu paleo blue bottle microdosing taxidermy freegan copper mug 90's. Tbh vape church-key cliche, taiyaki shoreditch everyday carry post-ironic godard migas street art lumbersexual. Quinoa adaptogen chicharrones migas, blog bespoke godard vaporware intelligentsia edison bulb bushwick lyft.
    </p>
  </Layout>
)
