
import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class ResumePage extends React.Component {
  render() {

    return (
      <Layout location={this.props.location}>
        <SEO
          title="Resume"
          keywords={[`Product`, `engineering`, `software`, `design`, `leadership`]}
          description="Jaymes Downer work history and experience."
        />

        <h1>
          Jaymes Downer
        </h1>

        <h2>Vice President of Product</h2>
        
        <p><b>Bold first sentance to headline the best part.</b> Paragraph about me as a leader and what I do high level. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem adipisci repellat ut dolor dolorum reprehenderit voluptate fugit in. Officiis accusamus quasi iusto tempore assumenda a suscipit saepe quis cum, ipsam repudiandae vitae, incidunt odit dolorem porro dolores in amet repellendus fugit commodi similique? Laborum necessitatibus facilis nobis distinctio veniam quod!</p>
        
        <h3>Work Experience</h3>

        <h4>Vice President of Product - F&M</h4>
        <p>List out what I do now high level. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis aliquam magnam enim inventore voluptatem eligendi autem nesciunt modi expedita totam?</p>
        <ul>
          <li>Something cool I did.</li>
          <li>Something else</li>
          <li>More stuff</li>
          <li>Almost done</li>
          <li>Last thing</li>
        </ul>

        <h4>Director of Engineering - F&M</h4>
        <p>List out what I do now high level. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis aliquam magnam enim inventore voluptatem eligendi autem nesciunt modi expedita totam?</p>

        <h4>Product Manager - F&M</h4>
        <p>List out what I do now high level. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis aliquam magnam enim inventore voluptatem eligendi autem nesciunt modi expedita totam?</p>
        
        <hr />
        
        <h4>Front End Web Developer - The Infinite Agency</h4>
        <p>Established workflows within the company to expedite project timelines. Setup guidelines for communication and expectation between other departments and the engineering team. Created our strategy and process for web projects. This included assets necessary from other departments, folder structure and naming conventions, version control for website files, creating a development environment for websites as well as a local build environment, and creating training documents for interns and new hires.</p>
        <ul>
          <li>Worked on projects for nationally recognized brands like Bennigan’s Restaurant and United Way.</li>
          <li>Built and maintained over 50 client websites on Wordpress CMS.</li>
          <li>Implemented git version control for all web projects.</li>
          <li>Brought all development that was previous outsourced in-house and managed workflow.</li>
          <li>Davey Award winner.</li>
        </ul>


      </Layout>
    )
  }
}

export default ResumePage
