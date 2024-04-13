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
      <h1>Choose Your Plan</h1>
      <div className={`toggle ${isYearly ? 'yearly' : 'monthly'}`} onClick={handleToggle}>
        <input type="checkbox" id="toggle" className="toggle__input" checked={isYearly} readOnly />
        <label htmlFor="toggle" className="toggle__label">
          <div className="toggle__ball"></div>
        </label>
      </div>
      <div className="plans">
        <Starter />
        <Pro />
        <Enterprise />
      </div>
    </div>
  );
}

export default App;
