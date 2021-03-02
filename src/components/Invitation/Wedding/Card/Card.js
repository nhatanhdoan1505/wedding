import React from 'react';
import './Card.css';
import { faThumbtack } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Card(props) {
    return(
        <div className="Card">
            <div className="CardIconTitle">
                <FontAwesomeIcon 
                    icon={props.icon} 
                    color={props.color}/>
            </div>
            <h5>{props.title}</h5>
            <h4>{props.time}</h4>
            <div className="CardIconLocation">
                <FontAwesomeIcon 
                    icon={faThumbtack}
                    color="#f0394d"/>
            </div>
            <p>{props.address}</p>
        </div>
    )
}

export default Card;