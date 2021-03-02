import React from 'react';
import Home from './Home/Home';
import Couple from './Couple/Couple';
import Wedding from './Wedding/Wedding';
import Gallery from './Gallery/Gallery';
import Memory from './Memory/Memory';
import MetaDecorator from '../MetaDecorator/MetaDecorator';
import {useParams} from 'react-router-dom';


function Invitation(props) {
    let params= useParams();
    let name = params.id;
    return(
        <div>
            <MetaDecorator title={name}/>
            <Home/>
            <Couple/>
            <Wedding/>
            <Gallery/>
            <Memory/>
        </div>
    )
}

export default Invitation;