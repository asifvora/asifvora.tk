'use strict';

import React, { Component } from 'react';

export default class VariableName extends Component {
    render() {
        return (
            <span className="variable">
                {this.props.displayKey}
                <span className="white-space space"></span>
            </span >
        );
    }
}
