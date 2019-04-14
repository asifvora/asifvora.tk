'use strict';

import React, { Component, Fragment } from 'react';
import { Line } from '../Line';
import { Section } from '../Section';
import Education from './Education';
import { Variable } from '../Variable';
import { educations } from '../../data/data';

export default class Educations extends Component {

    educations() {
        return educations.map((education, key) => {
            const isLast = educations.length === key + 1;
            return (
                <Education key={key} education={education} isLast={isLast} />
            )
        })
    }

    render() {
        return (
            <Fragment>
                <Section activeSection={'Educations'} />
                <div className="curriculum-vitae">
                    <Line>
                        <Variable isLink={false} key={1} displayKey={'educations'} displayValue={undefined} />
                        <span className="expression">[</span>
                    </Line>
                    <div className="stage">
                        {this.educations()}
                        <Line>
                            <span className="expression">]</span>
                            <span className="expression">;</span>
                        </Line>
                    </div>
                </div>
            </Fragment>
        );
    }
}
