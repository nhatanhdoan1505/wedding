import React from 'react';
import './Paragraph.css';

function Paragraph(props) {
    return (
        <div className="Paragraph">
            <p>{props.sentence}</p>
        </div>
    )
}

export default Paragraph;