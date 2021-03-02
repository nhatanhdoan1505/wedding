import React from 'react';
import './Heading.css';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Heading(props) {
    return (
        <div className="Heading">
            <div className="HeadingContainer">
                <h1>{props.grom}</h1>
                <div className="HeadingIcon">
                    <FontAwesomeIcon icon={faHeart} color="#f0394d"/>
                </div>
                <h1>{props.bridge}</h1>
            </div>
        </div>
    )
}

export default Heading;