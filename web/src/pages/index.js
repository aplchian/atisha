const React = require('react')

const Home = React.createClass({
  getInitialState(){
    return({
      heading: "The Preliminaries, Which are a Basis for Dharma Practice",
      body: "First, train in the preliminaries",
      position: "1:1"
    })
  },
  handleNext(e){
    e.preventDefault()
    console.log('next')
  },
  render(){
    return(
      <div className="home-body">
        <h1 className="heading text-box">{this.state.heading}</h1>
        <h2 className="body-text text-box">{this.state.body}</h2>
        <p className="position text-box">{this.state.position}</p>
        <p className="next-link text-box" onClick={this.handleNext}>next</p>
      </div>
    )
  }
})

module.exports = Home
