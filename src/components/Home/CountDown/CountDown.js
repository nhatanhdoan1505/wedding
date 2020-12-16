import React from 'react';
import './CountDown.css';
import Item from './Item/Item';

const countDown = (props) => (
    <div className="CountDown">
        <Item value="10" item="Ngày" delay="0.25s"/>
        <Item value="0" item="Giờ" delay="0.33s"/>
        <Item value="0" item="Phút" delay="0.41s"/>
        <Item value="0" item="Giây" delay="0.49s"/>
    </div>
)

export default countDown;