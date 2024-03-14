import React, { useState, useEffect } from "react";

const CountdownTimer: React.FC<{ targetDate: Date }> = ({ targetDate }) => {
  const calculateTimeLeft = (): {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  } => {
    const difference = targetDate.getTime() - new Date().getTime();
    let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="text-center mt-4">
      <h1 className="text-4xl font-bold flex flex-row justify-center gap-2">
        <div className="text-sm">
          <span className="text-2xl block w-20 h-20 rounded-lg border-2 border-[rgba(255, 255, 255, 0.2)] py-6 px-3 mb-3">
            {timeLeft.days}
          </span>{" "}
          Days
        </div>
        <div className="text-sm">
          <span className="text-2xl block w-20 h-20 rounded-lg border-2 border-[rgba(255, 255, 255, 0.2)] py-6 px-3 mb-3">
            {timeLeft.hours}{" "}
          </span>
          Hours
        </div>
        <div className="text-sm">
          <span className="text-2xl block w-20 h-20 rounded-lg border-2 border-[rgba(255, 255, 255, 0.2)] py-6 px-3 mb-3">
            {timeLeft.minutes}{" "}
          </span>
          Minutes
        </div>
        <div className="text-sm">
          <span className="text-2xl block w-20 h-20 rounded-lg border-2 border-[rgba(255, 255, 255, 0.2)] py-6 px-3 mb-3">
            {timeLeft.seconds}
          </span>
          Seconds
        </div>
      </h1>
    </div>
  );
};

export default CountdownTimer;
