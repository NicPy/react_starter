import React from 'react'

const validator = (props) => {

    let text_advice = null;
    if(props.length < 5) {
        text_advice = 'too short'
    }else if(props.length === 5) {
        text_advice = "It is brilliant";
    }else {
        text_advice = "Too many symbols";
    }
     

    return (
        <div>
            {props.length}
            <br />
            <strong>{text_advice}</strong>
        </div>
    )
}

export default validator