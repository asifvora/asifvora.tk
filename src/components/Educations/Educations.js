'use strict';

import React, { Component } from 'react';
import { Line } from '../Line';
import { Section } from '../Section';
import { Variable } from '../Variable';
import { profile, socialNetworks } from '../../data/data';

export default class Educations extends Component {
    render() {
        return (
            <div className="profile">
                <Section activeSection={'Educations'} />
                <Line />
                <h1>Educations</h1>
            </div>
        );
    }
}
