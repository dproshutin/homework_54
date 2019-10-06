import React from 'react';
import './PlayingArea.css';

const PlayingArea = (props) => {

    return (
        <div className="PlayingArea">{props.children}</div>
    );
};

export default PlayingArea;