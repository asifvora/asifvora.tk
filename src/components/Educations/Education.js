'use strict';

import React, { Component, Fragment } from 'react';
import { Line } from '../Line';
import { formatCode } from '../../utils/utils';

export default class Education extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isCollapse: false
        }
    }

    tab() {
        return <div className="tab">
            <span className="white-space space"></span>
            <span className="white-space space"></span>
        </div>
    }

    date(value){
        return <span className="date">
       {value ?  
          <Fragment>
            <span className="keyword">new</span>
            <span className="white-space space"></span>
            <span className="class">Date</span>
            <span className="expression">(</span>
            <span className="string"
                            dangerouslySetInnerHTML={{
                                __html: formatCode(`'${value}'`)
                            }} />
              <span className="expression">)</span>
          </Fragment>
         : <span className="constant">{`undefined`} </span>}
        </span>
    }

    showCase (){ 
        const { isLast, education } = this.props;

        return <div className="stage show-case">
            <Line>
                {this.tab()}
                <span className="expression">{`{`}</span>
            </Line>
            {Object.keys(education).map(key => {
                return <Line key={key}>
                    {this.tab()}
                    {this.tab()}
                    <span className="variable">{key}</span>
                    <span className="expression">:</span>
                    <span className="white-space space"></span>
                    {key !== 'startsAt' && key !== 'endsAt' &&
                        <span className="string"
                            dangerouslySetInnerHTML={{
                                __html: formatCode(`'${education[key]}'`)
                            }} />
                    }
                    {(key === 'startsAt' || key === 'endsAt') && this.date(education[key])}
                    <span className="expression">,</span>
                </Line>
            })}
            <Line>
                {this.tab()}
                <span className="expression">{`}`}{isLast ? '' : ','}</span>
            </Line>
            {!isLast && <br />}
        </div>
    }

    render() {
        const { education } = this.props;
        const { isCollapse } = this.state;

        return (
            <Fragment>
                {!isCollapse && <div onClick={() => this.setState({ isCollapse: !isCollapse })}>
                    <Line >
                        <div className="tab">
                            <span className="white-space space"></span>
                            <span className="white-space space"></span>
                            <span className="comment">//</span>
                            <span className="white-space space"></span>
                        </div>
                        <span className="comment" dangerouslySetInnerHTML={{ __html: formatCode(`${education['startsAt']} - ${education['degree']} - ${education['study']} - ${education['grade']}`) }} />
                        <span className="collapsed">‹…›</span>
                    </Line>
                </div>}
                {isCollapse && <div onClick={() => this.setState({ isCollapse: !isCollapse })}>
                    {this.showCase()}
                </div>}
            </Fragment>
        );
    }
}
