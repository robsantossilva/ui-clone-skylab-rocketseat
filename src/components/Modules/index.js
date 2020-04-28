import React from 'react';
import Topics from './Topics'

import './style.css';

export default class Modules extends React.Component{

    constructor(props){
        super(props)
    }

    render() {
        return (
            <aside className="modules">
                
                <header className="course-name">
                    <img src={this.props.course.courseImg} 
                        alt={this.props.course.course} />
                    <strong>{this.props.course.course}</strong>
                </header>
                {this.props.course.modules.map((m)=>
                    <Topics  
                        key={m.sequence}
                        sequence={m.sequence}
                        module={m.name} 
                        topics={m.topics} 
                        total={m.total} 
                        done={m.done} 
                    />
                )}
                

            </aside>
        );
    };
}