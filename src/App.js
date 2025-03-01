/*
 * Copyright (c) 2021. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
 * Morbi non lorem porttitor neque feugiat blandit. Ut vitae ipsum eget quam lacinia accumsan.
 * Etiam sed turpis ac ipsum condimentum fringilla. Maecenas magna.
 * Proin dapibus sapien vel ante. Aliquam erat volutpat. Pellentesque sagittis ligula eget metus.
 * Vestibulum commodo. Ut rhoncus gravida arcu.
 */

import React from 'react';
import SearchBar from './components/Search';
import User from './components/User';
import FollowerList from './components/FollowerList';
import axios from 'axios'
import './App.css'

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            userHandle: 'FftyShadesofCode',
            userObj: {},
            followers: [],
            isDefault: true
        }
    }

    componentDidMount() {
        this.updateUserInfoApi(this.state.userHandle)
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.userHandle !== this.state.userHandle || this.state.isDefault) {
            axios.get(`https://api.github.com/users/${this.state.userHandle}/followers`)
                .then(res => {
                    const followers = res.data
                    this.setState({
                        followers: [...followers]
                    })
                })
            this.setState({
                isDefault: false
            })
        }
    }


    updateUserInfoApi = (handle) => {
        axios.get(`https://api.github.com/users/${handle}`)
            .then(res => {
                const userHandle = handle;
                const userObj = res.data
                this.setState({
                    userHandle: userHandle,
                    userObj: userObj
                });
            })
    }


    render() {

        return (<div>
            <h1>Github Info</h1>
            <SearchBar updateUserInfoApi={this.updateUserInfoApi}/>
            <User userObj={this.state.userObj}/>
            <FollowerList followers={this.state.followers} updateUserInfoApi={this.updateUserInfoApi}/>
        </div>);
    }
}

export default App;