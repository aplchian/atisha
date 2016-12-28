const React = require('react')
const {BrowserRouter, Match} = require('react-router')
const Home = require('./pages')
const Body = require('./pages/body')
const Header = require('./pages/header')
const Admin = require('./admin')



const App = React.createClass({
  render(){
    return(
      <BrowserRouter>
        <Body>
          <Header />
          <Match exactly pattern="/" component={Home} />
          <Match pattern="/admin" component={Admin} />
        </Body>
      </BrowserRouter>
    )
  }
})

module.exports = App
