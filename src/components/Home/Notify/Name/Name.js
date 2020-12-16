import React from 'react';
import './Name.css';
import Aux from '../../../../hoc/Axu';

const name = (props) => (
    <Aux>
        <div className="Name">
            <h1>{props.name}</h1>
        </div>
    </Aux>
)

export default name;