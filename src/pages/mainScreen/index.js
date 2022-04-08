import React from 'react';
import './style.css';
import Header from '../../components/Header/index';
import ScreenLogo from '../../components/ScreenLogo/index';
import ChatConteiner from '../../components/ChatConteiner/index';

function Main(){
    return(
        <div>
            <Header />
            <div className='contener-setting-general'>
                <ChatConteiner />
                <ScreenLogo />                     
            </div>
        </div>
    )
}

export default Main;