import React from 'react'
import { Switch, Route } from "react-router-dom"
import { Grid, Link } from '@material-ui/core'
import './About.css'

export class About extends React.Component {

  render() {
    return (
        <div>
            <Grid
                container
                direction="column"
                alignItems="center"
                justify="flex-start"
            >
                <Grid item xs={6}>
                    <Grid item>
                        <h1>About</h1>
                        <p>
                            Clash Activity Tracker is a tool made by Cdw2014 to track 
                            the activity of clan members over time. Clan leaders can 
                            set importance factors to criteria such as donations, war 
                            stars, or clan game points, and Clash Track will calculate
                            a score for every member of the clan. This value can be used
                            to decide who to kick, promote/demote, put in war, or even 
                            for clan contests.
                        </p>
                        <h4>Future Updates</h4>
                        <p>
                            I will be adding features to Clash Activity Tracker in my free
                            time. If you have any suggestions, send them to /u/cdw2014_ on
                            Reddit or @cdw2014#3949 on Discord. Features that are currently
                            on the backlog include:
                        </p> 
                    </Grid>                                    
                </Grid>
                <Grid item xs={5}>
                    <Grid item>
                        <ol>
                            <li>
                                War line-up helper: Suggests who to put in war based on player
                                activity scores, TH, war stars, etc.
                            </li>
                            <li>
                                Add notes to members to better track how members improve/worsen
                                over time.
                            </li>
                            <li>
                                Various features to integrate Discord servers.
                            </li>
                            <li>
                                Better name/branding for the tool. Maybe some artwork. HMU if you'd
                                like to help (for exposure.. pls don't post on /r/ChoosingBeggars)
                            </li>
                            <li>
                                Allow multiple players to control a clan in separate sessions. At the
                                moment, when you enter your clan tag you will be prompted to create a
                                password. Anyone co-leaders using this tool will have to use the same
                                password to view any information.
                            </li>
                        </ol>
                    </Grid>
                    <p>
                        <Link href="/">Back Home</Link>    
                    </p>                
                </Grid>
            </Grid>       
        </div>
    )
  }

}

export default About
