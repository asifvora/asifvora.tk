'use strict';

import React, { Component } from 'react';
import { Line } from '../Line';
import { VariableName } from '../VariableName';
import { formatCode } from '../../utils/utils';

export default class Variable extends Component {
    render() {
        return (
            <Line>
                <span className="storage-type">const</span>
                <span className="white-space space"></span>
                <VariableName displayKey={this.props.displayKey} length={this.props.length} />
                <span className="keyword">=</span>
                <span className="white-space space"></span>
                {this.props.isLink && this.props.displayValue && <span className="string">
                    <a href={this.props.displayValue} target="_blank">{this.props.displayValue}</a>
                </span>}
                {!this.props.isLink && this.props.displayValue && <span className="string" dangerouslySetInnerHTML={{ __html: formatCode(this.props.displayValue) }} />}
                {this.props.displayValue && <span className="expression" >;</span>}
            </Line >
        );
    }
}
