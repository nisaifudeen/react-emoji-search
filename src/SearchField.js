import React, { PureComponent } from 'react';
import propTypes from "prop-types";

export default class SearchField extends PureComponent {


    static propTypes = {
        inputChange: propTypes.func
    };


    handleChange = event => {
        this.props.inputChange(event)
    }


    render() {
        return (
            <div className="search-field">
                <h3>Which Emoji are you looking for?</h3>
                <p class="label">A react project for searching emoji | by Saifudeen | <a href="https://codepen.io/nisaifudeen">Codepen</a> | <a href="https://codepen.io/nisaifudeen">Github</a></p>
                <p>Inspired by React examples</p>
                <div className="input-wrapper">
                    <input type="text" placeholder="Search emoji" onChange={this.handleChange} />
                </div>
            </div>
        )
    }
} 