import React from 'react';
import './style.css';
import minus from '../../assets/minus.svg';
import square from '../../assets/square.svg';
import x from '../../assets/x.svg'

function Header(){
    return(
        <div className='conteiner-header'>
            <h1>WhatsApp</h1>
            <div className='conteiner-icons'>
                <div><img src={minus} alt='logo minus'/></div>
                <div><img src={square} alt='logo square'/></div>
                <div><img src={x} alt='logo exit'/></div>
            </div>
        </div>
    )
}

export default Header;