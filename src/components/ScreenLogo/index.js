import React from 'react';
import './style.css';
import handPhone from '../../assets/handPhone.svg'

function ScreenLogo(){
    return(
        <div className='conteiner-screenLogo'>
            <div className='div-img-screenLogo'><img src={handPhone} alt='handPhone'></img></div>
            <h1>Keep your phone connected</h1>
            <h2>WhatsApp connects to your phone to sync messages. To reduce data <br/> 
            usage, connect your phone to Wi-Fi.</h2>
        </div>
    )
}

export default ScreenLogo;