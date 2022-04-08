import React from 'react';
import './style.css';
import avatar from '../../assets/avatar.svg';
import circle from '../../assets/circle.svg';
import plus from '../../assets/plus.svg';
import threePoint from '../../assets/threePoint.svg';
import glass from '../../assets/glass.svg';
import nakula from '../../assets/nakula.svg';
import wade from '../../assets/wade.svg';
import reatha from '../../assets/reatha.svg';
import dianne from '../../assets/dianne.svg';
import carol from '../../assets/carol.svg';
import pauline from '../../assets/pauline.svg';
import devon from '../../assets/devon.svg';
import darlene from '../../assets/darlene.svg';
import antonia from '../../assets/antonia.svg';
import theresa from '../../assets/theresa.svg';
import guy from '../../assets/guy.svg';
import check from '../../assets/check.svg';
import doubleCheckBlue from '../../assets/doubleCheckBlue.svg';
import doubleCheckGrey from '../../assets/doubleCheckGrey.svg';
import fourGuys from '../../assets/fourGuys.svg';
import rectangle from '../../assets/rectangle.svg';

function ChatConteiner(){
    return(
        <div className='conteiner-left'>
            <div className='conteiner-left-header'>
                <div className='div-img-avatar'><img src={avatar} alt=''></img></div>
                <div className='conteiner-left-header-icons'>
                    <div className='div-img-icon'><img src={circle} alt='circle'></img></div>
                    <div className='div-img-icon'><img src={plus} alt='plus'></img></div> 
                    <div className='div-img-icon'><img src={threePoint} alt=''></img></div>    
                </div>
            </div>

            <div className='conteiner-left-search'>
                <div><img src={glass} alt='glass'></img></div>
                <input type="text" placeholder="Search or start new chat"/> 
            </div>

            <div className='conteiner-chats'>
                <div className='conteiner-chats-list'>
                    
                    <div className='conteiner-chats-conteiner-chat'>
                        <div className='conteiner-chats-chat'>
                            <div className='div-img-chat'><img src={nakula} alt='nakula'></img></div>
                            <div className='conteiner-chats-chat-info'>
                                <h1>Nakula Bagchi</h1>
                                <div className='conteiner-chats-chat-info-message'>
                                    <div className='div-img-checks'><img src={check} alt='check'></img></div>
                                    <h2>just ideas for next time</h2>
                                </div>
                            </div>                            
                        </div>
                        <h3>01:55 pm</h3>
                    </div>

                    <div className='conteiner-chats-conteiner-chat'>
                        <div className='conteiner-chats-chat'>
                            <div className='div-img-chat'><img src={wade} alt='wade'></img></div>
                            <div className='conteiner-chats-chat-info'>
                                <h1>Wade Warren</h1>
                                <div className='conteiner-chats-chat-info-message'>
                                    <div className='div-img-checks'><img src={doubleCheckGrey} alt='double check'></img></div>
                                    <h2>README.rm</h2>
                                </div>
                            </div>
                        </div>
                        <h3>04:02 am</h3>
                    </div>

                    <div className='conteiner-chats-conteiner-chat'>
                        <div className='conteiner-chats-chat'>
                            <div className='div-img-chat'><img src={reatha} alt='reatha'></img></div>
                            <div className='conteiner-chats-chat-info'>
                                <h1>Reatha Beaudoin</h1>
                                <div className='conteiner-chats-chat-info-message'>
                                    <div className='div-img-checks'><img src={doubleCheckBlue} alt='Double check blue'></img></div>
                                    <h2>Hold on I need at least a few minutes</h2>
                                </div>
                            </div>
                        </div>  
                        <h3>02:02 am</h3>                      
                    </div>

                    <div className='conteiner-chats-conteiner-chat'>
                        <div className='conteiner-chats-chat'>
                            <div className='div-img-chat'><img src={dianne} alt='dianne'></img></div>
                            <div className='conteiner-chats-chat-info'>
                                <h1>Dianne Russel</h1>
                                <div className='conteiner-chats-chat-info-message'>
                                    <div className='div-img-checks'><img src={check} alt='Check'></img></div>
                                    <h2>Tom is in a big hurry</h2>
                                </div>
                            </div>
                        </div>    
                        <h3>11:27 pm</h3>                    
                    </div>

                    <div className='conteiner-chats-conteiner-chat'>
                        <div className='conteiner-chats-chat'>
                            <div className='div-img-chat'><img src={carol} alt='carol'></img></div>
                            <div className='conteiner-chats-chat-info'>
                                <h1>Carol Ross</h1>
                                <div className='conteiner-chats-chat-info-message'>
                                    <div className='div-img-checks'><img src={doubleCheckBlue} alt='Double check blue'></img></div>
                                    <h2>+7 (903) 679-96-15</h2>
                                </div>
                            </div>
                        </div>   
                        <h3>Yesterday</h3>                     
                    </div>

                    <div className='conteiner-chats-conteiner-chat'>
                        <div className='conteiner-chats-chat'>
                            <div className='div-img-chat'><img src={pauline} alt='pauline'></img></div>
                            <div className='conteiner-chats-chat-info'>
                                <h1>Pauline Richardson</h1>
                                <div className='conteiner-chats-chat-info-message'>
                                    <div className='div-img-checks'><img src={doubleCheckGrey} alt='Double check grey'></img></div>
                                    <h2>adamk@yahoo.com</h2>
                                </div>
                            </div>
                        </div>     
                        <h3>Wednesday</h3>                   
                    </div>

                    <div className='conteiner-chats-conteiner-chat'>
                        <div className='conteiner-chats-chat'>
                            <div className='div-img-chat'><img src={devon} alt='devon'></img></div>
                            <div className='conteiner-chats-chat-info'>
                                <h1>Devon Lane</h1>
                                <div className='conteiner-chats-chat-info-message'>
                                    <div className='div-img-checks'><img src={check} alt='check'></img></div>
                                    <h2>The Core Skills Needed to Manage Your Team</h2>
                                </div>
                            </div>
                        </div> 
                        <h3>Sunday</h3>                       
                    </div>

                    <div className='conteiner-chats-conteiner-chat'>
                        <div className='conteiner-chats-chat'>
                            <div className='div-img-chat'><img src={darlene} alt='darlene'></img></div>
                            <div className='conteiner-chats-chat-info'>
                                <h1>Darlene Robertson</h1>
                                <div className='conteiner-chats-chat-info-message message-emoticon'>
                                    <div className='div-img-checks message-emoticon-checks'><img src={doubleCheckBlue} alt='Double check blue'></img></div>
                                    <div className='div-img-emoticon'><img src={fourGuys} alt='four guys'></img></div>
                                    <div className='div-img-emoticon'><img src={fourGuys} alt='four guys'></img></div>
                                </div>
                            </div>
                        </div>
                        <h3>07/05/2016</h3>                        
                    </div>

                    <div className='conteiner-chats-conteiner-chat'>
                        <div className='conteiner-chats-chat'>
                            <div className='div-img-chat'><img src={antonia} alt='antonia'></img></div>
                            <div className='conteiner-chats-chat-info'>
                                <h1>Antonia Macdaniel</h1>
                                <div className='conteiner-chats-chat-info-message'>
                                    <div className='div-img-checks'><img src={check} alt='check'></img></div>
                                    <h2>amazon.co.jp</h2>
                                </div>
                            </div>
                        </div>
                        <h3>15/08/2017</h3>                        
                    </div>

                    <div className='conteiner-chats-conteiner-chat'>
                        <div className='conteiner-chats-chat'>
                            <div className='div-img-chat'><img src={theresa} alt='theresa'></img></div>
                            <div className='conteiner-chats-chat-info'>
                                <h1>Theresa Webb</h1>
                                <div className='conteiner-chats-chat-info-message'>
                                    <div className='div-img-checks'><img src={check} alt='check'></img></div>
                                    <h2>jeanne85@gmail.com</h2>
                                </div>
                            </div>
                        </div>     
                        <h3>16/08/2013</h3>                   
                    </div>

                    <div className='conteiner-chats-conteiner-chat'>
                        <div className='conteiner-chats-chat'>
                            <div className='div-img-chat'><img src={guy} alt='guy'></img></div>
                            <div className='conteiner-chats-chat-info'>
                                <h1>Guy Hankins</h1>
                                <div className='conteiner-chats-chat-info-message'>
                                    <div className='div-img-checks'><img src={check} alt='check'></img></div>
                                    <h2>Just ideas for next time</h2>
                                </div>
                            </div>
                        </div>
                        <h3>28/10/2012</h3>                        
                    </div>
                </div>

                <div className='scrollingBar'>
                    <div><img src={rectangle} alt='rectangle'></img></div>
                </div>
            </div>


        </div>
    )
}

export default ChatConteiner;