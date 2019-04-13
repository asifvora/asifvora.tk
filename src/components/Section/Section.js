'use strict';

import React, { Component, Fragment } from 'react';
import { Line } from '../Line';
import { sectionTypes } from '../../data/data';

export default class Section extends Component {

    stars(str) {
        return new Array(str.length + 2).join('*');
    }

    scrollToSection(name) {
        if (name !== this.props.activeSection) {
            const target = document.querySelector(`.section[data-value=${name}]`);
            target.scrollIntoView({ behavior: 'smooth' });  
        }
    }

    sections() {
        return sectionTypes.map((section, key) =>
            <Fragment key={key}>
                <span className={section === this.props.activeSection ? 'comment active' : 'comment collapsible'} >{this.stars(section)}</span>
            </Fragment>
        )
    }

    render() {
        return (
            <div className="section" data-value={this.props.activeSection}>
                <Line>
                    <span className="comment">/</span>
                    {this.sections()}
                    <span className="comment">**</span>
                </Line>
                <Line>
                    <span className="comment">*</span>
                    <span className="white-space space"></span>
                    {sectionTypes.map((section, key) =>
                        <Fragment key={key}>
                            <span
                                className={section === this.props.activeSection ?
                                    'comment selectable active' :
                                    'comment selectable collapsible'
                                }
                                onClick={() => this.scrollToSection(section)}
                            >{section}</span>
                            <span className={sectionTypes.length === key + 1 ? 'white-space space' : 'white-space space collapsible'} title={section}></span>
                        </Fragment>
                    )}
                    <span className="comment">*</span>
                </Line>
                <Line>
                    <span className="comment">**</span>
                    {this.sections()}
                    <span className="comment">/</span>
                </Line>
            </div >
        );
    }
}
