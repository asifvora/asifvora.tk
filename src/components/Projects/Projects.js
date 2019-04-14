'use strict';

import React, { Component, Fragment } from 'react';
import { Line } from '../Line';
import { Section } from '../Section';
import Project from './Project';
import { Variable } from '../Variable';
import { projects } from '../../data/data';

export default class Projects extends Component {

    project() {
        return projects.map((project, key) => {
            const isLast = projects.length === key + 1;

            return (
                <Project key={key} project={project} isLast={isLast} />
            )
        })
    }

    render() {
        return (
            <Fragment>
                <Section activeSection={'Projects'} />
                <div className="curriculum-vitae">
                    <Line>
                        <Variable isLink={false} key={1} displayKey={'projects'} displayValue={undefined} />
                        <span className="expression">[</span>
                    </Line>
                    <div className="stage job">
                        {this.project()}
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
