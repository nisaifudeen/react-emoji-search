import React, { PureComponent } from 'react';
import propTypes from "prop-types";
export default class DisplayTiles extends PureComponent {
    static propTypes = {
        title: propTypes.string,
        symbol: propTypes.string
    }
    render() {
        const codePointHexVal = this.props.symbol.codePointAt(0).toString(16);
        const srcVal = `//cdn.jsdelivr.net/emojione/assets/png/${codePointHexVal}.png`;
        return (
            <div className="img-size">
                <img src={srcVal} alt={this.props.title} />
            </div>

        )
    }
}