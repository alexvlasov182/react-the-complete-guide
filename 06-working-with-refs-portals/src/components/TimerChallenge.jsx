import { useState } from "react";

export default function TimerChallenge({ title, targetTime }) {
  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);

  function handleStart(params) {
    setTimeout(() => {
      setTimerExpired(true);
    }, targetTime * 1000);
    setTimerStarted(true);
  }

  function handleStop(params) {}

  return (
    <section className="challenge">
      <h2>{title}</h2>
      {timerExpired && <p className="challenge-expired">You lost!</p>}
      <p className="challenge-time">
        Target time: {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button onClick={handleStart}>{timerStarted ? "Stop" : "Start"}</button>
      </p>
      <p className={timerStarted ? "active" : undefined}>
        {timerStarted ? "Timer is running.." : "Timer inactive"}
      </p>
    </section>
  );
}
