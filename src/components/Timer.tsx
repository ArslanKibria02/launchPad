import React, { useState, useEffect } from "react";

const Timer: React.FC = () => {
  const [totalSeconds, setTotalSeconds] = useState<number>(0);
  const [isActive, setIsActive] = useState<boolean>(true);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isActive) {
      interval = setInterval(() => {
        setTotalSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    } else {
      if (interval) clearInterval(interval);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive]);

  const toggleTimer = () => {
    setIsActive((prevIsActive) => !prevIsActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setTotalSeconds(0);
  };

  // Calculate days, hours, minutes, and seconds from totalSeconds
  const days = Math.floor(totalSeconds / (60 * 60 * 24));
  const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
  const seconds = totalSeconds % 60;

  return (
    <div className="jss348">
      <li className="jss347 number">
        <span>{days}</span>
        <span className="jss350">Days</span>
      </li>
      <li className="jss349">:</li>
      <li className="jss347 number">
        <span>{hours}</span>
        <span className="jss350">Hours</span>
      </li>
      <li className="jss349">:</li>
      <li className="jss347 number">
        <span>{minutes}</span>
        <span className="jss350">Minutes</span>
      </li>
      <li className="jss349">:</li>
      <li className="jss347 number">
        <span>{seconds}</span>
        <span className="jss350">Seconds</span>
      </li>
    </div>

    // <div className="col-12">
    //   <li className="jss347 number col-2">
    //     <span> {days}</span>
    //     <span className="jss350">Days</span>
    //     <li className="jss349 col-1">:</li>
    //   </li>

    //   <li className="jss347 number col-2">
    //     <span> {hours}</span>
    //     <span className="jss350">Hours</span>
    //   </li>
    //   <li className="jss349 col-1">:</li>
    //   <li className="jss347 number col-2">
    //     <span>{minutes}</span>
    //     <span className="jss350">Minutes</span>
    //   </li>
    //   <li className="jss349 col-1">:</li>
    //   <li className="jss347 number">
    //     <span>{seconds}</span>
    //     <span className="jss350 col-2">Seconds</span>
    //   </li>
    //   {/* <button onClick={toggleTimer}>{isActive ? "Pause" : "Start"}</button>
    //   <button onClick={resetTimer}>Reset</button> */}
    // </div>
  );
};

export default Timer;
