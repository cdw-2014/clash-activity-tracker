import React from 'react'
import { Switch, Route } from "react-router-dom"
import { Grid, Input } from '@material-ui/core'

export class Home extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            clanTag: "",
            hashedPassword: ""
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
                >
                     <Grid item>
                         <h4>Enter Clan Tag:</h4>
                         <Input
                            value={this.state.clanTag}
                            onChange={ e => this.setState({clanTag: e.target.value}) }
                         />
                     </Grid>
                 </Grid>
            </Grid>       
        </div>
    )
  }

}

export default Home;
