'use strict';

import React, { Component } from 'react';
import { Line } from '../Line';
import { Section } from '../Section';
import { Variable } from '../Variable';
import { profile, socialNetworks } from '../../data/data';

export default class Experience extends Component {
    render() {
        return (
            <div className="profile">
                <Section activeSection={'Experience'} />
                <Line />
                <h1>Experience</h1>
            </div>
        );
    }
}
