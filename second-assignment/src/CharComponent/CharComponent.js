import React from 'react'

const charelement = (props) => {
    return (
        <div>
            <h2 onClick={props.click}> {props.content}</h2>
        </div>
    )
}

export default charelement