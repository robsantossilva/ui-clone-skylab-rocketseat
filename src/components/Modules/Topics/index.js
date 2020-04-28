import React from 'react';
import { MdExpandMore, MdExpandLess } from 'react-icons/md';
import ResumeCircle from '../../ResumeCircle';
import './style.css';

export default class Topics extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            open:false
        }

        this.handleOpen = this.handleOpen.bind(this);
    }

    mapTopics(t){

        let classTopic = "topic";
        if(t.done){
            classTopic = "topic topic-done"
        }
        if(t.current){
            classTopic = "topic topic-current"
        }

        let topic = <li type="video" className={classTopic} key={t.id}>
            <button type="button"></button>
            <a href="/node/curso-java-script/group/introducao-java-script/lesson/introducao-2">
                {t.name}
            </a>
        </li>;

        return topic;
    }

    render(){

        const topicList = this.props.topics.map((t) => this.mapTopics(t));

        let btnOpen = <MdExpandMore color="rgb(135, 134, 139)" size={20}/>;
        let styleTopics = {
            display:'none'
        }
        if(this.state.open){
           btnOpen = <MdExpandLess color="rgb(135, 134, 139)" size={20}/>;
           styleTopics = {
                display:'block'
            }
        }

        

        return (
            <>
                <div className="module-content" onClick={this.handleOpen} >
                    <div className="resume">
                        <ResumeCircle 
                            sequence={this.props.sequence} 
                            total={this.props.total} 
                            done={this.props.done} 
                        />
                    </div>
                    <div className="desc">
                        <span>{this.props.module}</span>
                        <span>{this.props.total} aulas</span>
                    </div>
                    {btnOpen}
                </div>

                <ul className="module-topics" style={styleTopics}>
                    { topicList }          
                </ul>
            </>
        )
    }

    handleOpen(e) {
        if(this.state.open){
            this.setState({ open: false });    
        }else{
            this.setState({ open: true });
        }
    }
}