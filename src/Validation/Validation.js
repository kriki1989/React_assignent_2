import React from 'react';

const validation = ( props ) => {

    let text = "Text long enough";
    if (props.length <= 5) {
        text = (
            "Text too short"
        );
    }

    return (
        // props.length < 5 ? <p>Text too short</p> : <p>Text long enough</p>
        <p>{text}</p>
    )
};

export default validation;