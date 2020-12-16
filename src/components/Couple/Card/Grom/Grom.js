import React, {useEffect} from 'react';
import './Grom.css';
import Aos from 'aos';
import 'aos/dist/aos.css';



function Grom( props) {

    
    useEffect(() => {
        Aos.init({
            duration: 1500
        });
        Aos.refresh();
    }, [])
    return (
        <div className="CardGrom" style={{backgroundColor: props.color}}>
            <p className="CardGromPosition">{props.position}</p>
            <div className="CardGromImg">
                <div className="CardGromSocialIcon">
    
                </div>
            </div>
            <h3 className="CardGromName">{props.name}</h3>
            <p className="CardGromBirthday">{props.birthday}</p>
            <p className="CardGromScripts">{props.scripts}</p>
        </div>
    )    
} 
export default Grom;