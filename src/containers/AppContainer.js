'use strict';

import React, { Component } from 'react';
import { Line } from '../components/Line';
import { Profile } from '../components/Profile';
import { Skills } from '../components/Skills';
import { Educations } from '../components/Educations';
import { Experience } from '../components/Experience';
import { Projects } from '../components/Projects';

export default class AppContainer extends Component {
    render() {
        return (
            <React.Fragment>
                <Line />
                <Profile />
                <Line />
                <Skills />
                <Line />
                <Educations />
                <Line />
                <Experience />
                <Line />
                <Projects />
                <Line />
            </React.Fragment>
        );
    }
}
