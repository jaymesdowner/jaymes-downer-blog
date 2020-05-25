import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {

    return (
      <Layout location={this.props.location}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />

        <h1>
          Hello World{" "}
          <span role="img" aria-label="peace emoji">
            ✌🏼
          </span>
        </h1>
        {/* <img style={{ margin: 0 }} src={"../../content/assets/profile-pic.jpg"} alt="Jaymes Downer" /> */}
        <p>My name is <i><b>Jaymes</b></i>, and I lead the amazing Product Team at <a href="https://filmandmusic.com/" target="_blank" rel="noopener noreferrer">F&M</a>.</p>
        <p>We serve the creative community by providing platforms for the best stock music and footage at <a href="https://musicbed.com" target="_blank" rel="noopener noreferrer">Musicbed</a> and <a href="https://filmsupply.com" target="_blank" rel="noopener noreferrer">Filmsupply</a>. I don't just say that because I work there... we truly have partnered with some of the best musicians and filmmakers around!</p>
        <p>Our Product Team is spread all around the world, and is full of some of the best people I’ve ever met.{" "}
          <span role="img" aria-label="raised hands emoji">
            🌎 ✈️ 👨🏼‍💻 👩🏾‍💻 🙌🏼
          </span>
        </p>
        <p><i><b>I’m passionate about technology, but have grown even more passionate about leadership and helping team members see and reach their full potential.</b></i></p>
        <p>I ocassionally write about leadership, growth, and technology.</p>
        <p><b>If there is anything I can do to help you, please let me know!</b></p>
        <Link to="/blog/">
          <Button marginTop="35px">Checkout My Blog</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage
