'use strict';

import React, { Component } from 'react';
import { Line } from '../Line';
import { Section } from '../Section';
import { Variable } from '../Variable';
import { profile, socialNetworks } from '../../data/data';

export default class Projects extends Component {
    render() {
        return (
            <div className="profile">
                <Section activeSection={'Projects'} />
                <Line />
                <h1>Projects</h1>
            </div>
        );
    }
}
