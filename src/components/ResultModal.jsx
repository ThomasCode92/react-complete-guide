import { forwardRef, useImperativeHandle, useRef } from 'react';

const ResultModal = forwardRef(function ResultModal(props, ref) {
  const dialogRef = useRef();

  const { targetTime, remainingTime, onReset } = props;
  const userLost = remainingTime <= 0;
  const formattedTime = (remainingTime / 1000).toFixed(2);

  useImperativeHandle(ref, function () {
    return {
      open() {
        dialogRef.current.showModal();
      },
    };
  });

  return (
    <dialog ref={dialogRef} className="result-modal">
      {userLost && <h2>You lost</h2>}
      <p>
        The target time was <strong>{targetTime} seconds</strong>.
      </p>
      <p>
        You stopped the timer with <strong>{formattedTime} seconds left</strong>
        .
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;
