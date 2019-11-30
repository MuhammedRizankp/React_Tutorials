import React from 'react';
import './App.css';
import Counter from './Components/Counter.js';
import Eventbind from './Components/eventbind';
import Tablelist from './Components/Tablelist';

import If from './Components/cond_rendr.js';
function App() {
  return (
    <div className="App">
     {/*<Counter/>*/}
     {/*<Eventbind/>*/}
     {/*<If/>*/}
     <Tablelist/>
     
     </div>
  );
}

export default App;
