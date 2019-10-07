import React from 'react';
import './Cell.css';

const Cell = (props) => {
    const fieldClasses = ["ClosedField"];
    if (props.click) {
        fieldClasses.push("OpenedField");
    }
    return (
        <div
            className={fieldClasses.join(" ")}
            onClick={props.click}
        >

            {props.id}
        </div>

    );
};

export default Cell;