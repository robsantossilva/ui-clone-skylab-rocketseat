import React from 'react';
import styled from 'styled-components';
import { FaUser, FaPlayCircle } from 'react-icons/fa';
import courseBG from '../../assets/course-background.png';
import bgImgCourse from '../../assets/bg-img-course.svg';

const Link = styled.a`
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    width: 100%;
    max-width: 699px;
`;

const Box = styled.div`
    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    width: 699px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    margin-bottom: 100px;
    height: 380px;
    position: relative;
    background: url(${courseBG}) center bottom, rgb(11, 10, 13);
    transition: all 0.2s ease 0s;
    border-width: 2px 2px 2px;
    border-style: solid solid none;
    border-color: rgb(11, 10, 13) rgb(11, 10, 13) rgb(11, 10, 13);
    border-image: initial;
    border-bottom: none;

    &:hover {
        border-color: ${props => props.color || "#777"};
    }
    
    &:hover::after {
        width: 100%;
    }

    &::before, .kZLmvH::after {
        content: "";
        position: absolute;
        bottom: 0px;
        left: 0px;
        width: 0%;
        height: 3px;
        transition: width 0.4s ease-in-out 0s, color 0.2s ease 0s;
    }
    &::before {
        width: 100%;
        background: rgb(40, 39, 47);
    }

    &::after {
        content: "";
        position: absolute;
        bottom: 0px;
        left: 0px;
        width: 0%;
        height: 3px;
        transition: width 0.4s ease-in-out 0s, color 0.2s ease 0s;
    }
    
    &::after {
        width: ${props => props.porcent || "100%"};
        background: ${props => props.color || "#777"};
    }
    

    & h3 {
        color: rgb(255, 255, 255);
        font-size: 25px;
        font-weight: bold;
        margin-bottom: 20px;
        text-align: center;
    }

    & svg {
        fill: ${props => props.color || "#777"};
    }
`;

const Img = styled.div`
    display: flex;
    width: 200px;
    height: 158px;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    margin-bottom: 30px;
    background: url(${bgImgCourse});
`;

const ResumoBox = styled.div`
    display: flex;
    margin-bottom: 51px;

    & div {
        display: flex;
        -webkit-box-align: center;
        align-items: center;
    }

    & div:first-child {
        margin-right: 30px;
    }

    & div svg {
        position: relative;
        margin-right: 11px;
    }

    & span {
        color: rgb(135, 134, 139);
        font-size: 14px;
        font-weight: bold;
    }

    & span span {
        margin: 0px 7px;
    }
`;

const Porcent = styled.div`
    color: rgb(135, 134, 139);
    font-size: 14px;
    font-weight: bold;

    & span {
        display: inline-block;
        margin-right: 5px;
        color: ${props => props.color || "#777"};
    }
`;

const Split = styled.div`
    position: relative;
    top: -100px;
    margin-bottom: -100px;
    min-width: 3px;
    min-height: 100px;
    background: rgb(34, 33, 41);
`;

function CourseResume({
    name,
    modules,
    lessons,
    teacher,
    porcent,
    url,
    urlImage,
    color,
    last,
}) {

    function getModules(modules){
        if(modules >= 1){
            return (<> {modules} módulos<span>|</span> </>);
        }
    }
    
    return(
        <>
            <Link href={url}>
                <Box color={color} porcent={porcent}>
                    <Img>
                        <img src={urlImage} alt={name}/>
                    </Img>

                    <h3>{name}</h3>
                    
                    <ResumoBox>
                        <div>
                    
                            <FaPlayCircle size={14} />                        
                            
                            <span>
                                {getModules(modules)}
                                {lessons} aulas
                            </span>
                        </div>
                
                        <div>
                            <FaUser />                                        
                            <span>{teacher}</span>
                        </div>
                    </ResumoBox>
            
                    <Porcent color={color}>
                    <span>{porcent}</span>completo
                    </Porcent>
                </Box>
            </Link>
            {(!last) ? 
            <Split />
            : '' }
        </>
    )
}

export default CourseResume;