import React from 'react';
import './Cell.css';

const Cell = (props) => {
    const fieldClasses = ["ClosedField"];
    return (
        <div className="closedField">

            {props.id}
        </div>

    );
};

export default Cell;