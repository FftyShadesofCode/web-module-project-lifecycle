/*
 * Copyright (c) 2021. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
 * Morbi non lorem porttitor neque feugiat blandit. Ut vitae ipsum eget quam lacinia accumsan.
 * Etiam sed turpis ac ipsum condimentum fringilla. Maecenas magna.
 * Proin dapibus sapien vel ante. Aliquam erat volutpat. Pellentesque sagittis ligula eget metus.
 * Vestibulum commodo. Ut rhoncus gravida arcu.
 */

import React from 'react';


class User extends React.Component {

    render() {
        const {login, avatar_url, name, public_repos, followers} = this.props.userObj

        return (
            <div className='container'>
                <div className='image'>
                    <img src={avatar_url} alt='user'/>
                </div>
                <div className='text'>
                    <h1>{name}</h1>
                    <h4>{`(${login})`}</h4>
                    <h2>{`Public Repos: ${public_repos}`}</h2>
                    <h2>{`Followers: ${followers}`}</h2>
                </div>
            </div>
        )
    }
}

export default User;
