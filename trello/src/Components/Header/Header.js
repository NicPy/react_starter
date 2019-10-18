import React from 'react';
import './headerStyles.css';


const logo  = () => {
    return(
        <div>
            <div className="text-center">
                <a href="google.com">
                    <img src={require('../../Images/trello.png')} className='logo' alt="trello logo"/>
                </a>
            </div>
        </div>
    )
}

export default logo;