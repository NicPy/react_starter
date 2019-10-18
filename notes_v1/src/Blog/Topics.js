import React from 'react';

import './Topic.css'

const topic = (props) => {
    return (
        <div className="topic">
            <i> Hey there {props.name}</i>
            <input type="text" onChange={props.changer} value={props.name}/>

        </div>
    );
}

export default topic;