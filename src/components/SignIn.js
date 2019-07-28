import React from 'react'
import { Switch, Route } from "react-router-dom"
import { DialogActions, DialogContentText, DialogTitle, DialogContent, TextField, Dialog, Button } from '@material-ui/core'
import axios from 'axios'
import Crypto from 'crypto'

export class SignIn extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            open: true,
            clanTag: "",
            playerTag: "",
            hashedPassword: "",
            clans: null
        }
    }

    async getClans() {
        return axios.get('http://localhost:3001/clans').then(data => data.data)
    }

    async componentDidMount() {
        this.setState({ clans: await this.getClans() })
    }

    handleClick() {
        if(this.state.clanTag === "") return
        if(this.props.newUser) {
            let url = 'http://localhost:3001/clans/signup/tag=' + this.state.clanTag + "&player=" + this.state.playerTag + "&pass=" + this.state.hashedPassword
            axios.get(url).then(res => console.log(res))
        } else {
            this.state.clans.map(clan => {
                if(clan.tag === this.state.clanTag && clan.hash === this.state.hashedPassword) {
                    
                }
            })
        }
    }

    renderPlayerPrompt() {
        return (
            <TextField
                autoFocus
                margin="dense"
                id="player-tag"
                label="Your Player Tag"
                type="text"
                fullWidth
                onChange={e => this.setState({ playerTag: e.target.value })}
            />
        )
    }

    render() {
        return (
            <Dialog open={this.state.open} aria-labelledby="form-dialog-title">
                <DialogTitle id="sign-in-form">{this.props.newUser ? "Sign Up" : "Log In"}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {this.props.newUser ? 
                            "Enter your clan tag after the pound sign (#), and choose a password if you want to lock " +
                            "clan from being used by other players.":
                            "Enter your clan tag and optional password if your clan is locked. To recover a password, " +
                            "contact me on Reddit (/u/cdw2014_) or Discord (@cdw2014#3949)."}
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="clan-tag"
                        label="Clan Tag"
                        type="text"
                        fullWidth
                        onChange={e => this.setState({ clanTag: e.target.value })}
                    />
                    {this.props.newUser ? this.renderPlayerPrompt() : null}
                    <TextField
                        margin="dense"
                        id="password"
                        label="Password"
                        type="password"
                        fullWidth
                        onChange={e => this.setState({ hashedPassword: e.target.value },console.log(this.state.hashedPassword))}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => this.handleClick()} color="primary">
                        OK
                    </Button>
                </DialogActions>
            </Dialog>
        )
    }

}

export default SignIn
