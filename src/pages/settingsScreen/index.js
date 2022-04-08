import React from 'react';
import './style.css';
import Header from '../../components/Header/index';
import ScreenLogo from '../../components/ScreenLogo/index';
import arrow from  '../../assets/arrow.svg';
import avatar from '../../assets/avatar.svg';
import bell from '../../assets/bell.svg';
import sun from '../../assets/sun.svg';
import landscape from '../../assets/landscape.svg';
import blocked from '../../assets/blocked.svg';
import strangeA from '../../assets/strangeA.svg';
import questionMark from '../../assets/questionMark.svg';


function Setting(){
    return(
        <div className='conteiner-setting'>
            <Header />
            <div className='contener-setting-general'>
                <div className='conteiner-left'>
                    <div className='conteiner-left-top'>
                        <div className='conteiner-left-top-imgh1'>
                            <div className='div-img'><img src={arrow} alt='logo arrow'></img></div>
                            <h1>Settings</h1>    
                        </div>
                    </div>
                    <div className='conteiner-left-main'>
                        <div className='conteiner-avatar'>
                            <div className='div-imgAvatar'><img src={avatar} alt='avatar'></img></div>
                            <div className='name-avatar'>
                                <h1>Krishna</h1>
                                <h2>About info...</h2>
                            </div>
                        </div>

                        <div className='conteiner-left-main-menu'>
                            <div className='conteiner-left-main-menu-options'>
                                <div className='div-img'><img src={bell} alt='bell'></img></div>
                                <div className='div-h1'><h1>Notifications</h1></div>
                            </div>

                            <div className='conteiner-left-main-menu-options'>
                                <div className='div-img'><img src={sun} alt='sun'></img></div>
                                <div className='div-h1'><h1>Theme</h1>  </div>                          
                            </div>
                            
                            <div className='conteiner-left-main-menu-options'>
                                <div className='div-img'><img src={landscape} alt='landscape'></img></div>
                                <div className='div-h1'><h1>Chat Wallpaper</h1></div>                       
                            </div>

                            <div className='conteiner-left-main-menu-options'>
                                <div className='div-img'><img src={blocked} alt='blocked'></img></div>
                                <div className='div-h1'><h1>Blocked</h1>  </div>                             
                            </div>

                            <div className='conteiner-left-main-menu-options'>
                                <div className='div-img'><img src={strangeA} alt='Keyboard Shotcuts'></img></div>
                                <div className='div-h1'><h1>Keyboard Shortcuts</h1></div>
                            </div>

                            <div className='conteiner-left-main-menu-options'>
                                <div className='div-img'><img src={questionMark} alt='Question mark'></img></div>
                                <div className='div-h1'><h1>Help</h1>   </div>                            
                            </div>
                        </div>
                    </div>
                </div>
                <ScreenLogo />
            </div>
        </div>
    )
}

export default Setting;