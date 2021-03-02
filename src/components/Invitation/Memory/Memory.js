import React, {useEffect} from 'react';
import Gallery from 'react-grid-gallery';
import images from './photos';
import TheHeading from '../Couple/TheHeading/TheCoupleHeading';
import './Memory.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Memory() {
    useEffect(() => {
        Aos.init({
            duration: 1000
        });
        Aos.refresh();
    }, []);
    return (
        <div className="Memory" data-aos='fade-left'>
            <TheHeading heading="Memory"/>
            <Gallery 
                images={images} 
                backdropClosesModal={true}
                showLightboxThumbnails={true}/>
        </div>
    )
}

export default Memory;