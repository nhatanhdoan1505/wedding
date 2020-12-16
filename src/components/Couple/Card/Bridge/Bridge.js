import React, { useEffect } from 'react';
import './Bridge.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Bridge(props) {  

    useEffect(() => {
        Aos.init({
            duration: 1500
        });
        Aos.refresh();
    }, [])
    return (
        <div className="CardBridge" style={{backgroundColor: props.color}}>
            <p className="CardBridgePosition">{props.position}</p>
            <div className="CardBridgeImg">
                <div className="CardBridgeSocialIcon">
    
                </div>
            </div>
            <h3 className="CardBridgeName">{props.name}</h3>
            <p className="CardBridgeBirthday">{props.birthday}</p>
            <p className="CardBridgeScripts">{props.scripts}</p>
        </div>
    )
} 

export default Bridge;