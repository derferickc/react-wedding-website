import React, { Component } from "react";
import Rsvphere from "./Rsvphere";

function StoryCopy() {
  const stories = [
    "Fred was Grace's the Freshman Interest Group (FIG) Leader during her first quarter at the University of Washington. He made many creepy / innpropriate comments and clearly had a crush on her right off the bat; Grace was teased relentlesly by her classmates and friends. Due to University policy, an instructor was not allowed to date a student... that would not deter Fred.",
    "Immediately after the quarter was ended, Fred asked Grace to go to a party at his friends appartment and the rest is history!",
    "After 8 years of dating Fred finally propsed back on campus where it all started."
  ]

  return (
    <div className="our-story-copy col-12">
      {stories.map((story) => (
        <p key={story}>{story}</p>
      ))}
    </div>
  )
}

function TidbitsCopy() {
  const tidbits = [
    {
      question: "How did you first meet?",
      answer: "See Our Story!"
    },
    {
      question: "Who made the first move? How?",
      answer: "Fred"
    },
    {
      question: "Who's going to take out the trash?",
      answer: "Grace"
    },
    {
      question: "What's your favorite activity together?",
      answer: "Eating"
    },
    {
      question: "Where are you going for your honeymoon?",
      answer: "The sunrise nation"
    },
  ]

  return (
    <div className="qa-copy col-12">
      {tidbits.map((tidbit, index) => (
        <div key={index}>
          <strong>{tidbit.question}</strong>
          <p>{tidbit.answer}</p>
        </div>
      ))}
    </div>
  )
}

class Ourstory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showStory : true,
    }

    this.clickStory = this.clickStory.bind(this);
    this.clickTidbits = this.clickTidbits.bind(this);
  }

  clickStory() {
    this.setState({
      showStory : true,
    })
  }

  clickTidbits() {
    this.setState({
      showStory : false,
    })
  }

  render() {
    return (
      <div className="partial text-center">
        <div className="row">
          <div className="headerImage col-12 col-sm-8 offset-sm-2">
             <img src="https://firebasestorage.googleapis.com/v0/b/choesenbygrace-wedding-website.appspot.com/o/engagement%2FGrace_Fred_Engagement_HiRes_(9_of_83).jpg?alt=media&token=e4f4f402-388a-4b2c-ab9e-ca47627eabe9" alt="ourstory hero" />
          </div>
          <div className="col-2"></div>
          
          <div className="vector col-12 text-center">
            <img src="https://firebasestorage.googleapis.com/v0/b/choesenbygrace-wedding-website.appspot.com/o/ladybug-vector.png?alt=media&token=7a0ac9f4-a675-4eab-a12e-2bb16e946596" alt="ladybug vector" />
          </div>
          
          <div className="details col-12 col-sm-10 offset-sm-1">
            <div className="subheader-subnav">
              <div onClick={this.clickStory} className="our-story-subhead subhead col-6" style={{fontWeight: this.state.showStory ? 'bold' : 'normal'}}>
                OUR STORY
              </div>
              <div onClick={this.clickTidbits} className="qa-subhead subhead col-6" style={{fontWeight: !this.state.showStory ? 'bold' : 'normal'}}>
                TIDBITS
              </div>
            </div>

            {this.state.showStory
              ? <StoryCopy />

              : <TidbitsCopy />
            }

          </div>

          <Rsvphere />
        </div>
      </div>
    );
  }
}
 
export default Ourstory;