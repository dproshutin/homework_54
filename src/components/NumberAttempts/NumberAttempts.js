import React from 'react';
import './NumberAttempts.css';

const NumberAttempts = props => {
    return (
        <p className="result">
            Tries: {props.number}
        </p>
    );
};

export default NumberAttempts;