import React from 'react'
import Layout from '../components/layout'
import Title from '../components/title'
import ArticleList from '../components/article-list'

export default () => (
  <Layout>
    <Title text='Welcome'/>
    <p>
      If you are a software developer who has made a blog app, and you've arrived at a blog app, you might be thinking <i>Oh god, not another blog app</i>. That's fine. But this isn't just any blog app written by just any dev. This is the space where I feel free to write, code, rant, and show off what I got. Enjoy ;)
    </p>
    <ArticleList />
  </Layout>
)
