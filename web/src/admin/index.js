const React = require('react')
const PouchDb = require('pouchdb')
const db = new PouchDb('http://127.0.0.1:5984/atisha')
const {assoc} = require('ramda')
const uuid = require('uuid')

const Admin = React.createClass({
  getInitialState(){
    return({
      id: uuid.v4(),
      type: "slogan",
      "body": "",
      point: 1,
      position: 0,
    })
  },
  handleSubmit(e){
    e.preventDefault()
    let newState = assoc('_id',`${this.state.type}_${this.state.id}`,this.state)
    db.put(newState)
      .then(res => console.log(res))
      .catch(err => console.log(err))
  },
  handleChange(path){
    return e => {
      const newState = this.state
      newState[path] = e.target.value
      this.setState(newState)
    }
  },
  render(){
    return(
      <div>
        <h1>Admin</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Body</label>
          <textarea placeholder="body" value={this.state.body} onChange={this.handleChange('body')} type="text"/>
          <label>Position</label>
          <input placeholder="position" type="number" value={this.state.position} onChange={this.handleChange('position')}/>
          <label>Point</label>
          <input placeholder="point" type="number" value={this.state.point} onChange={this.handleChange('point')}/>
          <button>Submit</button>
        </form>
        <pre>
          {JSON.stringify(this.state,null,2)}
        </pre>
      </div>
    )
  }
})

module.exports = Admin
