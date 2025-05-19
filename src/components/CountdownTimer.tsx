import { useEffect, useState } from 'react';
import { differenceInDays, differenceInHours, differenceInMinutes, differenceInSeconds } from 'date-fns';

interface CountdownTimerProps {
  weddingDate: Date;
}

export default function CountdownTimer({ weddingDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      
      const days = differenceInDays(weddingDate, now);
      const hours = differenceInHours(weddingDate, now) % 24;
      const minutes = differenceInMinutes(weddingDate, now) % 60;
      const seconds = differenceInSeconds(weddingDate, now) % 60;

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, [weddingDate]);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center p-4 bg-white/80 rounded-lg shadow-lg backdrop-blur-sm">
      <span className="text-4xl font-bold text-primary mb-2">{value}</span>
      <span className="text-sm text-gray-600 font-medium">{label}</span>
    </div>
  );

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <h2 className="text-2xl md:text-3xl text-center font-dancing mb-8 text-secondary">
        Menghitung Hari Bahagia
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <TimeUnit value={timeLeft.days} label="Hari" />
        <TimeUnit value={timeLeft.hours} label="Jam" />
        <TimeUnit value={timeLeft.minutes} label="Menit" />
        <TimeUnit value={timeLeft.seconds} label="Detik" />
      </div>
    </div>
  );
} 