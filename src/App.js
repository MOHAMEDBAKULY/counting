import { useState } from "react";

export default function App() {
  return (
    <div className="container">
      <Counter />
    </div>
  );
}

function Counter() {
  const [days, setDays] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <>
      <div className="intervals">
        <button onClick={() => setDays((d) => d + 1)} className="add">
          Add +
        </button>
        Set Days: <span>{days}</span>
        <button onClick={() => setDays((d) => d - 1)} className="sub">
          Sub -
        </button>
      </div>

      <div className="showdate">
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </div>

      <div className="increaseday">
        <button onClick={() => setCount((c) => c + days)} className="add">
          Add +
        </button>
        Count Days: <span>{count}</span>
        <button onClick={() => setCount((c) => c - days)} className="sub">
          Sub -
        </button>
      </div>
    </>
  );
}
