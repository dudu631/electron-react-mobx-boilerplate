import React from 'react';
import './App.css';
import { HashRouter, Route, Routes as Switch } from "react-router-dom";
import Home from './views/Home';

const App : React.FC = () => {
  return (
   <HashRouter>
      <Switch>
        <Route path="*" element={<Home/>} />
      </Switch>
      </HashRouter>
  );
}

export default App;
