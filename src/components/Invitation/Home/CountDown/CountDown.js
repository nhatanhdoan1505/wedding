import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import './CountDown.css';
import Item from './Item/Item';

function CountDown(props) {
    const [timerDays, setTimerDays] = useState('00');
    const [timerHours, setTimerHours] = useState('00');
    const [timerMinutes, setTimerMinutes] = useState('00');
    const [timerSeconds, setTimerSeconds] = useState('00');

    let interval = useRef();
    const startTimer = () => {
        const countDownDate = new Date(props.date).getTime();
        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countDownDate - now;

            const days = Math.floor(distance/ (1000*60*60*24));
            const hours = Math.floor((distance % (1000*60*60*24)/(1000*60*60)));
            const minutes = Math.floor((distance % (1000*60*60)/(1000*60)));
            const seconds = Math.floor((distance % (1000*60))/1000);

            if (distance < 0){
                clearInterval(interval.current);
            } else{
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds); 
            }
        }, 1000);
    };

    useEffect(() => {
        startTimer();
        return () => {
            clearInterval(interval.current);
        }
    });

    return (
        <div className="CountDown">
            <Item value={timerDays} item="Ngày" delay="0.25s"/>
            <Item value={timerHours} item="Giờ" delay="0.33s"/>
            <Item value={timerMinutes} item="Phút" delay="0.41s"/>
            <Item value={timerSeconds} item="Giây" delay="0.49s"/>
        </div>
    )
} 

export default CountDown;