import React, { useState } from 'react';
import './Counter.css';

function Counter(props) {
  const [clicks, setClicks] = useState(0);
  const [message, setMessage] = useState(props.title);

  return (
    <div className="counter-box">
      <h3>{props.title}</h3>
      <p>Clicks: {clicks}</p>
      <button onClick={() => setClicks(clicks + 1)}>Click Me</button>
      <div>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <p>You typed: {message}</p>
      </div>
    </div>
  );
}

export default Counter;