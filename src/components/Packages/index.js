import React from 'react';
import styled from 'styled-components';
import PkgBG from '../../assets/pkg-background.png';

import starterImg from '../../assets/starter.svg';
import launchBaseImg from '../../assets/launch-base.svg';
import goStackImg from '../../assets/go-stack.svg';

const PackageList = styled.div`
    width: 100%;
    max-width: 1426px;
    padding: 30px;

    & > div {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: minmax(650px, auto);
        grid-column-gap: 24px;
        grid-row-gap: 24px;

        @media (max-height: 825px){
            grid-template-rows: minmax(600px, auto);
        }
    }

`;

const ItemPkg = styled.div`
    display: flex;
`;

const ContentPkg = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    flex-direction: column;
    -webkit-box-pack: justify;
    justify-content: space-between;
    background: url(${PkgBG}) 0% 0% / cover;
    border-radius: 8px;
    transition: all 0.2s ease 0s;
    padding: 64px;
    border-width: 2px;
    border-style: solid;
    border-color: rgb(11, 10, 13);
    border-image: initial;

    
    a &:active {
        margin: 2px;
        border-color: ${props => props.color || "#777"};
    }

    a &:hover {
        transform: translateY(-7px);
        border-color: ${props => props.color || "#777"};
    }

`;

const ContentPkg2 = styled.div`
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    flex: 1 1 0%;

    & span {
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
        width: 48px;
        height: 48px;
        color: ${props => props.color || "#777"};
        font-weight: bold;
        font-size: 16px;
        border-radius: 50%;
        border-width: 2px;
        border-style: solid;
        border-color: ${props => props.color || "#777"};
        border-image: initial;
    }

    & div {
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
        height: 145px;
        margin: 105px 0px 55px;
    }

    & p {
        max-width: 270px;
        text-align: center;
        color: rgb(135, 134, 139);
        font-size: 16px;
        line-height: 26px;
    }

    & p strong {
        color: ${props => props.color || "#777"};
    }
`;

const Link = styled.a`
    position: relative;
    font-size: 15px;
    text-align: center;
    color: rgb(34, 34, 34);
    cursor: pointer;
    align-self: center;
    margin-top: 35px;
    padding: 15px;
    background: ${props => props.color || "#777"};
    border-radius: 4px;
    transition: all 0.3s ease 0s;
`;

function Packages() {
    return (
        <PackageList>
            <div>
                
                <ItemPkg as="a" href="/journey/starter">
                    <ContentPkg color="#7159C1">
                        <ContentPkg2 color="#7159C1">
                            <span>01</span>
                            <div>
                                <img src={starterImg} alt="Starter Cursos Gratuitos" />
                            </div>
                            <p>
                                <strong>Torne-se um programador desejado</strong> no mercado com esses cursos gratuitos
                            </p>
                        </ContentPkg2>
                    </ContentPkg>
                </ItemPkg>

                <ItemPkg>
                    <ContentPkg disabled color="#FD951F">
                        <ContentPkg2 color="#FD951F">
                            <span>02</span>
                            <div>
                                <img src={launchBaseImg} alt="LaunchBase Bootcamp" />
                            </div>
                            <p>
                                <strong>Domine programação do zero</strong> e tenha acesso às melhores oportunidades do mercado
                            </p>
                        </ContentPkg2>

                        <Link href="https://rocketseat.com.br/baseweek-1/inscricao" target="_blank" rel="noopener noreferrer" color="#FD951F">
                            <strong>Garanta sua vaga</strong> para a próxima turma!
                        </Link>

                    </ContentPkg>
                </ItemPkg>

                <ItemPkg>
                    <ContentPkg disabled color="#04D361">
                        <ContentPkg2 color="#04D361">
                            <span>03</span>
                            <div>
                                <img src={goStackImg} alt="GoStack Bootcamp" />
                            </div>
                            <p>
                                <strong>Treinamento imersivo</strong> nas tecnologias mais modernas de desenvolvimento web e mobile
                            </p>
                        </ContentPkg2>
                        <Link href="https://rocketseat.com.br/bootcamp" target="_blank" rel="noopener noreferrer" color="#04D361">
                            <strong>Garanta sua vaga</strong> para a próxima turma!
                        </Link>
                    </ContentPkg>
                </ItemPkg>

            </div>
        </PackageList>
    )
}

export default Packages;