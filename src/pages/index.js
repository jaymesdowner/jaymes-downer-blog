import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class IndexPage extends React.Component {
  render() {

    return (
      <Layout location={this.props.location}>
        <SEO
          title="Head of Product"
          keywords={[`Product`, `engineering`, `software`, `design`, `leadership`]}
        />

        <h1>
          Hello World{" "}
          <span role="img" aria-label="peace emoji">
            ✌🏼
          </span>
        </h1>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <p>My name is <i><b>Jaymes</b></i>, and I'm currently the VP of Product at <a href="https://fm.co/" target="_blank" rel="noopener noreferrer">FM</a>.</p>
        </div>

        <p>We serve the creative community by providing platforms for the best music and cinematic footage licensing at <a href="https://musicbed.com" target="_blank" rel="noopener noreferrer">Musicbed</a> and <a href="https://filmsupply.com" target="_blank" rel="noopener noreferrer">Filmsupply</a>.</p>

        <p>Our Product Team is spread all around the world, and is full of some of the best people I’ve ever met.{" "}
          <span role="img" aria-label="raised hands emoji">
            🌎 ✈️ 👨🏼‍💻 👩🏾‍💻 🙌🏼
          </span>
        </p>
        <p><i><b>I’m passionate about technology, but have grown even more passionate about leadership and helping team members see and reach their full potential.</b></i></p>
        <p>Here are some of my <Link to="/reading/">favorite books about leadership and growth</Link>.</p>
        <p>I ocassionally write about technology, growth, and leadership on my <Link to="/blog/">blog</Link>.</p>

        <p>If you're curious what it's like to work with me, I created a <Link to="/manager-read-me">manager read me</Link> to aid in onboarding new team members.</p>

        <p><b>If there is anything I can do to help you, please let me know!</b></p>

      </Layout>
    )
  }
}

export default IndexPage
