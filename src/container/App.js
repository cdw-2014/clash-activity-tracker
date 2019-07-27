import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom"
import About from '../components/About'
import Home from '../components/Home'
import './App.css'

export class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }

}

export default App
