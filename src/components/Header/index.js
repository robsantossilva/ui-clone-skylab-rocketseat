import React, { useEffect, useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { MdNotifications } from 'react-icons/md';
import { Link, useHistory } from 'react-router-dom';
import './style.css';
import logoImg from '../../assets/logo.png';
import profileImg from '../../assets/profile.png';

function Header({page}) {
    
    let history = useHistory();
    let prev = window.scrollY;

    const [styleHeader, setStyleHeader] = useState({
        opacity: '1',
        transform: 'translateY(0px)',
        visibility: 'visible',
    });

    useEffect(() => {
        window.addEventListener('scroll', e => handleNavigation(e));
    }, [])
    
    function handleNavigation(e){
        const window = e.currentTarget;
    
        if (prev > window.scrollY) {
            setStyleHeader({
                opacity: '1',
                transform: 'translateY(0px)',
                visibility: 'visible',
                transition: 'all 0.5s ease-in-out 0s',
            });
            //console.log("scrolling up");
        } else if (prev < window.scrollY) {
            setStyleHeader({
                opacity: '0',
                transform: 'translateY(-100%)',
                visibility: 'hidden',
                transition: 'all 0.5s ease-in-out 0s',
            });
            //console.log("scrolling down");
        }
        prev = window.scrollY;
    };

    return(
        <header className="header" style={styleHeader}>
            <div className="header-container">
                <div className="header-box">
                    

                    <Link to="/dashboard" style={{
                        width:'156.69px',
                        height: '35.09px'
                    }}>
                        <img src={logoImg} />
                    </Link>
                    
                    {
                        (page!='home') ? 
                            <div className="go-back"
                                onClick={() => history.goBack()}
                            >
                                <FaArrowLeft 
                                    style={{marginRight:13}}
                                    size={14} /> Voltar
                            </div>
                        : ''
                    }
                </div>
                <div className="header-box">
                    
                </div>
                <div className="header-box">
                    <div className="alert">
                        <button>
                            <MdNotifications size={24} color="#FFFFFF" />
                        </button>
                    </div>

                    <a className="profile" href="#">
                        <div>
                            <span>Robson dos Santos Silva</span>
                            <span>robsantossilva@gmail.com</span>
                        </div>
                        <img src={profileImg} alt="Profile" />
                    </a>

                </div>
            </div>
        </header>
    );
}

export default Header;