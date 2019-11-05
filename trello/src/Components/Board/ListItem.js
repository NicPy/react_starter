import React from 'react';

const listItem = (props) => {
    return(
        <div>
            <p className="list-item">{props.text}</p>
        </div>
    )
}

export default listItem;