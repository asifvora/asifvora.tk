'use strict';

import React, { Component } from 'react';
import { Line } from '../Line';
import { Section } from '../Section';
import Education from './Education';
import { Variable } from '../Variable';
import { educations } from '../../data/data';

export default class Educations extends Component {

    educations() {
        return educations.map((education, key) => {
            return (
                <Education key={key} education={education} />
            )
        })
    }

    render() {
        return (
            <div className="curriculum-vitae">
                <Section activeSection={'Educations'} />
                <Line />
                <div className="curriculum-vitae">
                    <Line>
                        <Variable isLink={false} key={1} displayKey={'educations'} displayValue={undefined} />
                        <span className="expression">[</span>
                    </Line>
                    <div className="stage job">
                        {this.educations()}
                        <Line>
                            <span className="expression">]</span>
                            <span className="expression">;</span>
                        </Line>
                    </div>
                </div>
            </div>
        );
    }
}
