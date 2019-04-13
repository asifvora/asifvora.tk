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
                <VariableName displayKey={this.props.displayKey} />
                <span className="keyword">=</span>
                <span className="white-space space"></span>
                {this.props.isLink && <span className="string">
                    <a href={this.props.displayValue} target="_blank">{this.props.displayValue}</a>
                </span>}
                {!this.props.isLink && <span className="string" dangerouslySetInnerHTML={{ __html: formatCode(this.props.displayValue) }} />}
                {/* {!this.props.isLink && <span className="string" dangerouslySetInnerHTML={formatCode(this.props.displayValue)}> </span>} */}
                <span className="expression" >;</span>
            </Line >
        );
    }
}
