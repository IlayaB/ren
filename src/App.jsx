import React, { useState } from 'react';
import './App.css';

function CustomButton({ warnMessage }) {
  return (
    <div className="button-container">
      <div className="text">
        <h1>{warnMessage}</h1>
      </div>
    </div>
  );
}

function App() {
  const [text, setText] = useState('Show modal');
  const [warnMessage, setWarnMessage] = useState('This is warn message');
  const [hint, setHint] = useState('This button shows modal');
  const [buttonActive, setButtonActive] = useState(false);

  const handleButtonClick = () => {
    setButtonActive(!buttonActive);
    if (!buttonActive) {
      setWarnMessage('This is a warn message when button is active');
    }
  };

  return (
    <div>
      <button className={`${buttonActive ? 'button-clicked' : ''}`} onClick={handleButtonClick}>
        {text}
        <p>{hint}</p>
      </button>
      {buttonActive && <CustomButton warnMessage={warnMessage} />}
    </div>
  );
}

export default App;
