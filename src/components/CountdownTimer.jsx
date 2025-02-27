import { useState, useEffect } from "react";

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = new Date(targetDate) - new Date();
    if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="bg-blue-800 text-white p-6 rounded-lg shadow-lg text-center">
      <h2 className="text-3xl font-bold">Conference begins in</h2>
      <div className="flex justify-center gap-6 mt-4 text-2xl font-semibold">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div key={unit} className="bg-blue-900 p-4 rounded-lg">
            <span className="text-5xl font-bold">{value}</span>
            <span className="block text-sm uppercase">{unit}</span>
          </div>
        ))}
      </div>
      <p className="mt-4 text-lg">Conference Starts: 5th MAY 2025</p>
      <p className="text-sm">Venue: KIET Group of Institutions</p>
    </div>
  );
};

export default CountdownTimer;
