
import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class ResumePage extends React.Component {
  render() {

    var tightH4 = {
      marginBottom: '5px'
    };

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
        
        <p>I lead a team of distributed designers and engineers that are responsible for building and maintainingmultiple products. <b>My primary goal is to invest in my team.</b> </p>
        
        <h3>Work Experience</h3>

        <h4 style={tightH4}>Vice President of Product</h4>
        <p><i>F&M | Sept 2019 - Present</i></p>
        <p>As VP of Product, I had 3 main objectives when I started:</p>
        <p>Create a clear career path for all Designers and Engineers to help inspire and motivate growth.</p>
        <p>Increase salaries for underpaid team members and create a clear salary structure so expectations were clear.</p>
         
        <ul>
          <li>Something cool I did.</li>
          <li>Something else</li>
          <li>More stuff</li>
          <li>Almost done</li>
          <li>Last thing</li>
        </ul>

        <h4 style={tightH4}>Director of Engineering</h4>
        <p><i>F&M | Aug 2018 - Sept 2019</i></p>
        <p>Bridged the gap between our engineering department and the rest of the company. I helped set and maintain scope, estimates, timelines, and communication for all projects. I worked with lead team members from other departments in the company to field bug reports and new feature requests for our web and mobile products. I worked closely with our back end and front end engineers to ensure project scope and estimations were complete and accurate. I also helped determine what the best plan of action was once we are ready to begin a project.</p>

        <ul>
          <li>Setup</li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        
        <h4 style={tightH4}>Product Manager</h4>
        <p><i>F&M | Sept 2014 - Aug 2018</i></p>
        <p>Helped streamline project workflows and reporting to increase efficiency and visibility of the work the Engineering team was doing.</p>
        
        
        <hr/>
        <h4 style={tightH4}>Front End Web Developer</h4>
        <p><i>The Infinite Agency | Aug 2013 - Sept 2014</i></p>
        <p>Established workflows within the company to expedite project timelines. Setup guidelines for communication and expectation between other departments and the engineering team. Created our strategy and process for web projects. This included assets necessary from other departments, folder structure and naming conventions, version control for website files, creating a development environment for websites as well as a local build environment, and creating training documents for interns and new hires.</p>
        <ul>
          <li>Worked on projects for nationally recognized brands like Bennigan’s Restaurant and United Way.</li>
          <li>Built and maintained over 50 client websites on Wordpress CMS.</li>
          <li>Introduced and implemented git version control for all web projects.</li>
          <li>Brought all development that was previous outsourced in-house and managed workflow.</li>
          <li>Davey Award winner.</li>
        </ul>

        <hr/>
        <h4 style={tightH4}>Engineering Manager</h4>
        <p><i>Targit Media | Aug 2012 - Aug 2013</i></p>

        <p>Helped grow a small web development company by increasing productivity and efficiency. Positioned the company to get noticed and acquired by a large agency.</p>

        <ul>
          <li>Primary developer responsible for building and maintaining over 25 Wordpress websites.</li>
          <li>Found, hired, and trained new web developer to help handle increased workload.</li>
          <li>Increased profitability to the point of acquisition by a large agency.</li>
        </ul>

        <hr/>
        <h4 style={tightH4}>Web Developer</h4>
        <p><i>ThinkTree Media | Aug 2011 - Jan 2012</i></p>

        <p>Dove into a wide range of digital media as well as client and project management. Responsible for setting up project timelines and managing communication with clients. I also worked on new client websites as well as completed maintenance and improvements on previously built sites.</p>
        <ul>
          <li>Managed all project timelines.</li>
          <li>Built and maintained CMS websites for clients.</li>
          <li>Addy award winner for a film I helped concept and shoot.</li>
        </ul>
        
        <hr/>
        <h4 style={tightH4}>Team Leader</h4>
        <p><i>FedEx Express | Nov 2003 - Aug 2009</i></p>
        
        <p>Team Leader responsible for the two highest priority departures in the sort facility. Managed between 5 and 15 outbound flight and truck departures, depending on season. Was key decision maker in fast-paced environment.</p>
        
        <ul>
          <li>At the age of 19, led a team of 25 employees.</li>
          <li>Led the facilities Dangerous Goods team as well, responsible for handling and transporting of hazardous materials.</li>
          <li>Was recognized with multiple Employee of the Organization awards.</li>
          <li>Worked with sort facility engineers to help develop contingency plans during peak seasons to accommodate additional package flow without overloading sort system.</li>
        </ul>

        
      </Layout>
    )
  }
}

export default ResumePage
