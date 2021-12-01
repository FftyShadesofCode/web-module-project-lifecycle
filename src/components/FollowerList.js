/*
 * Copyright (c) 2021. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
 * Morbi non lorem porttitor neque feugiat blandit. Ut vitae ipsum eget quam lacinia accumsan.
 * Etiam sed turpis ac ipsum condimentum fringilla. Maecenas magna.
 * Proin dapibus sapien vel ante. Aliquam erat volutpat. Pellentesque sagittis ligula eget metus.
 * Vestibulum commodo. Ut rhoncus gravida arcu.
 */

import React from 'react';

class FollowerList extends React.Component {

    handleClick = (e) => {
        this.props.updateUserInfoApi(e.target.name)
    }

    render() {
        return (
            <div>
                <h1>My Followers</h1>
                <div className='myGallery'>
                    {
                        this.props.followers.map(follower => (
                            <div className='item' key={follower.login}>
                                <img src={follower.avatar_url} alt='user' name={follower.login}
                                     onClick={this.handleClick}/>
                                <span className='caption'>{follower.login}</span>
                            </div>
                        ))
                    }
                </div>
            </div>

        )
    }
}

export default FollowerList;
  