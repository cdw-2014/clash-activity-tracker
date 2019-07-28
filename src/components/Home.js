import React from 'react'
import { Switch, Route } from "react-router-dom"
import { Grid, Input, Button } from '@material-ui/core'
import SignIn from './SignIn'

export class Home extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            newUser: null
        }
    }

  render() {
    return (
        <div>          
            <Grid item>
                <h1>Clash Activity Tracker</h1>
            </Grid>  
            <Grid
                container
                alignItems="flex-start"
                justify="flex-start"
            >
                <Grid
                    container item xs={6}
                    direction="column"
                    alignItems="center"
                    style={{padding: '20px'}}
                >
                     <Grid item>
                         <Button
                            variant="contained"
                            style={{width: window.innerWidth/4}}
                            onClick={() => this.setState({ newUser: true })}
                         >
                             <h2>New User</h2>
                         </Button>
                     </Grid>
                 </Grid>
                 <Grid
                    container item xs={6}
                    direction="column"
                    alignItems="center"
                    style={{padding: '20px'}}
                >
                     <Grid item>
                         <Button
                            variant="contained"
                            style={{width: window.innerWidth/4}}
                            onClick={() => this.setState({ newUser: false })}
                         >
                             <h2>Returning User</h2>
                         </Button>
                     </Grid>
                 </Grid>
                 {this.state.newUser !== null ? <SignIn newUser={this.state.newUser} /> : null}
            </Grid>       
        </div>
    )
  }

}

export default Home;
