'use strict';

import React, { Component } from 'react';
import { Line } from '../Line';
import { Section } from '../Section';
import { Variable } from '../Variable';
import { profile, socialNetworks } from '../../data/data';

export default class Skills extends Component {
    render() {
        return (
            <div className="profile">
                <Section activeSection={'Skills'} />
                <Line />
                <h1>Skills</h1>
            </div>
        );
    }
}
