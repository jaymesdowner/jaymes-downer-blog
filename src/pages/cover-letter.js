
import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class CoverLetterPage extends React.Component {
  render() {

    return (
      <Layout location={this.props.location}>
        <SEO
          title="Cover Letter"
          keywords={[`Product`, `engineering`, `software`, `design`, `leadership`]}
          description="Jaymes Downer work history and experience."
        />

        <h1>
          Jaymes Downer & Webflow
        </h1>

        <p>First and foremost, thank you for taking the time to read my resume and cover letter. It's an honor to be considered for this position. <b>I'm continually amazed at the level of authenticity and kindness I see from everyone that works at Webflow.</b> It's those type of attributes that make Webflow such a desirable place to work for so many individuals.</p>
        <p>Personally, there are three distinct reasons why I'm applying for this position.</p>
        
        <h4>Your Product Mission</h4>

        <p><i>'To empower everyone to create for the web and spark an unprecedented wave of digital innovation.'</i></p>
        <p>The software industry has had such an incredible affect on my life. I believe the work you all are doing is simply widening the net, allowing more individuals to experience what I have been so fortunate to experience.</p>

        <h4>Your People</h4>
        <p>The people you have in leadership. The people you champion for. The people you give opportunities to and sow into that  will forever be changed because of the opportunity and kindness you all extended.</p>
        <p>It's a special thing to have a company culture that is so apparent in all of it's team members. It's not just a poster on the wall. It's how you all live and operate every day.</p>

        <h4>My Own Growth</h4>
        <p>As I have grown and progressed in my career, it's become clear that my focus and heart have shifted from the products I manage to the people I get to invest in. That being said, my career goals are less tied to a product, and more to my own leadership development so I am better equipped to have a positive impact on the people I have the honor of leading.  <b>I love leading leaders!</b></p>
        <p>I believe your company, beacuse of it's culture and values, is the perfect place for me to continue growing in my own leadership ability.</p>

        <hr />
        
        <p>I have included my resume, which I believe will paint a clear picture of my leadership experience, as well as give you some insight into my work ethic and focus.</p>

        <p>Before I go.. one dad joke.</p>

        <p>I have a phobia of speed bumps... but I'm slowly getting over it... 😏</p>
        
      </Layout>
    )
  }
}

export default CoverLetterPage