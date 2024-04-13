import React from 'react';
import './index.scss';
import Starter from './components/starter';
import Pro from './components/pro';
import Enterprise from './components/enterprise';

function App() {
  return (
    <div className="App">
    <div className="plans">
    <Starter />
    <Pro />
    <Enterprise />
    

    </div>
    </div>
  );
}

export default App;
