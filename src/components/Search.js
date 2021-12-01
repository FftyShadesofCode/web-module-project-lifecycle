/*
 * Copyright (c) 2021. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
 * Morbi non lorem porttitor neque feugiat blandit. Ut vitae ipsum eget quam lacinia accumsan.
 * Etiam sed turpis ac ipsum condimentum fringilla. Maecenas magna.
 * Proin dapibus sapien vel ante. Aliquam erat volutpat. Pellentesque sagittis ligula eget metus.
 * Vestibulum commodo. Ut rhoncus gravida arcu.
 */

import React from 'react';

class SearchBar extends React.Component {
    constructor() {
        super();
        this.state = {
            input: ""
        }
    }

    handleChange = (e) => {
        this.setState({
            ...this.state,
            input: e.target.value
        });
    }

    handleSumbit = (e) => {
        e.preventDefault()
        this.props.updateUserInfoApi(this.state.input)
    }

    render() {
        return (
            <form onSubmit={this.handleSumbit}>
                <input
                    type="text"
                    placeholder="github handle"
                    name="s"
                    onChange={this.handleChange}
                />
                <button type="submit">Search</button>
            </form>
        )
    }

}

export default SearchBar;
/*
 * Copyright (c) 2021. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
 * Morbi non lorem porttitor neque feugiat blandit. Ut vitae ipsum eget quam lacinia accumsan.
 * Etiam sed turpis ac ipsum condimentum fringilla. Maecenas magna.
 * Proin dapibus sapien vel ante. Aliquam erat volutpat. Pellentesque sagittis ligula eget metus.
 * Vestibulum commodo. Ut rhoncus gravida arcu.
 */

