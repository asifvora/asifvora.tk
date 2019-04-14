'use strict';

import React, { Component, Fragment } from 'react';
import { Line } from '../Line';
import { Section } from '../Section';
import ExperienceDetails from './ExperienceDetails';
import { Variable } from '../Variable';
import { experience } from '../../data/data';

export default class Experience extends Component {

    experience() {
        return experience.map((experienceDetails, key) => {
            const isLast = experience.length === key + 1;

            return (
                <ExperienceDetails key={key} experience={experienceDetails} isLast={isLast} />
            )
        })
    }

    render() {
        return (
            <Fragment >
                <Section activeSection={'Experience'} />
                <div className="curriculum-vitae">
                    <Line>
                        <Variable isLink={false} key={1} displayKey={'experience'} displayValue={undefined} />
                        <span className="expression">[</span>
                    </Line>
                    <div className="stage job">
                        {this.experience()}
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
