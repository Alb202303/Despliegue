import React from 'react';
import {
  Routes,
  Route
  
} from "react-router-dom";

import Info from './Info';
import Registro from './Registro';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path="/" element={<Info />}></Route>
      <Route path="registro" element={<Registro />}></Route>
    </Routes>
    </div>
  );
}

export default App;
