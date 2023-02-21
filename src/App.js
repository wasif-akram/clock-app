import React, { useState } from 'react';
import './App.css';

function App() {
  let time = new Date().toLocaleTimeString();
  const [ctime,setCtime] = useState(time);

  const UpdateTime = () => {
    time = new Date().toLocaleTimeString();
    setCtime(time);
  };

  setInterval(UpdateTime,1000);
  return (
    <div className="App">
      <header className="App-header">
       
       <h1 className='App-link'>{ctime}</h1>
      
      </header>
    </div>
  );
};

export default App;
