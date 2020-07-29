import React from 'react';
import './App.css';
import Form from './formContainer'

class App extends React.Component{
  constructor() {
    super()
    this.state = {
      loading: false,
      character: {},
      firstName: "",
      lastName: "",
      isFriendly: false,
      gender: "",
      favColor: ""
    }
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    this.setState({loading: true})
    fetch("https://swapi.dev/api/people/3")
      .then(response => response.json())
      .then(data => {
        this.setState({
          loading: false,
          character: data
        })
      })
  }

  handleChange(event) {
    const {name,value,type,checked} = event.target
    type === "checkbox" ? this.setState({[name]:checked}) :this.setState({[name]: value})
  }

  render() {
    return(
      <div>
        {this.state.loading ? <h2>Loading</h2> : this.state.character.name}
        <hr />
        <Form />
      </div>
    )
  }
}

export default App;
