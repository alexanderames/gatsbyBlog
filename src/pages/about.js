import React from "react"
import Layout from '../components/layout'
import Title from '../components/title'

export default () => (
  <Layout>
    <Title text='About'/>
    <p>
      My name is Alexander and I am a 27 yr old Software Engineer. I am married with 2 children and I live in Colorado. Click on my links above to get to know me better, or read my entries! The sites/repos listed are several years old and I am working to put up some of my new work.
    </p>
    <ul>
      <li className="siteBox">view <a
        rel="noopener noreferrer"
        href="https://twitter-hack.herokuapp.com"
        target="_blank"
        className="link">Rails Twitter site</a>
         &&
         <a
          rel="noopener noreferrer"
          href="https://github.com/alexanderames/twitterhacker"
          target="_blank"
          className="link">REPO
        </a>
      </li>
      <li className="siteBox">view <a
        rel="noopener noreferrer"
        href="https://quiet-spire-32014.herokuapp.com/"
        target="_blank"
        className="link">Node PW Generator</a>
         &&
         <a
            rel="noopener noreferrer"
            href="https://github.com/alexanderames/pw-generator"
            target="_blank"
            className="link">REPO
            </a>
      </li>
      <li className="siteBox">view
        <a
          rel="noopener noreferrer"
          href="https://la-t.herokuapp.com/"
          target="_blank"
          className="link">Rails Ecommerce Site
        </a>
         &&
        <a
          rel="noopener noreferrer"
          href="https://github.com/alexanderames/ecomm"
          target="_blank"
          className="link"> REPO
        </a>
        </li>
    </ul>
  </Layout>
)
