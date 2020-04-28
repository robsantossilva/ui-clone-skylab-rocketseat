import React from 'react';
import Header from '../../components/Header';
import BgImage from '../../assets/background.png';
import Packages from '../../components/Packages';
import styled from 'styled-components';

const Content = styled.div`
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
`;

function Home() {

    return (
        <div className="container"
        style={{
            background: `url(${BgImage}) 0% 0% / cover fixed, rgb(11, 10, 13)`
        }}
        >
            <Header page="home" />

            <Content>
                <Packages />
            </Content>

        </div>
    );
}

export default Home;
