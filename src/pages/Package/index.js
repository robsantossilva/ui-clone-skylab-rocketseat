import React, { useState } from 'react';
import Header from '../../components/Header';
import BgImage from '../../assets/background.png';
import styled from 'styled-components';
import CourseResume from '../../components/CourseResume';

const Content = styled.div`
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
`;

const PackageContent = styled.div`
    display: flex;
    max-width: 1336px;
    padding-top: 71px;
    flex: 1 1 0%;
`;

const SideLeft = styled.div`
    position: sticky;
    top: 71px;
    width: 325px;
    height: calc(100vh - 80px);
    padding-left: 100px;

    & span {
        color: rgb(135, 134, 139);
        line-height: 1.5;
        font-size: 16px;
        display:block;
    }

    & img {
        margin-bottom: 40px;
    }
`;

const SideRight = styled.div`
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    flex: 1 1 0%;
`;

function Package() {

    const [courses, setCourses] = useState([
        {
            name:"Curso JavaScript",
            modules:"4",
            lessons:"23",
            teacher:"Diego Fernandes",
            porcent:"52%",
            url:"/node/curso-java-script",
            urlImage:"https://skylab.rocketseat.com.br/api/files/1566444110414.png",
            color:"#F7DE20",
        },
        {
            name:"Curso JavaScript ES6",
            modules:"4",
            lessons:"22",
            teacher:"Diego Fernandes",
            porcent:"0%",
            url:"/node/curso-java-script-es-6",
            urlImage:"https://skylab.rocketseat.com.br/api/files/1566444881250.png",
            color:"#FF7D40",
        },
        {
            name:"NodeJS",
            modules:"0",
            lessons:"14",
            teacher:"Diego Fernandes",
            porcent:"0%",
            url:"/node/curso-node-js",
            urlImage:"https://skylab.rocketseat.com.br/api/files/1564681946529.svg",
            color:"#8CC84B",
        },
        {
            name:"ReactJS",
            modules:"0",
            lessons:"10",
            teacher:"Diego Fernandes",
            porcent:"0%",
            url:"#",
            urlImage:"https://skylab.rocketseat.com.br/api/files/1564682281422.svg",
            color:"#2AC7E3",
        },
        {
            name:"React Native",
            modules:"0",
            lessons:"11",
            teacher:"Diego Fernandes",
            porcent:"0%",
            url:"#",
            urlImage:"https://skylab.rocketseat.com.br/api/files/1564682425906.svg",
            color:"#5568F9",
        },
    ]);

    const countCourses = 0;
    const ultimo = false;

    return (
        <div className="container"
        style={{
            background: `url(${BgImage}) 0% 0% / cover fixed, rgb(11, 10, 13)`
        }}
        >
            <Header page="package" />

            <Content>
                
                <PackageContent>

                    <SideLeft>
                        <img src="https://skylab.rocketseat.com.br/api/files/1580220889586.svg" alt="Bootcamp" />
                        <span>Torne-se um programador desejado no mercado com esses cursos gratuitos</span>
                    </SideLeft>

                    <SideRight>

                        {courses.map( (course, i) => {

                            return (<CourseResume 
                                key={i+1}
                                name={course.name}
                                modules={course.modules}
                                lessons={course.lessons}
                                teacher={course.teacher}
                                porcent={course.porcent}
                                url={course.url}
                                urlImage={course.urlImage}
                                color={course.color}
                                last={(i+1) == (courses.length)}
                            />)

                        })}

                    </SideRight>

                </PackageContent>

            </Content>

        </div>
    );
}

export default Package;
