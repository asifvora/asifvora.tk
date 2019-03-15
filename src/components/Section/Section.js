'use strict';

import React, { Component, Fragment } from 'react';
import { Line } from '../Line';
import { sectionTypes } from '../../data/data';

export default class Section extends Component {
    render() {
        return (
            <div className="section">
                <div className="section">
                    <Line>
                        <span className="comment">/</span>
                        <span className="comment active">********</span>
                        <span className="comment collapsible">*******</span>
                        <span className="comment collapsible">****************</span>
                        <span className="comment collapsible">************</span>
                        <span className="comment collapsible">*********</span>
                        <span className="comment collapsible">******</span>
                        <span className="comment collapsible">*********</span>
                        <span className="comment collapsible">*****</span>
                        <span className="comment">
                            **
                        </span>
                    </Line>
                    <Line>
                        <span className="comment">*</span>
                        <span className="white-space space"></span>
                        {sectionTypes.map((section, key) =>
                            <Fragment key={key}>
                                <span className={section === this.props.activeSection ? 'comment selectable active' : 'comment selectable collapsible'} >{section}</span>
                                <span className={sectionTypes.length === key + 1 ? 'white-space space' : 'white-space space collapsible'} title={section}></span>
                            </Fragment>
                        )}
                        <span className="comment">*</span>
                    </Line>
                    <Line>
                        <span className="comment">*</span>
                        <span className="comment active">********</span>
                        <span className="comment collapsible">*******</span>
                        <span className="comment collapsible">****************</span>
                        <span className="comment collapsible">************</span>
                        <span className="comment collapsible">*********</span>
                        <span className="comment collapsible">******</span>
                        <span className="comment collapsible">*********</span>
                        <span className="comment collapsible">*****</span>
                        <span className="comment">
                            */
                        </span>
                    </Line>
                </div>
            </div >
        );
    }
}
