import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom"
import About from '../components/About'
import Home from '../components/Home'
import './App.css'
import { AppBar, Typography, Toolbar, Link, Button } from '@material-ui/core';

export class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <div className="App">
        <AppBar position="static" style={{backgroundColor:'#CFA22F'}}>
          <Toolbar>
            <Link href="/" style={{textDecoration: 'none'}}>
              <Typography>
                  Clash Activity Tracker
              </Typography>
            </Link>
          </Toolbar>           
        </AppBar>
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
