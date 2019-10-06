import React from 'react';
import './Cell.css';

const Cell = (props) => {
    console.log({props});
    return (
        <div className="closed">

            {props.id}
        </div>

    );
};

export default Cell;