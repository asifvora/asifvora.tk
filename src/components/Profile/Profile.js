'use strict';

import React, { Component, Fragment } from 'react';
import { Line } from '../Line';
import { Section } from '../Section';
import { Variable } from '../Variable';
import { profile, socialNetworks } from '../../data/data';

export default class Profile extends Component {
    render() {
        return (
            <Fragment>
                <Section activeSection={'Profile'} />
                {Object.keys(profile).map(key => {
                    return <Variable isLink={false} key={key} displayKey={key} displayValue={profile[key]} />
                })}
                <Line />
                {Object.keys(socialNetworks).map(key => {
                    return <Variable isLink={true} key={key} displayKey={key} displayValue={socialNetworks[key]} />
                })}
            </Fragment>
        );
    }
}
