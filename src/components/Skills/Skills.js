'use strict';

import React, { Component, Fragment } from 'react';
import { Line } from '../Line';
import Skill from './Skill';
import { Section } from '../Section';
import { Variable } from '../Variable';
import { skills } from '../../data/data';

export default class Skills extends Component {

    skills() {
        return Object.keys(skills).map(key => {
            return (
                <Line key={key}>
                    <Variable isLink={false} key={1} displayKey={key} displayValue={undefined} length={16} />
                    <Skill skill={skills[key]} />
                </Line>
            )
        })
    }

    render() {
        return (
            <div className="skillset">
                <Line />
                <Section activeSection={'Skills'} />
                <Line />
                {this.skills()}
            </div >
        );
    }
}
