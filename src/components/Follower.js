/*
 * Copyright (c) 2021. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
 * Morbi non lorem porttitor neque feugiat blandit. Ut vitae ipsum eget quam lacinia accumsan.
 * Etiam sed turpis ac ipsum condimentum fringilla. Maecenas magna.
 * Proin dapibus sapien vel ante. Aliquam erat volutpat. Pellentesque sagittis ligula eget metus.
 * Vestibulum commodo. Ut rhoncus gravida arcu.
 */

import React from 'react'

class Follower extends React.Component {
    handleClick = () => {
        this.props.click(this.props.user)
    }

    render() {
        return (
            <div onClick={this.handleClick}>
                <img src={this.props.user.avatar_url} alt=''/>
                <h3>{this.props.user.login}</h3>
            </div>
        )
    }
}

export default Follower