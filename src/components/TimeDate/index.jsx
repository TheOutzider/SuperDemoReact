import React, { useState, useEffect } from "react"

const TimeDisplay = () => {
  const [time, setTime] = useState(() => {
    const currentTime = new Date();
    return {
      hours: currentTime.getHours(),
      minutes: currentTime.getMinutes(),
      day: currentTime.getDay(),
      date: currentTime.getDate(),
      month: currentTime.getMonth()
    }
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date();
      setTime({
        hours: currentTime.getHours(),
        minutes: currentTime.getMinutes(),
        day: currentTime.getDay(),
        date: currentTime.getDate(),
        month: currentTime.getMonth()
      })
    }, 60000);
    return () => clearInterval(interval);
  }, [])

  const days = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"];
  const months = ["Jan", "Fév", "Mar", "Avr", "Mai", "Juin", "Juil", "Août", "Sep", "Oct", "Nov", "Déc"];
  const minutes = time.minutes < 10 ? `0${time.minutes}` : time.minutes;
  return (
    <div className="time-display">
      <span className="time">{time.hours}:{minutes}</span>
      <span className="date">{days[time.day]} {time.date} {months[time.month]}</span>
    </div>
  );
}

export default TimeDisplay;