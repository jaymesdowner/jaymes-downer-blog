import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class ReadingPage extends React.Component {
  render() {

    return (
      <Layout location={this.props.location}>
        <SEO
          title="Reading List"
          keywords={[`Product`, `engineering`, `software`, `design`, `leadership`]}
          description="Here are some of my favorite books on leadership and growth. If you want to talk about any of these books, or the ideas they represent, I love a great conversation!"
          ogimage="content/assets/profile-pic.jpg"
        />

        <h1>
          My favorite reads{" "}
          <span role="img" aria-label="book emoji">
            📚
          </span>
        </h1>

        <p>Here are some of my favorite books on leadership and growth. If you want to talk about any of these books, or the ideas they represent, I love a great conversation! <a href={`https://twitter.com/jaymesdowner`} target="_blank" rel="noopener noreferrer">Hit me up on Twitter</a>.</p>

        <h3>Radical Candor</h3>
        <p>If you haven't read <i>Radical Candor</i>, please don't waste anymore time on my website. <b>Go read this book now!</b> All joking aside, this booked helped me speak more candidly to my boss, my direct reports, and my wife; all without being an a**hole (as the author so gracefully puts it). This is one of the best books on communication I have ever read.</p>

        <h3>Work Rules</h3>
        <p>If you are looking for a general playbook on how to setup and lead your organization, definitely give this a shot! This helped me understand hiring, development plans, and how to truly care for your team. Packed with tons of great insight.</p>

        <h3>Trillion Dollar Coach</h3>
        <p>This is the incedible story of Bill Campbell and his leadership that helped so my companies push past failure to success. There are some amazing stories in this thing! I'm a coach at heart, so I definitely coonect with Bill.</p>

        <h3>Soul Keeping: Caring for the Most Important Part of You</h3>
        <p>I honestly need to read this book at least once a year. It's a great reminder that you are your most valuable asset. If you feel like you are going 100mph and are spent, take a day off and read this book.</p>

        <hr/>
        <p>I also <Link to="/blog/">ocassionally write</Link> about leadership, growth, and technology.</p>
        <Link to="/">
          <Button marginTop="85px">Home</Button>
        </Link>

      </Layout>
    )
  }
}

export default ReadingPage
