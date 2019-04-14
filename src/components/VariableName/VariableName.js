'use strict';

import React, { Component, Fragment } from 'react';

export default class VariableName extends Component {

    padLeft() {
        const { length = undefined, displayKey } = this.props;
 
        if (length !== undefined && displayKey.length < length) {
            return length - displayKey.length;
        }

        return false;
    }

    padLeftSpan() {
        const padLeft = this.padLeft();

        return padLeft ? [...Array(padLeft).keys()].map(key =>
            <Fragment key={key}><span className="white-space space"></span></Fragment>
        ) : <span className="white-space space"></span>;
    }

    render() {
        return (
            <span className="variable">
                {this.props.displayKey}
                {this.padLeftSpan()}
            </span >
        );
    }
}
