import React from 'react';
import './Item.css';

const item = (props) => ( 
    <div className="Clock" style={{animationDelay: props.delay}}>  
        <div className="CountDownValue">
            <h3>{props.value}</h3>
        </div>
        <div className="CountDownItem">
            <h3>{props.item}</h3>
        </div>
    </div>
)

export default item;