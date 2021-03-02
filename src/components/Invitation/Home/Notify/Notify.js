import React from 'react';
import './Notify.css';
import Aux from '../../../../hoc/Axu';
import Name from './Name/Name';
import Icon from './Icon/Icon';
import { faHeart } from '@fortawesome/free-solid-svg-icons';


const notify = (props) => (
    <Aux>
        <div className="Notify">
            <Name name="Hồng Trung"/>
            <Icon icon={faHeart} color="#f0394d"/>
            <Name name="Bảo Ngọc"/>
        </div>
    </Aux>
)

export default notify;