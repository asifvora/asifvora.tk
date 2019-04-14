'use strict';

import React, { Component, Fragment } from 'react';
import { formatCode } from '../../utils/utils';

export default class Skill extends Component {

    render() {
        const { skill: { level, name } } = this.props;

        return (
            <Fragment>
                <span className="expression">{`{`}</span>
                <span className="white-space space"></span>
                {/* <span className="variable">level</span>
                <span className="expression">:</span>
                <span className="white-space space"></span>
                <span className="number progress" >{level.toFixed(1)}</span>
                <span className="expression">,</span>
                <span className="white-space space"></span> */}
                <span className="variable">name</span>
                <span className="expression">:</span>
                <span className="white-space space"></span>
                <span className="string" dangerouslySetInnerHTML={{ __html: `'${formatCode(name)}'` }} />
                <span className="white-space space"></span>
                <span className="expression">{`}`}</span>
                <span className="expression">;</span>
            </Fragment >
        );
    }
}
