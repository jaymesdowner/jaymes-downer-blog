
import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class ManagerReadMePage extends React.Component {
  render() {

    return (
      <Layout location={this.props.location}>
        <SEO
          title="Manager Read Me"
          keywords={[`Product`, `engineering`, `software`, `design`, `leadership`]}
          description="What is it like to work for Jaymes Downer?"
        />

        <h1>
          Manager Read Me
        </h1>

        <h3>Welcome to The Team{" "}
          <span role="img" aria-label="party popper emoji">
            🎉
          </span>
        </h3>

        <p>There are a couple of things I want to go over that will help you get started...</p>
        <p>First things first, I am so excited to have you on the team!</p>
        <p>If you are reading this, that means you have been interviewed by multiple people on our team and have been heavily vetted. Through all of that, we saw something in you. We believe in you, we believe in your drive, and we believe in your ability to help our team go to the next level!</p>
        <p>We believe in autonomy and in hiring the best people in the world. We don't want to limit you with lots of rules and micromanagement in your early stage here, but we also don't want you feeling like a lost puppy with no direction. That said, if at any point in the first couple of weeks, you feel like you need some direction or affirmation, just ask!</p>

        <h3>My Responsibilities</h3>
        <ol>
          <li>Set context and inform you of what we are working on and why we are working on it.</li>
          <li>Make this the best job you've ever had.</li>
          <li>Partner with you in your professional development to make you the best designer or engineer and team member you can be.</li>
          <li>Help you to feel safe and secure on our team so you are in a position to do your best work and truly enjoy your time here.</li>
        </ol>


        <h3>Feedback</h3>
        <p>If you believe I can improve on any of the above responsibilities, or there is something you aren't feeling great about, please let me know as quickly as possible.</p>

        <h3>Candor</h3>
        <p>
          I expect and need extreme candor from you, and will give you the same. It's unrealistic of me to expect candor from you without first having your trust. It is my mission to instill an extreme level of trust in you, and in return I will expect an extreme level of candor from you. Your feedback plays a huge role in helping me become a better manager and leader for everyone on the team. If something in me needs to change, please speak up :)
        </p>
        <p><i>You will not lose your job for giving me constructive feedback.</i></p>
        <h3>Respect</h3>
        <p>We will have a mutual respect for each other as humans.</p>
        <h3>Grace</h3>
        <p>I understand that we are all people with lives, families, and struggles that may extend beyond our work lives. That said, I will do the best I can to grade you on your best average, and not your worst moment. This is not a pass for either of us, but rather an understanding that a bad moment does not equal a bad person or pattern.</p>


        <h3>Your Growth</h3>
        <p>I'm here to hear and help you set vision for your professional development.</p>
        <p>I will help support you in setting and reaching those goals. The key word is support. I want you to own the goals you want to go after. Once we have clear goals, I will do everything I can to help you reach those goals.</p>
        <p>I will critique and give feedback when we aren't staying on track to hit the goals you've set.</p>
        <p>I will make sure there are clear actionable items that we are going after.</p>
        <h3>My Growth</h3>
        <p>If at any point in our professional relationship you feel like I’m not growing and expressing excitement about something new, please tell me. I’m passionate about growing and learning as much as I can and making sure that I am continually challenged.</p>
        <h3>Communication</h3>
        <p>Regardless of what my schedule and calendar may look like, I want you to know that I am available for you when you need me. If something feels weird or off, please reach out. I don’t want either of us guessing at things that could be cleared up with a simple conversation.</p>

        <p>Here is my communication urgency scale and preferred method of communication for each: Phone Call (Immediate Need) - > Video Chat - > Text Message - > Slack DM - > Email (Non Urgent)</p>

        <h3>One on Ones</h3>
        <p>We will have regular one on ones that will allow you to talk about anything you would like. This is time for you to talk and for me to listen. This isn’t a time for you to give me a breakdown on what you have been working on, though that can happen. I’m more concerned with you having time to express the things you may not be comfortable talking about in front of the entire team. This is also a great time for you to give me feedback on anything you believe I can improve on.</p>
        <p>If something urgent comes up, please do not wait for a scheduled one on one to talk to me about it. Please reach out to me directly through Slack or phone.</p>

        <h3>The Team</h3>
        <p>Our team is a group of diverse individuals with different backgrounds, beliefs, preferences, and communication styles. We share a mutual respect for each other, and trust that everyone will be treated equally.</p>
        <p>If an issue arises between you and a teammate, my expectation is that you will seek to resolve the issue on your own if possible. If a mediator is needed, I’m available.</p>
        <p>If at any point you are treated unfairly by myself or anyone else on the team, please let me or our Head of People know immediately so we can make sure you are safe and the issue is resolved as quickly as possible.</p>
        <h3>Your Turn</h3>
        <p>Now that you have had a chance to read about me, I’d love to hear about you and your preferences. Maybe you have a document like this already. Maybe you have some of these things in your head, but not on paper. Whatever the case is, I would love for you to spend some time creating a similar document to help me understand how I can best relate to and lead you.</p>
        <p>If you need any help, please let me know!</p>

        <h3>The End, Finally</h3>
        <p>All that said, I am here for you. If you ever feel like that is not true, please immediately contact me so we can clear any muddy waters.</p>
        <p>I look forward to working with you and learning about you in the coming weeks! If there is anything at all that you need, please let me know.</p>

        <hr />
        <p>I also <Link to="/blog/">ocassionally write</Link> about leadership, growth, and technology.</p>
        <Link to="/">
          <Button marginTop="85px">Home</Button>
        </Link>

      </Layout>
    )
  }
}

export default ManagerReadMePage
