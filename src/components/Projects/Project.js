'use strict';

import React, { Component ,Fragment } from 'react';
import { Line } from '../Line';
import { formatCode } from '../../utils/utils';

export default class Project extends Component {

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
       {value?  
          <Fragment>
            <span className="keyword">new</span>
            <span className="white-space space"></span>
            <span className="class">Date</span>
            <span className="expression">(</span>
            <span className="string"
                            dangerouslySetInnerHTML={{
                                __html: formatCode(`${value}`)
                            }} />
              <span className="expression">)</span>
          </Fragment>
         : <span className="constant">{`undefined`} </span>}
        </span>
    }

    skills(skills){
        let arr=[];
        for (const key in skills) {
            arr.push(key);
        }

        return arr.join(', ');
    }

    showCase (){ 
        const { isLast, project } = this.props;

        return <div className="stage show-case">
            <Line>
                {this.tab()}
                <span className="expression">{`{`}</span>
            </Line>
            {Object.keys(project).map(key => {
                return <Line key={key}>
                    {this.tab()}
                    {this.tab()}
                    <span className="variable">{key}</span>
                    <span className="expression">:</span>
                    <span className="white-space space"></span>
                    {(key === 'url') && 
                     <span className="string">
                        <a href={project[key]} target="_blank">{project[key]}</a>
                     </span>
                     }
                     {(key === 'skills') && 
                     <span className="expression">[
                        {this.skills(project[key])}
                     ]</span>
                     }
                    {key !== 'startsAt' && key !== 'endsAt' && key !== 'url' && key !== 'skills' &&
                        <span className="string"
                            dangerouslySetInnerHTML={{
                                __html: formatCode(`'${project[key]}'`)
                            }} />
                    }
                    {(key === 'startsAt' || key === 'endsAt') && this.date(project[key])}
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
        const { project } = this.props;
        const { isCollapse  } = this.state;

        return (
              <Fragment>
                {!isCollapse && <div onClick={() => this.setState({ isCollapse: !isCollapse })}>
                <Line>
                <div className="tab">
                    <span className="white-space space"></span>
                    <span className="white-space space"></span>
                    <span className="comment">//</span>
                    <span className="white-space space"></span>
                </div>
                <span className="comment" dangerouslySetInnerHTML={{ __html: formatCode(`${project['name']}`) }} />
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
