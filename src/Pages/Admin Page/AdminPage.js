import React, { useState } from 'react';
import Countdown from '../Home/Countdown/Countdown';
import './AdminPage.css';


const AdminPage = () => {
  const [countdowns, setCountdowns] = useState([]);
  const [newCountdown, setNewCountdown] = useState({
    title: '',
    targetDate: '',
    targetTime: '',
  });

  const handleInputChange = (event) => {
    setNewCountdown({
      ...newCountdown,
      [event.target.name]: event.target.value,
    });
  };

  const handleAddCountdown = (event) => {
    event.preventDefault();
    const parsedDate = new Date(`${newCountdown.targetDate}T${newCountdown.targetTime}`);
    if (!isNaN(parsedDate.getTime())) {
      const newCountdownObj = {
        title: newCountdown.title,
        targetDate: parsedDate,
      };
      setCountdowns([...countdowns, newCountdownObj]);
      setNewCountdown({
        title: '',
        targetDate: '',
        targetTime: '',
      });
    } else {
      console.log('Invalid date or time format');
    }
  };

  return (
    <div className='text-center shadow-inner'>
      <h2 className='text-3xl p-16 text-custom-pink'>Important Time Remaining</h2>
      <form onSubmit={handleAddCountdown}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={newCountdown.title}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Date:
          <input
            type="date"
            name="targetDate"
            value={newCountdown.targetDate}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Time:
          <input
            type="time"
            name="targetTime"
            value={newCountdown.targetTime}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Add Countdown</button>
      </form>

      <h2 className='text-xl/8 text-custom-pink'>Times Left</h2>
      {countdowns.length > 0 ? (
        <ul className='m-8 p-6'>
          {countdowns.map((countdown, index) => (
            <li className='forBorder p-4' key={index}>
              <h3>{countdown.title}</h3>
              {/* Render the Countdown component passing the target date */}
              <Countdown targetDate={countdown.targetDate} />
            </li>
          ))}
        </ul>
      ) : (
        <p>No important deadline yet.</p>
      )}
    </div>
  );
};

export default AdminPage;
