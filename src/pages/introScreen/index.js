import React from 'react';
import bar from '../../assets/bar.svg';
import locker from '../../assets/locker.svg';
import whats from '../../assets/whats.svg';
import './style.css';

function Intro(){
    return(
        <div className='conteiner-background'>
            <div className='div-ImgWhats'><img src={whats} alt='logo whats'></img></div>
            <div className='div-ImgBar'> <img className='imgBar' src={bar} alt='logo bar'></img></div>
            <h1 className='title-whats'>WhatsApp</h1>
            <div className='intro-Conteiner-ImgText'>
                <div><img src={locker} alt='logo locker'></img></div>
                <h1>End-to-end encrypted</h1>
            </div>
        </div>
    )
}

export default Intro;