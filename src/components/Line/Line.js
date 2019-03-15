'use strict';

import React, { Component } from 'react';

export default class Line extends Component {
    render() {
        return (
            <div className="line">
                {this.props.children}
            </div>
        );
    }
}
