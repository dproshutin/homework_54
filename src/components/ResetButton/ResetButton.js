import React from 'react';
import './ResetButton.css';

const ResetButton = props => {
    return (
        <button className="reset_btn"
            onClick={props.reset}>
            Reset
        </button>
    );
};

export default ResetButton;