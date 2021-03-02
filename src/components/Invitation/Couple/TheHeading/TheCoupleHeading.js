import React, { useEffect } from 'react';
import './TheCoupleHeading.css';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Aos from 'aos';
import 'aos/dist/aos.css';


function TheCoupleHeading(props){

    useEffect(() => {
        Aos.init({
            duration: 1000
        });
        Aos.refresh();
    }, []);
    return (
        <div className="TheCoupleHeading" data-aos="flip-down">
            <h2>{props.heading} 
                <span>
                    <FontAwesomeIcon icon={faHeart} color="#f0394d"/>
                </span>
            </h2>
        </div>
    )
}

export default TheCoupleHeading;