import React, { Component, useState, useEffect, useLayoutEffect } from 'react';
import Header from '../../components/Header';
import BgImage from '../../assets/background.png';
import Video from '../../components/Video';
import Modules from '../../components/Modules';
import { useParams } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { changeCourseName } from '../../store/actions/course';

function Lessons() {

    const course = useSelector(state => state.course);
    const dispatch = useDispatch();
    const { course_name } = useParams();

    useEffect(()=>{
        //dispatch( changeCourseName(course_name) );
    }, [course_name]);

    let content;
    if(course.course){
        content = <> <Video /> <Modules course={course} /> </>
    }

    return (
        <div className="container"
        style={{
            background: `url(${BgImage}) 0% 0% / cover fixed, rgb(11, 10, 13)`
        }}
        >
            <Header page="lessons"/>

            <div className="content">          
            
                <div className="course" style={{height:1000}}>

                    {content}

                </div>

            </div>
        </div>
    );
}

export default Lessons;
