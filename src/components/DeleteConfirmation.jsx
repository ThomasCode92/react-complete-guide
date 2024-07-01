import { useEffect, useState } from 'react';

const TIMER_DURATION = 3000;

export default function DeleteConfirmation({ onConfirm, onCancel }) {
  const [remainingTime, setRemainingTime] = useState(TIMER_DURATION);

  useEffect(() => {
    console.log('Interval set...');
    const interval = setInterval(() => {
      setRemainingTime(prevTime => prevTime - 10);
    }, 10);

    return () => {
      console.log('Cleaning up interval...');
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    console.log('Timer set...');
    const timer = setTimeout(() => {
      onConfirm();
    }, TIMER_DURATION);

    return () => {
      console.log('Cleaning up timer...');
      clearTimeout(timer);
    };
  }, [onConfirm]);

  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
      <progress value={remainingTime} max={TIMER_DURATION} />
    </div>
  );
}
