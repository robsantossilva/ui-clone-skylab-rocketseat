import React from 'react'
import { FaCheck } from 'react-icons/fa';
import './style.css';

export default class  ResumeCircle extends React.Component {

    constructor(props){
        super(props);

    }

    render() {

        let iconConcluded;

        let sequence = <span>{this.props.sequence}</span>;

        let dashOffset = ((113 / this.props.total) * (this.props.total - this.props.done))

        //console.log(this.props);

        let styleCircle = {
            strokeWidth: '2',
            strokeDasharray: '113.097, 113.097',
            strokeDashoffset: dashOffset,
            stroke: 'rgb(113, 89, 193)',
            transform: 'rotate(-90deg)',
            transformOrigin: '50% 50%',
            transition: 'stroke 0.3s ease 0s, stroke-dashoffset 0.45s ease 0s',
        }

        if(this.props.done >= this.props.total){
            iconConcluded = <FaCheck color="rgb(4, 211, 97)" size={11} />
            sequence = '';
            styleCircle = {
                strokeWidth: '2',
                strokeDasharray: '113.097, 113.097',
                strokeDashoffset: '0',
                stroke: 'rgb(4, 211, 97)',
                transform: 'rotate(-90deg)',
                transformOrigin: '50% 50%',
                transition: 'stroke 0.3s ease 0s, stroke-dashoffset 0.45s ease 0s',
            }
        }

        

        return (
            <>
                <svg viewBox="0 0 38 38" className="circle">
                    <circle style={styleCircle} r="18" cx="19" cy="19"></circle>
                </svg>

                {iconConcluded}
                {sequence}
                
            </>
        )
    }
}