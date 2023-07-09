import React, { useState, useEffect } from 'react';
import './Countdown.css';

const Countdown = ({ targetDate }) => {
  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  const getTimeRemaining = (endDate) => {
    const totalSeconds = Math.floor((endDate - new Date()) / 1000);
    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = Math.floor(totalSeconds % 60);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  };

  const [timeRemaining, setTimeRemaining] = useState(getTimeRemaining(targetDate));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(getTimeRemaining(targetDate));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [targetDate]);

  return (
    <div>
      <div>
        <span>{formatTime(timeRemaining.days)}</span> days{' '}
        <span>{formatTime(timeRemaining.hours)}</span> hours{' '}
        <span>{formatTime(timeRemaining.minutes)}</span> minutes{' '}
        <span>{formatTime(timeRemaining.seconds)}</span> seconds
      </div>
    </div>
  );
};

export default Countdown;
