
import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

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
        <p></p>
        <p>I lead a team of distributed designers and engineers that are responsible for building and maintaining multiple products for F&M (Filmsupply & Musicbed). <b>My primary goal is to invest in my team and help each team member see and reach their full potential.</b> I work on our Executive Lead Team and help set the vision and roadmap for all of our products.</p>
        <p><b>I'm passionate about the intersection of technology and people.</b> I love working on products that make peoples lives better! I also love the opportunity that working in technology brings to everyone on my team!</p>
        
        <h3>Work Experience</h3>

        <h4 style={tightH4}>Vice President of Product</h4>
        <p><i>F&M | Sept 2019 - Present</i></p>
        <p>As VP of Product, I had 3 main objectives when I started:</p>
        <p><b>Increase diversity of our Product Team.</b> I believe the current software industry is a gift, and one worth sharing. The opportunities available right now have the ability to drastically change someones life. When I took over the team, it was primarily white males. I wanted that to change. Since then, I've had the pleasure of hiring four engineers. Three of those engineers are Black. Two are Black females. This use to make me a bit uncomfortable for some reason. <b>But I believe it's our responsibility to reach deeper into the pool of candidates to find underrepresented individuals and give them an opportunity.</b></p>
        <p><b>Create a clear career path for all Designers and Engineers to help inspire and motivate growth.</b> Expectations were not clear for all team members, and few people knew what they could do to grow and increase ownership and compensation.</p>
        <p><b>Create a clear and transparent salary structure.</b> Over the years, people were brought in at much different salaries based on the state of the company at the time. <b>I needed to create a new system that rewarded scope of influence, knowledge, skill level, and ownership.</b> This created some large disparaties between team members that wasn't necessary. Some of our more tenured team members received raises to get them in line with my newly outlined structure.</p>
        <p>My focus was primarily on the individuals on my team, so I needed to pair that with some organizational changes and procedures to help these individuals be as successful as possible, and help our products be a success as well. I transitioned our team from a flat structure to a structure of leads that could help train the less experienced team members. This has been a huge success! I have not hired a Director of Engineering, so I maintain most of those responsibilities currently.</p>
        

        <h4 style={tightH4}>Director of Engineering</h4>
        <p><i>F&M | Aug 2018 - Sept 2019</i></p>
        <p>Bridged the gap between our engineering department and the rest of the company. I helped set and maintain scope, estimates, timelines, and communication for all projects. I worked with lead team members from other departments in the company to field bug reports and new feature requests for our web and mobile products. I worked closely with our back end and front end engineers to ensure project scope and estimations were complete and accurate. I also helped determine what the best plan of action was once we are ready to begin a project.</p>

        <ul>
          <li>Helped outline and lead the build of a new subscription based pricing structure.</li>
          <li>Created a Career Path document for our Engineers to help create clear expectations and a growth path for all team members.</li>
          <li>Implemented a Professional Development budget for all team members to help encourage learning and growth.</li>
          <li>Led a team of all managers from other departments to keep communication clear and build bridges between departments.</li>
        </ul>
        
        <h4 style={tightH4}>Product Manager</h4>
        <p><i>F&M | Sept 2014 - Aug 2018</i></p>
        <p>Helped streamline project workflows and reporting to increase efficiency and visibility of the work the Engineering team was doing. Worked closely with the Engineering team to determine best workflow and project management procedures.</p>
        <ul>
          <li>Split time between Product Management and IC front end engineer building complex applications.</li>
          <li>Helped build and launch a new product, filmsupply.com.</li>
          <li>Lead the team as we transitioned from a legacy jquery/Angular codebase over to a React SPA.</li>
        </ul>


        
        
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
