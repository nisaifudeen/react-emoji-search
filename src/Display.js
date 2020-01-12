import React, { PureComponent } from 'react';
import DisplayTiles from './DisplayTiles';

import propTypes from "prop-types";
export default class Display extends PureComponent {
    static propTypes = {
        emojiVal: propTypes.array
    }

    render() {

        return (
            <div className="display-field">
                {this.props.emojiVal.map(data => (
                    <DisplayTiles key={data.title} symbol={data.symbol} title={data.keywords} />

                ))
                }

            </div>
        )
    }
} 