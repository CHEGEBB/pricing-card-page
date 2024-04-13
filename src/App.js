import React, { useState } from 'react';
import './index.scss';
import Starter from './components/starter';
import Pro from './components/pro';
import Enterprise from './components/enterprise';

function App() {
  const [isYearly, setIsYearly] = useState(false);

  const handleToggle = () => {
    setIsYearly(!isYearly);
  };

  return (
    <div className="App">
    <div className="current-plan">
      <h3>Your Current Plan:</h3>
      {/* updated dynamically based on clicked plan */}
    </div>
    <div className="offers">
    <div className="choice">
        <h1>Choose a Plan</h1>
      </div>

      <div className="toggle-container">
        <span className="toggle-text">Billed monthly</span>
        <div className={`toggle ${isYearly ? 'yearly' : ''}`} onClick={handleToggle}>
          <input type="checkbox" id="toggle" className="toggle__input" />
          <label htmlFor="toggle" className="toggle__label">
            <div className="toggle__ball"></div>
          </label>
        </div>
        <span className="toggle-text">Billed yearly</span>
      </div>

      <div className="plans">
        <Starter />
        <Pro />
        <Enterprise />
      </div>
    </div>
      
    </div>
  );
}

export default App;
