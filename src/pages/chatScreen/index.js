import React from 'react';
import './style.css';
import Header from '../../components/Header/index';
import ChatConteiner from '../../components/ChatConteiner/index';
import cam from '../../assets/cam.svg';
import phone from '../../assets/phone.svg';
import line from '../../assets/line.svg';
import glass2 from '../../assets/glass2.svg';
import threePoint from '../../assets/threePoint.svg';
import smile from '../../assets/smile.svg';
import clip from '../../assets/clip.svg';
import microphone from '../../assets/microphone.svg';
import nakula from '../../assets/nakula.svg';

function Chat(){
    return(
        <div>
            <Header />
            <div className='contener-setting-general'>
                <ChatConteiner />
                <div className='conteiner-chat'>
                    <div className='conteiner-chat-header'>
                        <div className='conteiner-chat-header-profile'>
                            <div className='divImag-profile'><img src={nakula} alt='nakula'></img></div>
                            <div className='divImag-profile-text'>
                                <h1>Nakula Bagchi</h1>
                                <h2>last seen today at 12:22pm</h2>
                            </div>
                        </div>
                        <div className='contiener-icons-header'>
                            <div className='div-icon-header-chat'><img src={cam} alt='cam'></img></div>
                            <div className='div-icon-header-chat'><img src={phone} alt='phone'></img></div>
                            <div className='div-icon-header-chat'><img src={line} alt='line'></img></div>
                            <div className='div-icon-header-chat'><img src={glass2} alt='glass'></img></div>
                            <div className='div-icon-header-chat'><img src={threePoint} alt='Three points'></img></div>
                        </div>
                    </div>
                    <div className='chat'>
                        <div className='today'><h3>TODAY</h3></div>
                        <div className='phrase'>
                            <div className='phrase-exact'>
                                <h3 className='phrase-exact-content'>Perfect!</h3>
                                <h3 className='hours'>09:45 am</h3>
                            </div>
                            <div className='empty-div'></div>
                        </div>

                        <div className='phrase'>
                            <div className='empty-div'></div>
                            <div className='phrase-exact'>
                                <h3 className='phrase-exact-content'>Wow, this is really epic</h3>
                                <h3 className='hours'>09:47 am</h3>
                            </div>
                        </div>

                        <div className='phrase'>
                            <div className='phrase-double'>
                                <div className='phrase-exact'>
                                    <h3 className='phrase-exact-content'>How are you?</h3>
                                    <h3 className='hours'>09:47 am</h3>
                                </div>
                                <div className='phrase-exact'>
                                    <h3 className='phrase-exact-content'>Hey bro!</h3>
                                    <h3 className='hours'>09:48 am</h3>
                                </div>                            
                            </div>
                            <div className='empty-div'>
                                <div className='empty-div'></div>
                                <div className='empty-div'></div>
                            </div>
                        </div>

                        <div className='phrase'>
                            <div className='empty-div'>
                                <div className='empty-div'></div>
                                <div className='empty-div'></div>
                            </div>
                            <div className='phrase-double'>
                                <div className='phrase-exact'>
                                    <h3 className='phrase-exact-content'>I’m good.</h3>
                                    <h3 className='hours'>09:54 am</h3>
                                </div>
                                <div className='phrase-exact'>
                                    <h3 className='phrase-exact-content'>How do you do?</h3>
                                    <h3 className='hours'>09:54 am</h3>
                                </div>                            
                            </div>
                        </div>

                        <div className='phrase'>
                            <div className='empty-div'></div>
                            <div className='phrase-exact'>
                                <h3 className='phrase-exact-content'>Let's Catchup today...!</h3>
                                <h3 className='hours'>11:45 am</h3>
                            </div>
                        </div>

                        <div className='phrase'>
                            <div className='phrase-isolated-hours'>
                                <h3 className='hours'>12:56 pm</h3>                            
                                <div className='phrase-exact'>
                                    <h3 className='phrase-exact-content'>Sure bro...............</h3>
                                    <h3 className='hours'>12:57 pm</h3>                     
                                </div>                                
                            </div>

                            <div className='empty-div'>
                                <div className='empty-div'></div>
                                <div className='empty-div'></div>
                            </div>
                        </div>

                        <div className='phrase'>
                            <div className='empty-div'></div>
                            <div className='phrase-exact'>
                                <h3 className='phrase-exact-content'>Just ideas for next time</h3>
                                <h3 className='hours'>1:55 pm</h3>
                            </div>
                        </div>
                      
                    </div>

                    <div className='footer-chat'>
                        <div className='div-icon-footer-chat'><img src={smile} alt='smile'></img></div>
                        <div className='div-icon-footer-chat'><img src={clip} alt='clip'></img></div>
                        <input type='text' placeholder='Type a message'></input>  
                        <div className='div-icon-footer-chat'><img src={microphone} alt='microphone'></img></div>     
                    </div>
                </div>
                                     
            </div>
        </div>
    )
}

export default Chat;