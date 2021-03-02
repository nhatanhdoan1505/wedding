import React from 'react';
import './GetMarried.css';

const getMarried = (props) => (
    <div className="GetMarried">
        <p style={{color: "white"}} className="p">{props.text}</p>
        <p style={{color: "white"}} className="p">KÍNH MỜI: <span style={{fontWeight:"500", color:"#eb596e"}}>{props.guess}</span></p>
    </div>
)

export default getMarried;