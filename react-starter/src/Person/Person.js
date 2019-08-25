import React from 'react';

    const person = (props) => {
        return (
            <div>
                <h2>Here is {props.name}. THe age is {props.age} </h2>
                <p>{props.children}</p>
                <input type="text" onChange={props.changed} />
            </div>
        );
    };

export default person;