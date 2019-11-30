import React from 'react';
import './App.css';
import Counter from './Components/Counter.js';
import Eventbind from './Components/eventbind';

import If from './Components/cond_rendr.js';
function App() {
  return (
    <div className="App">
     {/*<Counter/>*/}
     {/*<Eventbind/>*/}
     
     <If/>
     
     </div>
  );
}

export default App;
