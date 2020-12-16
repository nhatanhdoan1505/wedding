import React from 'react';
import './Icon.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const icon = (props) => (
    <div className="NotifyIcon">
        <FontAwesomeIcon icon={props.icon} color={props.color}/>
    </div>
)

export default icon;