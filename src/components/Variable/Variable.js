'use strict';

import React, { Component } from 'react';
import { Line } from '../Line';
import { VariableName } from '../VariableName';

export default class Variable extends Component {
    render() {
        return (
            <Line>
                <span className="storage-type">const</span>
                <span className="white-space space"></span>
                <VariableName displayKey={this.props.displayKey} />
                <span className="keyword">=</span>
                <span className="white-space space"></span>
                <span className="string">
                    {this.props.isLink && <a href={this.props.displayValue} target="_blank">{this.props.displayValue}</a>}
                    {!this.props.isLink && this.props.displayValue}
                </span>
                <span className="expression" >;</span>
            </Line >
        );
    }
}
