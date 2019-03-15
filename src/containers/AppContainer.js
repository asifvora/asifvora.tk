'use strict';

import React, { Component } from 'react';
import { Line } from '../components/Line';
import { Profile } from '../components/Profile';

export default class AppContainer extends Component {
    render() {
        return (
            <React.Fragment>
                <Line />
                <Profile />
            </React.Fragment>
        );
    }
}
