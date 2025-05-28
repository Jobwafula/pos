import React, { useState, useEffect } from 'react';

const Greetings = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Format time with seconds (e.g., "02:30:45 PM")
  const formattedTime = currentTime.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  });

  // Format date (e.g., "May 28, 2023")
  const formattedDate = currentTime.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <div className='flex justify-between items-center'>
      <div>
        <h1 className='text-[#f5f5f5] text-2xl font-semibold tracking-wide'>Welcome back, Job</h1>
        <p className='text-[#ababab] text-sm mt-1'>Give your best services for customers</p>
      </div>
      <div className='text-right'>
        <h1 className='text-[#f5f5f5] text-xl font-mono font-medium'>{formattedTime}</h1>
        <p className='text-[#ababab] text-sm mt-1'>{formattedDate}</p>
      </div>
    </div>
  );
};

export default Greetings;