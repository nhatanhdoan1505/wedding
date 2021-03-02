import React from 'react';
import Helmet from 'react-helmet';


function MetaDecorator(props){

    return(
        <Helmet>
            <title>{props.title}</title>
            <meta name="description" content="Vietnam"/>
            <meta property="og:type" content="website"/>
            <meta property="og:url" content="https://invitation-91fb0.web.app/hongtrung"/>
            <meta property="og:title" content="Hello"/>
            <meta property="og:description" content="Hello"/>
            <meta property="og:image" content="https://i.postimg.cc/hjfhyZ3H/wedding-28.jpg"/>
        </Helmet>
    )
}

export default MetaDecorator;